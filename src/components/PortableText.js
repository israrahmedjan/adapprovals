// components/CustomPortableText.js

import React from "react";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

const serializers = {
  types: {
    // block: ({ children, value }) => {
    //   console.log("Current Blocks : ", value.style);
    //   switch (value.style) {
    //     case "h2":
    //       return <h2>{value.children[0].text}</h2>;
    //     case "h3":
    //       return <h3>{value.children[0].text}</h3>;
    //     case "h5":
    //       return <h5>{value.children[0].text}</h5>;
    //     case "normal":
    //       return <p>{children}</p>;
    //     default:
    //       return <p>{children}</p>;
    //   }
    // },
    image: ({ value }) => {
      // console.log("Value is that", value);
      const { asset, alt } = value;
      if (!asset) return null;
      const projectId = process.env.projectId_En;
      const dataset = process.env.dataset_En;
      // Construct the image URL based on the asset reference
      const imageUrl = `https://cdn.sanity.io/images/${projectId}/${dataset}/${asset._ref.split("-")[1]}-${asset._ref.split("-")[2]}.${asset._ref.split("-")[3]}`;

      return (
        <div>
          <img src={imageUrl} />
          {/* <Image
            src={imageUrl}
            alt={alt || "Image"}
            layout="responsive"
            width={20} // adjust width as necessary
            height={20} // adjust height as necessary
          /> */}
        </div>
      );
    },
  },
};

export default function CustomPortableText({ blocks }) {
  //  console.log("Data", blocks);
  return <PortableText value={blocks} components={serializers} />;
}
