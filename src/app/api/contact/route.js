// src/app/api/hello/route.js
import { NextResponse } from "next/server";
import { client } from "@/app/sanity/client";

export async function GET(request) {
  return new Response(JSON.stringify({ message: "Hello, world 111!" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function POST(request) {
  const data = await request.json();
  console.log("Reciedved Data : ", data);
  const newContact = {
    _type: "blog_contacts",
    username: data.username,
    useremail: data.useremail,
    userdescription: data.userdescription,
  };
  try {
    const datacontact = await client.create(newContact);
    console.log("Tutor saved successfully!");
    return NextResponse.json({ contacts: datacontact });
  } catch (error) {
    console.error("Sanity create error:", error);
  }

  //   return new Response(JSON.stringify({ message: "Hello, POST!", data }), {
  //     status: 200,
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
}
