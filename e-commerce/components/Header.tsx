import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../assets/images/pte_logo_magyar_angol.svg";
import {
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Header() {
  const session = false;

  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#E7ECEE] p-4">
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div className="w-100 h-100 relative cursor-pointer transition hover:opacity-100">
            <Image
              src={Logo}
              className="layout-fill object-contain "
              alt={""}
            />
          </div>
        </Link>
      </div>
      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <a className="headerLink hover:scale-125">Product</a>
        <a className="headerLink hover:scale-125">Explore</a>
        <a className="headerLink hover:scale-125">Support</a>
        <a className="headerLink hover:scale-125">About</a>
      </div>
      <div className="flex items-center justify-center gap-x-4 md:w-1/5">
        <SearchIcon className="headerIcon" />
        <Link href={"/checkout"}>
          <div className="relative cursor-pointer">
            <span
              className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center
            justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white"
            >
              5
            </span>
            <ShoppingBagIcon className="headerIcon" />
          </div>
        </Link>

        {session ? (
          <Image
            src={
              //session.user?.image ||
              "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            }
            alt=""
            className="cursor-pointer rounded-full"
            width={34}
            height={34}
            //onClick={() => signOut()}
          />
        ) : (
          <UserIcon
            className="headerIcon"
            //onClick={() => signIn()}
          />
        )}
      </div>
    </header>
  );
}

export default Header;
