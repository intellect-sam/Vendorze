'use client';

import { google, iphone, phone2 } from '@/assets/images';
import { fadeUp } from '@/utils/animation';
import { AnimatePresence, easeInOut, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DownloadApp = () => {
  return (
    <section className="flex bg-[#FAFAFA] w-screen my-10">
      <div className=" container flex-col-reverse flex text-gray-dark my-10 items-center justify-center w-full md:flex-row">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0, ease: easeInOut }}
            exit={{
              opacity: 0,
              // scale: 0.9,
              x: -100,

              transition: {
                duration: 0.4,
              },
            }}
            className="max-w-[560px] md:w-1/2">
            <Image
              src={phone2}
              alt=""
              className="img-shadow"
            />
          </motion.div>
        </AnimatePresence>

        <div className="flex flex-col md:w-1/2 lg:max-w-[500px]">
          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView={'show'}
            className="flex flex-col items-center justify-center text-center space-y-5 md:text-start">
            <h1 className="text-lg md:text-2xl lg:text-5xl font-semibold lg:leading-normal text-shadow">
              More Businesses are Gaining Tractions
            </h1>
            <p className="text-[12px] md:text-[14px] text-center text-text-col lg:text-[18px] md:text-start ">
              Our team of experienced business strategists works with you to
              identify opportunities for growth and develop a customized plan to
              help you achieve your goals
            </p>
            <div className=" w-full flex items-center justify-between md:justify-center lg:py-[50px] lg:gap-10 ">
              <Link href="#">
                <Image
                  src={google}
                  alt=""
                  className="img-shadow"
                />
              </Link>
              <Link href="#">
                <Image
                  src={iphone}
                  alt=""
                  className="img-shadow"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
