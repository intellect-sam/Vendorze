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
          className="w-80 laptop, tablet:w-[900px]"
        />
      </div>

      <div className="w-full p-4 laptop, tablet:py-[160px] flex flex-col  laptop:gap-0 laptop, tablet:flex-row text-gray-dark  laptop:justify-center my-16">
        <div className="laptop, tablet:min-w-[500px] relative left-[120px]">
          <h2 className="custom-h1 laptop:text-4xl laptop:leading-tight laptop:text-left">
            Show your Trust Score. Write Reviews. Find Trustworthy Business.
          </h2>
          <p className="custom-p sm:py-5 laptop:px-0 laptop:max-w-[400px] laptop:text-left leading-relaxed laptop:leading-[35px]  laptop:text-[20px] laptop:font-[1px]">
            Never get scammed again. Ask for their trust worthy vendors. Check
            their trust score before sliding into their DM
          </p>
        </div>
        <div className="laptop:px-0 laptop:min-w-[700px]">
          <Image
            src={phone}
            alt=""
            className="w-full "
          />
        </div>
      </div>
    </>
  );
};

export default HeroPage;
