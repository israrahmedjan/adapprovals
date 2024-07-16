import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "4zgias1l", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is usually 'production'
  apiVersion: "2024-07-13", // use a UTC date string
  useCdn: false, // `false` if you want to ensure fresh data
});
