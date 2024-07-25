"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (data) => {
    setIsLoading(true);
    const response = await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    //const result = await response.json();
    console.log(response);
    if (response.ok) {
      setIsSuccess(true);
      setSuccessMessage("Your message has been sent successfully!");
      setIsLoading(false);
      reset();
    } else {
      setIsSuccess(false);
      setSuccessMessage(
        "There was an error sending your message. Please try again."
      );
    }

    console.log("Button clicked!");
  };
  return (
    <>
      <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl text-customRed mb-5">Contact Us</h2>
        {isSuccess && (
          <div className="mb-4">
            <p className="text-green-500 text-xs italic">{successMessage}</p>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              id="username"
              {...register("username", { required: "Name is required" })}
              type="text"
              className="input appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.username && (
              <p className="text-red-500 text-xs italic">
                {errors.username.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="useremail"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              id="useremail"
              {...register("useremail", { required: "Email is required" })}
              type="email"
              className="input appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.useremail && (
              <p className="text-red-500 text-xs italic">
                {errors.useremail.message}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="userdescription"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="userdescription"
              {...register("userdescription", {
                required: "Message is required",
              })}
              className="textarea appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.userdescription && (
              <p className="text-red-500 text-xs italic">
                {errors.userdescription.message}
              </p>
            )}
          </div>
          <div className="flex items-center space-x-4 justify-end">
            {isLoading && (
              <div className="animate-spin rounded-full h-4 w-4 border-t-4 border-b-4 border-customRed"></div>
            )}
            <button
              type="submit"
              className="bg-customRed  hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit Data
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
