'use client';

import React, { useEffect, useState } from 'react';
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
    window.addEventListener('scroll', scrollHeader);

    return () => {
      window.addEventListener('scroll', scrollHeader);
    };
  }, []);

  return (
    <div
      className={`w-screen flex items-center justify-center ${
        header ? 'bg-[#FFFFFF] fixed z-40 shadow-md ease-in-out' : 'bg-none'
      }`}>
      <header className="w-[1025px] ease-in duration-300 top-0 left-0 z-10 ">
        <nav className="mx-auto py-4 flex justify-between items-center p-4 tablet:mx-[25px]">
          <div>
            <Link href="/">
              <Image
                src={Logo}
                alt="logo"
                className="laptop:w-[100px] w-16"
              />
            </Link>
          </div>

          {/* larger screen */}
          <div className="hidden laptop, tablet:flex gap-20 laptop, tablet:text-[12px]">
            <ul className="items-center text-gray-dark laptop, tablet:flex gap-10">
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="/businesses">Businesses</Link>
              </li>
            </ul>
            <div className="laptop, tablet:flex laptop, tablet:gap-10">
              <Link href="/auth/signup">
                <button
                  className="bg-second-col text-primary laptop, tablet:w-[120px] rounded-[7px] text-sm laptop, tablet:text-[12px] py-3"
                  onClick={() => console.log('Clicked!')}>
                  Join
                </button>
              </Link>

              <Link href="/auth/login">
                <button className="border-[1px] border-second-col text-second-col laptop, tablet:w-[120px] rounded-[7px] text-sm text-center justify-center py-[0.6rem]  laptop, tablet:text-[12px] ">
                  Login
                </button>
              </Link>
            </div>
          </div>

          <div
            onClick={handleSmallScreen}
            className="flex laptop, tablet:hidden">
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
                      Join
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
    </div>
  );
};

export default Header;
