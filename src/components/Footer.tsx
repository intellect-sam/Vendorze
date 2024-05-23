import { logoWhite } from '@/assets/images';
import Image from 'next/image';
import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaSquareXTwitter, FaInstagram, FaRegCopyright } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="bg-second-col text-primary w-screen">
      <div className=" flex flex-col laptop, tablet:flex-row gap-5 rounded-t-[25px]  laptop, tablet:justify-center laptop:gap-20 tablet:gap-10 laptop:py-40 tablet:py-20 p-5">
        <div className="flex flex-col items-center gap-4">
          <Image
            src={logoWhite}
            alt="footer-logo"
            className="w-1/4 laptop:w-[130px]"
          />
          <div>
            <div className="flex gap-3 text-primary">
              <FaFacebook className="text-2xl" />
              <FaSquareXTwitter className="text-2xl" />
              <FaInstagram className="text-2xl" />
            </div>
          </div>
        </div>
        <div className="text-[10px] flex flex-col gap-2">
          <h3 className="font-bold text-lg tracking-tighter">Address</h3>
          <p>Phone: +23455174186</p>
          <p>Email: info@vendorze.ng</p>
          <p>Address: 16, Victoria street, Akobo, Ibadan</p>
        </div>
        <div className="text-[10px] flex flex-col gap-2">
          <h3 className="font-bold text-lg tracking-tighter">Quick Links</h3>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>About Us</p>
          <p>Contact Us</p>
        </div>
        <div className="text-[10px] flex flex-col gap-2">
          <h3 className="font-bold text-lg tracking-tighter">
            Alternative Banking
          </h3>
          <p>SAF</p>
          <p>Private Banking</p>
          <p>Invest Now</p>
          <p>ONE Education</p>
          <p>Agriculture</p>
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
