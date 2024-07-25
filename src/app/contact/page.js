import React from "react";
import CustomPortableText from "@/components/PortableText";
import { fetchPage } from "@/hepler/helper";
import Contact from "@/components/contact";

export default async function Page() {
  const page = await fetchPage("contact-us");

  // const newTutor = {
  //   _type: "tutor",
  //   tutorname: "abcd",
  //   tutoremail: "abcd@gmail.com",
  //   tutordescription: "abcd",
  // };

  // // try {
  // //   const createdTutor = await client.create(newTutor);
  // //   console.log("Tutor saved successfully!", createdTutor);
  // // } catch (error) {
  // //   console.error("Sanity create error:", error);
  // // }

  return (
    <div className="container mx-auto p-2 mt-24">
      <Contact />
    </div>
  );
}
