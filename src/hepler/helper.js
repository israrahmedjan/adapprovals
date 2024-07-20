import { client } from "@/app/sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
export async function fetchPage(pageslug) {
  const query = `*[_type == "blog_pages" && pageslug.current == '${pageslug}']`;
  //const query = `*[_type == "contentpages" && slug.current == "contact-us"][0]`;
  const params = {
    timestamp: new Date().getTime(), // Add a unique parameter to force fresh data
  };

  try {
    return await client.fetch(query, params);
  } catch (error) {
    // console.error("Failed to fetch data:", error.message);
    // Handle the error appropriately, maybe return a default value or rethrow the error
    throw error; // or return null / an empty array, etc.
  }
}

// Export Services Details
export async function fetchService(pageslug) {
  const query = `*[_type == "blog_services" && slug.current == '${pageslug}']`;
  //const query = `*[_type == "contentpages" && slug.current == "contact-us"][0]`;
  const params = {
    timestamp: new Date().getTime(), // Add a unique parameter to force fresh data
  };

  try {
    return await client.fetch(query, params);
  } catch (error) {
    // console.error("Failed to fetch data:", error.message);
    // Handle the error appropriately, maybe return a default value or rethrow the error
    throw error; // or return null / an empty array, etc.
  }
}

// End Export Services Details

export async function fetchServices() {
  const query = `*[_type == "blog_services" 
&& category._ref== "3b361a97-8c8c-41c4-8e5c-25e9fa150613"]
{
  title,pagefeatured,description,slug
}`;
  //const query = `*[_type == "contentpages" && slug.current == "contact-us"][0]`;
  const params = {
    timestamp: new Date().getTime(), // Add a unique parameter to force fresh data
  };

  try {
    const data = await client.fetch(query, params);
    const newdata = data.map((itm) => {
      return {
        ...itm,
        pagefeatured: imageSource(itm.pagefeatured).url(),
        slug: itm.slug.current,
      };
    });
    //  console.log("New Array", newdata);
    // const myimage = imageSource(data[0].pagefeatured);
    //console.log("Data is that", myimage.url());
    return newdata;
  } catch (error) {
    // console.error("Failed to fetch data:", error.message);
    // Handle the error appropriately, maybe return a default value or rethrow the error
    throw error; // or return null / an empty array, etc.
  }
}

export function imageSource(source) {
  return builder.image(source);
}
