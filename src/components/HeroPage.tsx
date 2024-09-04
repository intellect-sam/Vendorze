import { circle, phone } from '@/assets/images';
import Image from 'next/image';
import React from 'react';

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

      <div className="w-full p-4  flex flex-col space-y-5  text-gray-dark  md:flex-row py-[80px] lg:my-[100px] ">
        <div className=" flex flex-col md:items-start  space-y-3 lg, md:w-1/2  ">
          <h2 className="text-center  text-2xl font-bold leading-relaxed md:text-start md:text-3xl md:leading-normal lg:text-5xl lg:leading-normal">
            Show your Trust Score.
            <br /> Write Reviews. <br />
            Find Trustworthy Business.
          </h2>
          <p className="text-center text-sm  md:text-start lg:text-2xl lg:max-w-[500px] md:max-w-[250px] lg:font-extralight lg:leading-normal">
            Never get scammed again. Ask for their trust worthy vendors. Check
            their trust score before sliding into their DM
          </p>
        </div>
        <div className="lg, md:w-1/2 ">
          <Image
            src={phone}
            alt=""
            className="w-full img-shadow md:w-full"
          />
        </div>
      </div>
    </>
  );
};

export default HeroPage;
