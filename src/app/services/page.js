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
          <p>
            Our company consists of an expert team of professionals who are
            knowledgeable on the process of developmental projects in Abu Dhabi.
            We are known to be the company that creates innovative and
            sustainable solutions even to the most challenging project. We
            provide every engineering solution needed for the projects of our
            clients and assist them through a smooth and hassle-free procedure
            to acquire approvals from DMT, ADCD, ADM, Al Ain Municipality, Al
            Dhafrah Municipality, ITC, DOH, Food Control and Safety, ADDC, DCT,
            Masdar City, KIZAD, Industrial City, and many more. The accuracy of
            our services and the creativity of our team provide our clients the
            best experience with us.gi
          </p>
          <p>
            Our company consists of an expert team of professionals who are
            knowledgeable on the process of developmental projects in Abu Dhabi.
            We are known to be the company that creates innovative and
            sustainable solutions even to the most challenging project. We
            provide every engineering solution needed for the projects of our
            clients and assist them through a smooth and hassle-free procedure
            to acquire approvals from DMT, ADCD, ADM, Al Ain Municipality, Al
            Dhafrah Municipality, ITC, DOH, Food Control and Safety, ADDC, DCT,
            Masdar City, KIZAD, Industrial City, and many more. The accuracy of
            our services and the creativity of our team provide our clients the
            best experience with us.gi
          </p>
          <p>
            Our company consists of an expert team of professionals who are
            knowledgeable on the process of developmental projects in Abu Dhabi.
            We are known to be the company that creates innovative and
            sustainable solutions even to the most challenging project. We
            provide every engineering solution needed for the projects of our
            clients and assist them through a smooth and hassle-free procedure
            to acquire approvals from DMT, ADCD, ADM, Al Ain Municipality, Al
            Dhafrah Municipality, ITC, DOH, Food Control and Safety, ADDC, DCT,
            Masdar City, KIZAD, Industrial City, and many more. The accuracy of
            our services and the creativity of our team provide our clients the
            best experience with us.gi
          </p>
        </div>
      </div>
    </>
  );
}
