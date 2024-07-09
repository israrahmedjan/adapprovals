import React from "react";
export async function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export default async function page() {
  await wait(1000);
  return (
    <>
      <div className="container mx-auto p-2 mt-24">
        <div className="">
          <h2 className="text-2xl text-customRed">Services</h2>
          <p>Description page</p>
        </div>
      </div>
    </>
  );
}
