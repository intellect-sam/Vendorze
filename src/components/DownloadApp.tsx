import { google, iphone, phone2 } from '@/assets/images';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DownloadApp = () => {
  return (
    <section className=" flex bg-[#FAFAFA] w-screen">
      <div className="flex text-gray-dark w-screen laptop:justify-center  laptop:items-center  p-5 gap-5 laptop:gap-0 laptop:p-0 py-20 m-5 laptop:m-0 laptop:px-32">
        <div className="hidden laptop, tablet:block">
          <Image
            src={phone2}
            alt=""
          />
        </div>
        <div className="flex flex-col laptop:h-full laptop:items-left justify-center laptop:gap-20">
          <div className="flex flex-col laptop, tablet:w-[400px] laptop, tablet:gap-5 ">
            <h1 className="custom-h1 laptop:text-4xl laptop:text-left laptop:leading-snug">
              More Businesses are Gaining Tractions
            </h1>
            <p className="custom-p laptop:text-left laptop:text-lg laptop:p-0">
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
