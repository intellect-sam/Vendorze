'use client';
import { circle, phone } from '@/assets/images';
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
      <div
        data-aos="fade-up"
        className=" flex top-0 right-0 justify-end w-screen absolute -z-20 ">
        <Image
          src={circle}
          alt=""
          className="min-w-80 lg:min-w-[800px] md:max-w-[400px]"
        />
      </div>

      <div className="container w-full p-4  flex flex-col space-y-5  text-gray-dark  md:flex-row py-[80px] lg:my-[100px] ">
        <motion.div
          variants={SlideRight(0.4)}
          initial="hidden"
          animate="show"
          exit="exit"
          className=" flex flex-col md:items-start  space-y-3 lg, md:w-1/2  ">
          <h2 className="text-center  text-2xl font-bold leading-relaxed md:text-start md:text-3xl md:leading-normal lg:text-5xl lg:leading-[60px] text-shadow">
            Show your Trust Score.
            <br /> Write Reviews. <br />
            Find Trustworthy Business.
          </h2>
          <p className="text-center text-sm  md:text-start lg:text-2xl lg:max-w-[500px] md:max-w-[250px] lg:font-extralight lg:leading-normal">
            Never get scammed again. Ask for their trust worthy vendors. Check
            their trust score before sliding into their DM
          </p>
        </motion.div>
        <div className="lg, md:w-1/2 ">
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
              }}>
              <Image
                src={phone}
                alt=""
                className="w-full img-shadow md:w-full"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default HeroPage;
