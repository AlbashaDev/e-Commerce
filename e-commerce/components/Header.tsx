import Image from "next/image";
import Link from "next/link";
import React from "react";
import bazel from "../src/assets/images/bazel.png";
import {
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#E7ECEE] p-4">
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div className="relative  h-20 w-20 cursor-pointer transition hover:opacity-100">
            <Image src={bazel} object-contain alt={""} />
          </div>
        </Link>
      </div>
      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <a className="headerLink">Product</a>
        <a className="headerLink">Explore</a>
        <a className="headerLink">Support</a>
        <a className="headerLink">About</a>
      </div>
      <div className="">
        <SearchIcon className="headerIcon" />
      </div>
    </header>
  );
}

export default Header;
