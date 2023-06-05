import React from "react";
import Link from "next/link";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <div className="relative bg-gray-500 py-[2em] px-12 text-white flex mdmax800:flex-col mdmax800:space-y-9 justify-between items-center z-[100]">
      <div>
        <Link href="/">
          <h5 className="font-fugaze">SmartPix</h5>
        </Link>
      </div>
      <div className="flex space-x-8">
        <Link href="/" className="p2-regular-16">
          Home
        </Link>
        <Link href="/showcase" className="p2-regular-16">
          Showcase
        </Link>
        <Link href="/pricing" className="p2-regular-16">
          Pricing
        </Link>
        <Link href="/playground/texttoimage" className="p2-regular-16">
          Playground
        </Link>
      </div>
      <div className="flex space-x-5">
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <AiFillFacebook className="text-[20px]" />
        </a>
        <a
          href="https://www.linkedin.com/in/la-min-ko-ko-907827205/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin className="text-[20px]" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
