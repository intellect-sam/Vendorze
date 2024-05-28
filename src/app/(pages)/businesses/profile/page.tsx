import Header from '@/components/Header';
import React from 'react';
import Image from 'next/image';
import { pic1 } from '@/assets/images';
import bgg from '../../../../assets/images/bggg.png';
import { FaStar, FaUser } from 'react-icons/fa6';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoCall, IoChevronBack } from 'react-icons/io5';
import WriteReview from '@/components/WriteReview';
import Link from 'next/link';

const Profile = () => {
  return (
    <>
      <section className="container">
        <Header />
        <div className="laptop:mt-10">
          <div className="w-full text-[12px] text-[#CD5FD4] font-bold py-2">
            <Link
              href="/businesses"
              className="flex items-center gap-1">
              <IoChevronBack /> Go back
            </Link>
          </div>
          <div className="bg-[#F0CFF2] w-full p-4 laptop:p-7 flex flex-col rounded-md  laptop, tablet:flex-row justify-between rounded-laptop bg-cover bg-center">
            <div className="absolute right-0 laptop:w-full ">
              <Image
                className=" object-contain "
                src={bgg}
                alt=""
              />
            </div>
            <div className="flex gap-5 items-center">
              <div className="w-[100px]">
                <Image
                  src={pic1}
                  alt=""
                />
              </div>
              <div className=" flex flex-col ">
                <h1 className="font-bold laptop:text-[24px]">Rayz Clothings</h1>
                <p className="font-light text-[10px] laptop:text-[18px]">
                  Jonathan Duroyilu
                </p>
              </div>
            </div>
            <div className="py-4 flex flex-col laptop:gap-7 laptop:items-end">
              <h1 className="text-second-col font-bold laptop:text-[28px]">
                Trust Score: 78%
              </h1>
              <div className="flex text-[10px] laptop:text-[18px] items-center laptop:gap-5 gap-2">
                <p className="font-light">Average Rating:</p>
                <p className="flex text-second-col gap-1 laptop:gap-2">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col laptop, tablet:flex-row w-full laptop:gap-20  laptop:mt-5 tablet:mt-5">
            <div className="flex text-[10px] laptop:text-[13px] text-[#727272] justify-between laptop:justify-normal laptop:gap-12 w-full h-full p-4 laptop:p-7 shadow-lg rounded-laptop mt-8 tablet:mt-0">
              <div className="biz-parent">
                <h1 className="text-[13px] laptop:text-[18px] font-bold text-second-col">
                  About Vendor
                </h1>
                <div>
                  <div className="biz-details">
                    <FaUser />
                    <p>Vendor’s Name</p>
                  </div>
                  <p className="font-bold">Jonathan Duroyilu</p>
                </div>
                <div>
                  <div className="biz-details">
                    <FaMapMarkerAlt />
                    <p>Address</p>
                  </div>
                  <p className="font-bold">8, Campus road, Ikoyi, Lagos</p>
                </div>
                <div>
                  <div className="biz-details">
                    <MdEmail />
                    <p>Email</p>
                  </div>
                  <p className="font-bold">johnathand@gmail.com</p>
                </div>
                <div>
                  <div className="biz-details">
                    <IoCall />
                    <p>Phone Number</p>
                  </div>
                  <p className="font-bold">09132455678</p>
                </div>
              </div>
              <div className="biz-parent">
                <h1 className="text-[13px] laptop:text-[18px] font-bold text-second-col">
                  About Business
                </h1>
                <div>
                  <div className="biz-details">
                    <FaUser />
                    <p>Category</p>
                  </div>
                  <p className="font-bold">Women’s Wears</p>
                </div>
                <div>
                  <div className="biz-details">
                    <FaUser />
                    <p>Business Contact</p>
                  </div>
                  <p className="font-bold">09132455678</p>
                </div>
              </div>
            </div>
            <div className="flex text-[10px] laptop:text-[13px] text-[#727272] justify-between w-full p-4 laptop:px-7 shadow-lg rounded-laptop mt-8  tablet:mt-0 laptop:justify-start">
              <WriteReview />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
