import CustomPortableText from "@/components/PortableText";
import { fetchService } from "@/hepler/helper";

export default async function page({ params }) {
  const slug = params.slug;
  const service = await fetchService(slug);

  return (
    <>
      <div className="container mx-auto p-2">
        <div className="flex flex-wrap justify-start mt-32">
          {service &&
            service.map((itm, i) => {
              return (
                <>
                  <div className="" key={i}>
                    <h2 className="text-2xl text-customRed mb-5">
                      {itm.title}
                    </h2>
                    <div>
                      <div>
                        {/* <PortableText value={pg.pagedetail} /> */}

                        <CustomPortableText
                          key={itm.slug}
                          blocks={itm.detail}
                        />
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}
