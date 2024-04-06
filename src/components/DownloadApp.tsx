import { google, iphone, phone2 } from '@/assets/images';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DownloadApp = () => {
  return (
    <section className=" flex bg-[#FAFAFA]">
      <div className="flex text-gray-dark w-screen md:justify-center  md:items-center  p-5 gap-5 md:gap-0 md:p-0 py-20 m-5 md:m-0 md:px-32">
        <div className="hidden md:block">
          <Image
            src={phone2}
            alt=""
          />
        </div>
        <div className="flex flex-col md:h-full md:items-left justify-center md:gap-20">
          <div className="flex flex-col md:w-[400px] md:gap-5 ">
            <h1 className="custom-h1 md:text-4xl md:text-left md:leading-snug">
              More Businesses are Gaining Tractions
            </h1>
            <p className="custom-p md:text-left md:text-lg md:p-0">
              Our team of experienced business strategists works with you to
              identify opportunities for growth and develop a customized plan to
              help you achieve your goals
            </p>
            <div className=" flex justify-center ">
              <Link href="#">
                <Image
                  src={google}
                  alt=""
                  style={{
                    width: '70%',
                  }}
                />
              </Link>
              <Link href="#">
                <Image
                  src={iphone}
                  alt=""
                  style={{
                    width: '70%',
                  }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
