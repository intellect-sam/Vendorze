"use client";

import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import {
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure, // Import Box from Chakra UI
} from "@chakra-ui/react";
import Image from "next/image";
import { logo } from "@/assets/images";
import Link from "next/link";

const Header = () => {
  const [menuIcon, setIcon] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [header, setHeader] = useState(false);

  const handleSmallScreen = () => {
    setIcon(!menuIcon);
  };

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);

    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);

  return (
    <div
      className={`w-screen flex items-center justify-center ${
        header ? "bg-[#FAFAFA] z-40 shadow-md ease-in-out" : "bg-none"
      }`}
    >
      <header className=" container ease-in duration-300 top-0 left-0 z-10 ">
        <nav className=" py-4 flex justify-between items-center">
          <div className="max-w-[110px]">
            <Link href="/">
              <Image src={logo} alt="logo" className="w-1/2 md:w-full" />
            </Link>
          </div>

          {/* larger screen */}
          <div className="hidden md:block md:flex gap-20 md:text-[12px] items-center">
            <ul className="items-center text-[#339999] gap-5 md:flex text-sm">
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="/businesses">Vendors</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>

              <Link href="/auth/signup">
                <button
                  className="bg-second-col text-primary  rounded-[7px] min-w-[112px] text-sm  p-3"
                  onClick={() => console.log("Clicked!")}
                >
                  Join
                </button>
              </Link>

              <Link href="/auth/login">
                <button className="border-[1px] border-second-col text-[#339999]  rounded-[7px] min-w-[112px] text-sm  p-3">
                  Login
                </button>
              </Link>
            </ul>
          </div>

          <div onClick={handleSmallScreen} className="flex md:hidden">
            {
              <button onClick={onOpen} className="p-2 shadow-md">
                <GiHamburgerMenu size="20px" className="text-second-col" />
              </button>
            }
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <nav className="min-h-screen flex flex-col p-5 justify-center gap-5">
                  <Link href="#">About</Link>
                  <Link href="/businesses">Vendors</Link>
                  <Link href="/faq">FAQ</Link>

                  <Link href="/auth/signup">
                    <button
                      className="bg-second-col text-primary rounded-md w-[280px] py-2"
                      onClick={() => console.log("Clicked!")}
                    >
                      Join
                    </button>
                  </Link>

                  <Link href="/auth/login">
                    <button
                      className="border-[1px] border-second-col rounded-md w-[280px] py-2"
                      onClick={() => console.log("")}
                    >
                      Login
                    </button>
                  </Link>
                </nav>
              </DrawerContent>
            </Drawer>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
