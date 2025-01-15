'use client';
import { heroBg, phone } from '@/assets/images';
import Image from 'next/image';
import React from 'react';
import { AnimatePresence, easeInOut, motion } from 'framer-motion';

const SlideRight = (delay: any) => {
  return {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
  };
};

const HeroPage = () => {
  return (
    <>

    <div className='absolute'>
      <Image src={heroBg} alt='' />
    </div>

      <div className="container w-full  flex flex-col space-y-5  text-gray-dark  md:flex-row py-[80px] lg:my-[100px] relative">
        <motion.div
          variants={SlideRight(0.4)}
          initial="hidden"
          animate="show"
          exit="exit"
          className=" flex flex-col md:items-start  space-y-3 md:w-1/2  ">
              <div className='bg-[#FFF1EF] inline-block max-w-[188px] text-[16px] font-semibold'>
                <h2>I Transform Businesses</h2>
              </div>
              
            <div className='flex flex-col text-[#727272] text-sm gap-2 '>

            <h1 className='text-[#5B5B5B] text-2xl font-bold'>I Build Trust. I Boost Sales.</h1>
            <p>Vendorze is your AI-powered companion for credibility, growth, and safe online shopping</p>
            <p>Whether you’re a vendor seeking trust or a buyer seeking assurance, Vendorze is your trusted partner in the online buying and selling.</p>
            </div>
        </motion.div>
        <div className="flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0, ease: easeInOut }}
              exit={{
                opacity: 0,
                // scale: 0.9,
                x: -100,

                transition: {
                  duration: 0.4,
                },
              }} className='max-w-[435px]'>
              <Image
                src={phone}
                alt=""
                className="img-shadow md:w-full"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default HeroPage;
