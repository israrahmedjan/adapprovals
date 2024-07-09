"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

export default function Cards() {
  return (
    <>
      <div className="container mx-auto p-2">
        <div className="flex flex-wrap justify-start">
          <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full p-2">
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <Link href="/services/dmt-approval">
                <div className="relative mx-4 my-2 w-full">
                  <img src="/images/card1.webp" alt="DMT Approval" />
                </div>
                <div className="p-4">
                  <h3 className="text-customRed font-bold text-lg">
                    DMT Approval
                  </h3>
                  <p className="text-gray-600 text-[16px] font-normal">
                    The Department of Municipalities and Transport or DMT was
                    founded to be responsible for governing the urban planning
                    and transport sectors of the three regional municipalities
                    of the capital Emirate.
                  </p>
                  <FontAwesomeIcon
                    icon={faArrowAltCircleRight}
                    className="text-customRed text-2xl mt-2"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full p-2">
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <Link href="/services/dmt-approval">
                <div className="relative mx-4 my-2 w-full">
                  <img src="/images/card2.webp" alt="DMT Approval" />
                </div>
                <div className="p-4">
                  <h3 className="text-customRed font-bold text-lg">
                    Abu Dhabi Municipality Approval
                  </h3>
                  <p className="text-gray-600 text-[16px] font-normal">
                    The Department of Municipalities and Transport or DMT was
                    founded to be responsible for governing the urban planning
                    and transport sectors of the three regional municipalities
                    of the capital Emirate.
                  </p>
                  <FontAwesomeIcon
                    icon={faArrowAltCircleRight}
                    className="text-customRed text-2xl mt-2"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full p-2">
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <Link href="/services/dmt-approval">
                <div className="relative mx-4 my-2 w-full">
                  <img src="/images/card3.webp" alt="DMT Approval" />
                </div>
                <div className="p-4">
                  <h3 className="text-customRed font-bold text-lg">
                    Al Ain City Municipality Approval
                  </h3>
                  <p className="text-gray-600 text-[16px] font-normal">
                    The Department of Municipalities and Transport or DMT was
                    founded to be responsible for governing the urban planning
                    and transport sectors of the three regional municipalities
                    of the capital Emirate.
                  </p>
                  <FontAwesomeIcon
                    icon={faArrowAltCircleRight}
                    className="text-customRed text-2xl mt-2"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full p-2">
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <Link href="/services/dmt-approval">
                <div className="relative mx-4 my-2 w-full">
                  <img src="/images/card4.webp" alt="DMT Approval" />{" "}
                </div>
                <div className="p-4">
                  <h3 className="text-customRed font-bold text-lg">
                    Al Dhafrah Region Municipality Approval
                  </h3>
                  <p className="text-gray-600 text-[16px] font-normal">
                    The Department of Municipalities and Transport or DMT was
                    founded to be responsible for governing the urban planning
                    and transport sectors of the three regional municipalities
                    of the capital Emirate.
                  </p>
                  <FontAwesomeIcon
                    icon={faArrowAltCircleRight}
                    className="text-customRed text-2xl mt-2"
                  />
                </div>
              </Link>
            </div>
          </div>

          <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full p-2">
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <Link href="/services/dmt-approval">
                <div className="relative mx-4 my-2 w-full">
                  <img src="/images/card5.webp" alt="DMT Approval" />{" "}
                </div>
                <div className="p-4">
                  <h3 className="text-customRed font-bold text-lg">
                    Abu Dhabi Civil Defence Approval
                  </h3>
                  <p className="text-gray-600 text-[16px] font-normal">
                    The Department of Municipalities and Transport or DMT was
                    founded to be responsible for governing the urban planning
                    and transport sectors of the three regional municipalities
                    of the capital Emirate.
                  </p>
                  <FontAwesomeIcon
                    icon={faArrowAltCircleRight}
                    className="text-customRed text-2xl mt-2"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full p-2">
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <Link href="/services/dmt-approval">
                <div className="relative mx-4 my-2 w-full">
                  <img src="/images/card6.webp" alt="DMT Approval" />{" "}
                </div>
                <div className="p-4">
                  <h3 className="text-customRed font-bold text-lg">
                    ADDC APPROVAL
                  </h3>
                  <p className="text-gray-600 text-[16px] font-normal">
                    The Department of Municipalities and Transport or DMT was
                    founded to be responsible for governing the urban planning
                    and transport sectors of the three regional municipalities
                    of the capital Emirate.
                  </p>
                  <FontAwesomeIcon
                    icon={faArrowAltCircleRight}
                    className="text-customRed text-2xl mt-2"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full p-2">
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <Link href="/services/dmt-approval">
                <div className="relative mx-4 my-2 w-full">
                  <img src="/images/card7.webp" alt="DMT Approval" />{" "}
                </div>
                <div className="p-4">
                  <h3 className="text-customRed font-bold text-lg">
                    ITC Approval
                  </h3>
                  <p className="text-gray-600 text-[16px] font-normal">
                    The Department of Municipalities and Transport or DMT was
                    founded to be responsible for governing the urban planning
                    and transport sectors of the three regional municipalities
                    of the capital Emirate.
                  </p>
                  <FontAwesomeIcon
                    icon={faArrowAltCircleRight}
                    className="text-customRed text-2xl mt-2"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full p-2">
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <Link href="/services/dmt-approval">
                <div className="relative mx-4 my-2 w-full">
                  <img src="/images/card8.webp" alt="DMT Approval" />{" "}
                </div>
                <div className="p-4">
                  <h3 className="text-customRed font-bold text-lg">
                    Department of Health Approval
                  </h3>
                  <p className="text-gray-600 text-[16px] font-normal">
                    The Department of Municipalities and Transport or DMT was
                    founded to be responsible for governing the urban planning
                    and transport sectors of the three regional municipalities
                    of the capital Emirate.
                  </p>
                  <FontAwesomeIcon
                    icon={faArrowAltCircleRight}
                    className="text-customRed text-2xl mt-2"
                  />
                </div>
              </Link>
            </div>
          </div>
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
