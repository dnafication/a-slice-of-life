const groq = require('groq');
const toMarkdown = require('@sanity/block-content-to-markdown');

const client = require('../utils/sanityClient');

const generateCollection = item => {
  return {
    ...item,
    description: toMarkdown(item.description, { ...client.config() })
  };
};

const getCollection = async () => {
  const query = groq`* [_type=='collection'] | order(_createdAt desc)
  { _createdAt, title, categories[0]->{title}, description, "mainImage": mainImage.asset -> url, publishedAt, slug}`;
  const collection = await client.fetch(query).catch(console.error);
  return collection.map(generateCollection);
};

// getCollection().then(data => {
//   console.log(data);
// });

module.exports = getCollection;
