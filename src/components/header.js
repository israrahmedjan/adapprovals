// src/components/Header.jsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Cards from "./cards";
import Footer from "./footer";
import Slider from "./slider";

const TopHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white text-gray-600 z-50 border-gray-200 border-b-[1px]">
        <div className="container mx-auto flex justify-between items-center p-3">
          <div className="text-lg font-bold">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={34}
                priority
              />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-4 font-semibold uppercase text-[15px]">
            <Link href="/">Home</Link>

            <Link className="hover:text-customRed" href="/about">
              About Us
            </Link>
            <Link className="hover:text-customRed" href="/services">
              Services
            </Link>

            <Link className="hover:text-customRed" href="/blogs">
              Blogs
            </Link>
            <Link className="hover:text-customRed" href="/contact">
              Contact Us
            </Link>
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Open Menu"
            >
              ☰
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-gray-800">
            <ul className="flex flex-col items-center space-y-4 py-4 font-bold text-gray-600">
              <li>
                <Link className="hover:bg-slate-950" href="/">
                  <span onClick={() => setIsMenuOpen(false)}>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span
                    className="hover:underline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span
                    className="hover:underline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
};

export default TopHeader;
