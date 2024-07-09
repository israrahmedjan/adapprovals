import React from "react";
import Image from "next/image";
export default function Slider() {
  return (
    <>
      <div className="relative w-full h-[568px]">
        <Image
          src="/images/banner.jpg"
          alt="Banner Image"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">
            Welcome to My Website
          </h1>
        </div>
      </div>
    </>
  );
}
