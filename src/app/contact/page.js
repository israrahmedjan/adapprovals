import React from "react";
import CustomPortableText from "@/components/PortableText";
import { fetchPage } from "@/hepler/helper";

export default async function Page() {
  const page = await fetchPage("contact-us");

  //  mmmm console.log("My Latest Post:", post.length);

  return (
    <>
      <div className="container mx-auto p-2 mt-24">
        {/* <CustomPortableText key={4} blocks={post[0].pagedetail} /> */}
        {page.length > 0 && (
          <>
            {page.map((pg, i) => {
              return (
                <>
                  <div className="" key={i}>
                    <h2 className="text-2xl text-customRed">{pg.pagetitle} </h2>
                    <div>
                      <div>
                        {/* <PortableText value={pg.pagedetail} /> */}

                        <CustomPortableText key={i} blocks={pg.pagedetail} />
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </>
        )}
      </div>
      {/* <pre>
        <p>{JSON.stringify(post, null, 2)}</p>
      </pre> */}
    </>
  );
}
