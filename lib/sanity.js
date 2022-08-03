const sanityClient = require("@sanity/client");

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2021-07-18",
  token: "", // or leave blank to be anonymous user
  useCdn: false, // `false` if you want to ensure fresh data
});

module.exports = client;
