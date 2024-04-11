import { circle, phone } from '@/assets/images';
import Image from 'next/image';
import React from 'react';

const HeroPage = () => {
  return (
    <>
      <div
        data-aos="fade-up"
        className=" flex top-0 right-0 justify-end w-screen absolute -z-20">
        <Image
          src={circle}
          alt=""
          className="w-80 md:w-[750px]"
        />
      </div>

      <div className="p-4 md:p-0 md:mt-[200px] md:ml-[150px] flex flex-col gap-5  md:gap-0 md:flex-row text-gray-dark  md:justify-center my-16">
        <div className="md:max-w-[500px] md:pr-[30px] ">
          <h2 className="custom-h1 md:text-4xl md:leading-tight md:text-left">
            Show your Trust Score. Write Reviews. Find Trustworthy Business.
          </h2>
          <p className="custom-p sm:py-5 md:px-0 md:max-w-[400px] md:text-left leading-relaxed md:leading-[35px]  md:text-lg md:font-[2px]">
            Never get scammed again. Ask for their trust worthy vendors. Check
            their trust score before sliding into their DM
          </p>
        </div>
        <div className="md:w-[1000px] md:px-0 ">
          <Image
            src={phone}
            alt=""
            className="w-full md:w-[1700px]"
          />
        </div>
      </div>
    </>
  );
};

export default HeroPage;
