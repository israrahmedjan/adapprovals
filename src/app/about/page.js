import { fetchPage } from "@/hepler/helper";
import React from "react";
import CustomPortableText from "@/components/PortableText";
export async function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export default async function page() {
  await wait(1000);

  const page = await fetchPage("about-us");
  return (
    <>
      <div className="container mx-auto p-2 mt-24">
        {process.env.testvar}
        {/* <CustomPortableText key={4} blocks={post[0].pagedetail} /> */}
        {page.length > 0 && (
          <>
            {page.map((pg, i) => {
              return (
                <>
                  <div className="" key={i}>
                    <h2 className="text-2xl text-customRed mb-5">
                      {pg.pagetitle}{" "}
                    </h2>
                    <div>
                      <div>
                        {/* <PortableText value={pg.pagedetail} /> */}

                        <CustomPortableText
                          key={pg.pageslug}
                          blocks={pg.pagedetail}
                        />
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
