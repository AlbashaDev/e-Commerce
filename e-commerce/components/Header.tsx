import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../assets/images/TTKlogoZöldÉsFehér.svg";
import LogoHover from "../assets/images/TTKLogoZöldÉsKék.png";

import {
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Header() {
  const session = false;
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#E7ECEE] p-4">
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div className="relative h-32 w-32 cursor-pointer transition">
            {hovered ? (
              <Image
                src={LogoHover}
                className="layout-fill h-32 w-32 object-contain "
                alt={""}
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
              />
            ) : (
              <Image
                src={Logo}
                className="layout-fill h-48 w-48 object-contain"
                alt={""}
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
              />
            )}
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
