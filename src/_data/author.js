const groq = require('groq');

const client = require('../utils/sanityClient');

const getAuthorDetails = async function() {
  const query = groq`* [_type=='author' && name=='Amrish Manikoth']`;
  const docs = await client.fetch(query).catch(console.error);
  return docs;
};

getAuthorDetails().then(() => {
  console.log(`author query triggered`);
});

module.exports = getAuthorDetails;
