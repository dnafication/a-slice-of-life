const fetch = require('node-fetch');

const getInstaPics = async () => {
  const res = await fetch(
    'https://www.instagram.com/a_slice_of_life.brishi/?__a=1'
  ).catch(console.error);
  const jsonBody = await res.json();
  const pics = jsonBody.graphql.user.edge_owner_to_timeline_media.edges;
  return pics.slice(0, 5).map(pic => pic.node.shortcode);
};

// getInstaPics().then(console.log);

module.exports = getInstaPics;
