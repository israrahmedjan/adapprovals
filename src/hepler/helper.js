import { client } from "@/app/sanity/client";
export async function fetchPage(pageslug) {
  const query = `*[_type == "contentpages" && pageslug.current == '${pageslug}']`;
  //const query = `*[_type == "contentpages" && slug.current == "contact-us"][0]`;
  const params = {
    timestamp: new Date().getTime(), // Add a unique parameter to force fresh data
  };
  return await client.fetch(query, params);
}
