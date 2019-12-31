const sanityClient = require('@sanity/client');

const client = sanityClient({
  projectId: '7soch461',
  dataset: 'production',
  token: process.env.API_TOKEN, // or leave blank to be anonymous user
  useCdn: false // `false` if you want to ensure fresh data, also private data cannot be cached.
});

module.exports = client;
