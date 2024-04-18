'use client';

import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

import {
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure, // Import Box from Chakra UI
} from '@chakra-ui/react';
import Image from 'next/image';
import { Logo } from '@/assets/images';
import Link from 'next/link';

const Header = () => {
  const [menuIcon, setIcon] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSmallScreen = () => {
    setIcon(!menuIcon);
  };

  return (
    <>
      <header className="w-full ease-in duration-300 top-0 left-0 z-10">
        <nav className="max-w-[1166px] mx-auto py-4 flex justify-between items-center p-4">
          <div>
            <Link href="/">
              <Image
                src={Logo}
                alt="logo"
                className="md:w-[110px] w-16"
              />
            </Link>
          </div>

          {/* larger screen */}
          <div className="hidden md:flex gap-20 md:text-[12px]">
            <ul className="items-center text-gray-dark md:flex gap-10">
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="/businesses">Businesses</Link>
              </li>
            </ul>
            <div className="md:flex md:gap-10">
              <Link href="/auth/signup">
                <button
                  className="bg-second-col text-primary md:w-[120px] rounded-[7px] text-sm md:text-[12px] py-3"
                  onClick={() => console.log('Clicked!')}>
                  Sign Up
                </button>
              </Link>

              <Link href="/auth/login">
                <button className="border-2 border-second-col text-second-col md:w-[120px] rounded-[7px] text-sm text-center justify-center py-[0.6rem]  md:text-[12px] ">
                  Login
                </button>
              </Link>
            </div>
          </div>

          <div
            onClick={handleSmallScreen}
            className="flex md:hidden">
            {
              <button onClick={onOpen}>
                <GiHamburgerMenu
                  size="20px"
                  className="text-second-col"
                />
              </button>
            }
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <nav className="min-h-screen flex flex-col p-5 justify-center gap-5">
                  <Link href="#">About</Link>
                  <Link href="/businesses">Businesses</Link>

                  <Link href="/auth/signup">
                    <button
                      className="bg-second-col text-primary rounded-md w-[280px] py-2"
                      onClick={() => console.log('Clicked!')}>
                      Sign Up
                    </button>
                  </Link>

                  <Link href="/auth/login">
                    <button
                      className="border-[1px] border-second-col rounded-md w-[280px] py-2"
                      onClick={() => console.log('')}>
                      Login
                    </button>
                  </Link>
                </nav>
              </DrawerContent>
            </Drawer>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
