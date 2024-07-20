"use_client";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

export default async function Cards({ services }) {
  //console.log("My services", services);
  return (
    <>
      <div className="container mx-auto p-2">
        <div className="flex flex-wrap justify-start">
          {services &&
            services.map((itm, i) => {
              return (
                <div key={i} className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full p-2">
                  <div className="border rounded-lg overflow-hidden shadow-lg">
                    <Link href={`services/${itm.slug}`}>
                      <div className="relative mx-4 my-2 w-full">
                        <Image
                          src={`${itm.pagefeatured}`}
                          alt="DMT Approval"
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-customRed font-bold text-lg">
                          {itm.title}
                        </h3>
                        <p className="text-gray-600 text-[16px] font-normal">
                          {itm.description}
                        </p>
                        <i
                          className="fa fa-arrow-right bg-slate-950 text-customRed"
                          aria-hidden="true"
                        ></i>
                        <FontAwesomeIcon
                          icon={faArrowAltCircleRight}
                          className="text-customRed w-8 text-2xl mt-2"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="w-full px-2 mt-3">
          <Link href="/services">
            <div className="border border-gray-300 text-gray-500 rounded-md font-semibold w-full text-center block hover:bg-customRed hover:text-white text-xl p-2">
              View All
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
