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
              <button
                className="bg-second-col text-primary md:w-[120px] rounded-[7px] text-sm md:text-[12px] py-3"
                onClick={() => console.log('Clicked!')}>
                <Link href="/auth/signup"> Sign Up</Link>
              </button>

              <button className="border-2 border-second-col text-second-col md:w-[120px] rounded-[7px] text-sm text-center justify-center py-3  md:text-[12px] ">
                <Link href="/auth/login"> Login</Link>
              </button>
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

                  <Button
                    className="bg-second-col text-primary rounded-md"
                    onClick={() => console.log('Clicked!')}>
                    <Link href="/auth/signup">Sign Up</Link>
                  </Button>

                  <Button
                    className="border-2 border-second-col rounded-md"
                    onClick={() => console.log('')}>
                    <Link href="/auth/login">Login</Link>
                  </Button>
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
