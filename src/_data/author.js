const groq = require('groq');
const toMarkdown = require('@sanity/block-content-to-markdown');

const client = require('../utils/sanityClient');

const getAuthorDetails = async function() {
  const query = groq`* [_type=='author' && name=='Amrish Manikoth']
  {
    name, subtitle, phone, address, bio, email, eyeem, facebook, instagram,
    "image": image.asset->url, "logo": logo.asset->url
  }`;
  const docs = await client.fetch(query).catch(console.error);
  return docs.map(author => {
    return {
      ...author,
      bio: toMarkdown(author.bio, { ...client.config() })
    };
  });
};

// getAuthorDetails().then(() => {
//   console.log(`author query triggered`);
// });

module.exports = getAuthorDetails;
