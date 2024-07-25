import { createClient } from "next-sanity";

// export const client = createClient({
//   projectId: "pka9hpcg", // find this at manage.sanity.io or in your sanity.json
//   dataset: "production", // this is usually 'production'
//   apiVersion: "2024-07-13", // use a UTC date string
//   useCdn: false, // `false` if you want to ensure fresh data
// });

export const client = createClient({
  projectId: process.env.projectId_En, // find this at manage.sanity.io or in your sanity.json
  dataset: process.env.dataset_En, // this is usually 'production'
  apiVersion: "2024-07-13", // use a UTC date string
  useCdn: false, // `false` if you want to ensure fresh data
  token: process.env.Token_En,
});
