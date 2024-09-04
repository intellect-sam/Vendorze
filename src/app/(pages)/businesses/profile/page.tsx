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
      <Header />
      <section className="container h-screen">
        <div className="">
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
            <div className="md:flex md:items-center md:justify-between lg:p-7">
              <div className="flex gap-5 items-center">
                <div className="w-[100px]">
                  <Image
                    src={pic1}
                    alt=""
                  />
                </div>
                <div className=" flex flex-col space-y-2 ">
                  <h1 className="font-bold  md:text-xl lg:text-[24px]">
                    Rayz Clothings
                  </h1>
                  <p className="font-light text-[10px] lg:text-[18px]">
                    Jonathan Duroyilu
                  </p>
                </div>
              </div>
              <div className="py-4 flex flex-col ">
                <h1 className="text-second-col font-bold md:text-xl lg:text-[28px]">
                  Trust Score: 78%
                </h1>
                <div className="flex text-[14px]  items-center gap-2">
                  <p className="font-light">Average Rating:</p>
                  <p className="flex text-second-col gap-1 laptop:gap-2">
                    {[...Array(5)].map((_, index) => (
                      <FaStar key={index} />
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col  w-full md:flex-row md:justify-between md:space-x-5">
            <div className="flex text-[10px] lg:text-[18px]  text-[#727272] justify-between   w-full md:w-1/2  h-full p-4 shadow-lg rounded-lg mt-8 lg:p-10 ">
              <div className="flex flex-col space-y-5 lg:space-y-10">
                <h1 className="text-[13px] font-bold text-[#B40FBF]  lg:text-[24px]">
                  About Vendor
                </h1>
                <div>
                  <div className="flex gap-2 items-center">
                    <FaUser />
                    <p>Vendor’s Name</p>
                  </div>
                  <p className="font-bold">Jonathan Duroyilu</p>
                </div>
                <div>
                  <div className="flex gap-2 items-center">
                    <FaMapMarkerAlt />
                    <p>Address</p>
                  </div>
                  <p className="font-bold">8, Campus road, Ikoyi, Lagos</p>
                </div>
                <div>
                  <div className="flex gap-2 items-center">
                    <MdEmail />
                    <p>Email</p>
                  </div>
                  <p className="font-bold">johnathand@gmail.com</p>
                </div>
                <div>
                  <div className="flex gap-2 items-center">
                    <IoCall />
                    <p>Phone Number</p>
                  </div>
                  <p className="font-bold">09132455678</p>
                </div>
              </div>
              <div className="flex flex-col space-y-5 lg:space-y-10">
                <h1 className="text-[13px] lg:text-[24px] font-bold text-[#B40FBF] ">
                  About Business
                </h1>
                <div>
                  <div className="flex gap-2 items-center">
                    <FaUser />
                    <p>Category</p>
                  </div>
                  <p className="font-bold">Women’s Wears</p>
                </div>
                <div>
                  <div className="flex gap-2 items-center">
                    <FaUser />
                    <p>Business Contact</p>
                  </div>
                  <p className="font-bold">09132455678</p>
                </div>
              </div>
            </div>

            <WriteReview />
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
