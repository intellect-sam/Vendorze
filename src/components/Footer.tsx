import { logoWhite } from '@/assets/images';
import Image from 'next/image';
import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaSquareXTwitter, FaInstagram, FaRegCopyright } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="bg-second-col text-primary w-screen">
      <div className="container flex flex-col lg:flex-row lg:justify-between gap-5 rounded-t-[25px] p-5 space-y-5 md:justify-center md:items-center md:py-[80px]">
        <div className="flex flex-col  gap-4 md:items-center">
          <div className="w-1/4 md:w-1/5 lg:w-1/6">
            <Image
              src={logoWhite}
              alt="footer-logo"
              className="img-shadow"
            />
          </div>
          <div>
            <div className="flex gap-3 text-primary text-lg ">
              <FaFacebook className="text-[14px] md:text-2xl" />
              <FaSquareXTwitter className="text-[14px] md:text-2xl" />
              <FaInstagram className="text-[14px] md:text-2xl" />
            </div>
          </div>
        </div>
        <div className="space-y-5 md:space-y-0 md:flex md:justify-between w-full">
          <div className="text-[10px] flex flex-col gap-2">
            <h3 className="font-bold md:text-lg text-[14px]  tracking-tighter">
              Address
            </h3>
            <p>Phone: +23455174186</p>
            <p>Email: info@vendorze.ng</p>
            <p>Address: 16, Victoria street, Akobo, Ibadan</p>
          </div>
          <div className="text-[10px] flex flex-col gap-2">
            <h3 className="font-bold md:text-lg text-[14px]  tracking-tighter">
              Quick Links
            </h3>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>About Us</p>
            <p>Contact Us</p>
          </div>
          <div className="text-[10px] flex flex-col gap-2">
            <h3 className="font-bold md:text-lg text-[14px]  tracking-tighter">
              Alternative Banking
            </h3>
            <p>SAF</p>
            <p>Private Banking</p>
            <p>Invest Now</p>
            <p>ONE Education</p>
            <p>Agriculture</p>
          </div>
        </div>
      </div>
      <div className="w-full flex font-lighter text-[10px] justify-center gap-2 font-lighter py-10 items-center ">
        <FaRegCopyright />
        <p>2024 Vendorze. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
