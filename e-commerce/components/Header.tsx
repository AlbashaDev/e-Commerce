import Image from "next/image";
import Link from "next/link";
import React from "react";
import bazel from "../src/assets/images/bazel.png";

function Header() {
  return (
    <header>
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div className="relative  h-20 w-20 cursor-pointer transition hover:opacity-100">
            <Image src={bazel} object-contain />
          </div>
          <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
            <a className="headerLink">Product</a>
            <a className="headerLink">Explore</a>
            <a className="headerLink">Support</a>
            <a className="headerLink">About</a>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
