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

    <div className='relative w-screen'>
      <Image src={heroBg} alt='' className='object-fill w-screen  max-h-[772px] h-[710px] md:h-full' />
    </div>

      <div className="container w-full  flex flex-col gap-10  text-gray-dark  md:flex-row py-[100px] md:py-[150px] lg:my-[100px] absolute">
        <motion.div
          variants={SlideRight(0.4)}
          initial="hidden"
          animate="show"
          exit="exit"
          className=" flex flex-col md:items-start  space-y-3 md:w-1/2    ">
              <div className='bg-[#FFF1EF] inline-block max-w-[188px] text-base font-semibold'>
                <h2>I Transform Businesses</h2>
              </div>
              
            <div className='flex flex-col text-[#727272] text-sm gap-2 lg:gap-6 '>

            <h1 className='text-[#5B5B5B] text-2xl font-bold lg:text-[54px]'>I Build Trust. I Boost Sales.</h1>
            <p className='lg:text-2xl font-semibold'>Vendorze is your AI-powered companion for credibility, growth, and safe online shopping</p>
            <p className='lg:text-xl'>Whether you’re a vendor seeking trust or a buyer seeking assurance, Vendorze is your trusted partner in the online buying and selling.</p>
            </div>
            <div className='flex justify-between hidden md:block md:gap-5 md:space-x-5'>
          <button className='bg-[#B40FBF] text-[#FCFAFA] rounded-md p-3 text-sm font-bold shadow-md'>Get Trust Score</button>
          <button className='border-[1px] border-[#339999] rounded-md text-[#339999] p-3 text-sm font-bold'>Rate a Vendor</button>
        </div>
        </motion.div>
        <div className="flex justify-center items-center md:w-1/2">
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
                className="w-full  lg:w-[435px]"
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className='flex justify-between md:hidden'>
          <button className='bg-[#B40FBF] text-[#FCFAFA] rounded-md p-3 text-sm font-bold shadow-md'>Get Trust Score</button>
          <button className='border-[1px] border-[#339999] rounded-md text-[#339999] p-3 text-sm font-bold'>Rate a Vendor</button>
        </div>
      </div>
    </>
  );
};

export default HeroPage;
