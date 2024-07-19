import { createClient } from "next-sanity";

// export const client = createClient({
//   projectId: "pka9hpcg", // find this at manage.sanity.io or in your sanity.json
//   dataset: "production", // this is usually 'production'
//   apiVersion: "2024-07-13", // use a UTC date string
//   useCdn: false, // `false` if you want to ensure fresh data
// });

export const client = createClient({
  projectId: process.env.projectId, // find this at manage.sanity.io or in your sanity.json
  dataset: process.env.dataset, // this is usually 'production'
  apiVersion: "2024-07-13", // use a UTC date string
  useCdn: false, // `false` if you want to ensure fresh data
});
