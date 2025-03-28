"use client";

import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { pic1 } from "@/assets/images";
import bgg from "../../../../assets/images/bggg.png";
import { FaStar, FaUser } from "react-icons/fa6";
import { PiFacebookLogo } from "react-icons/pi";
import { FaInstagram, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall, IoChevronBack } from "react-icons/io5";
import WriteReview from "@/components/WriteReview";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FetchAllVendors } from "@/api/vendorsService";

interface VendorDetails {
  fullname: string | null;
  businessName: string | null;
  averageRating: number;
  trustScore: string;
  address: string | null;
  businessEmail: string | null;
  phoneNumber: string | null;
  businessCategory: string | null;
  whatsAppLink: string | null;
  instagramHandle: string | null;
}

const Contact = [
  {
    id: 1,
    title: "Email Address",
    details: "Rayzclothings@gmail.com"
  },
  {
    id: 2,
    title: "Address",
    details: "8, Olumo street, Oke Agba, Ibadan"
  },
  {
    id: 3,
    title: "Contact Number",
    details: "08132414152"
  },
  {
    id: 4,
    title: "State/Country",
    details: "Oyo/Nigeria"
  },
]

const Profile = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const profileId = searchParams.get("profileId");
  const [vendorDetails, setVendorDetails] = useState<VendorDetails | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  console.log(profileId);

  useEffect(() => {
    if (profileId) {
      const fetchVendorDetails = async () => {
        try {
          const response = await FetchAllVendors.getVendorsById(profileId);
          setVendorDetails(response.data);
        } catch (error) {
          setError("Failed to fetch vendor details");
        } finally {
          setLoading(false);
        }
      };
      fetchVendorDetails();
    }
  }, [profileId]);

  const {
    fullname,
    businessName,
    averageRating,
    trustScore,
    address,
    businessEmail,
    phoneNumber,
    businessCategory,
    whatsAppLink,
    instagramHandle,
  } = vendorDetails || {};
  return (
    <>
      <Header />
      <section className="container">
        <div className="">
          <div className="w-full text-[12px] text-[#CD5FD4] font-bold py-2">
            <Link href="/businesses" className="flex items-center gap-1">
              <IoChevronBack /> Go back
            </Link>
          </div>
          <div className="bg-[#F0CFF2] w-full p-4 laptop:p-7 flex flex-col rounded-md  laptop, tablet:flex-row justify-between rounded-laptop bg-cover bg-center">
            <div className="absolute right-0 laptop:w-full ">
              {/* <Image className=" object-contain " src={bgg} alt="" /> */}
            </div>
            <div className="md:flex md:items-center md:justify-between lg:p-7">
              <div className="flex gap-5 items-center">
                <div className="w-[100px]">
                  <Image src={pic1} alt="" />
                </div>
                <div className=" flex flex-col space-y-2 ">
                  <h1 className="font-bold  md:text-xl lg:text-[24px]">
                    {businessName || "No Business Name"}
                  </h1>
                  <p className="font-light text-[10px] lg:text-[18px]">
                    {fullname || "No Name"}
                  </p>
                </div>
              </div>
              <div className="py-4 flex flex-col ">
                <h1 className="text-second-col font-bold md:text-xl lg:text-[28px]">
                  Trust Score: {`${trustScore}%` || 0}
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
                    <div className="bg-white border-[1px] rounded-xl shadow-md flex flex-col gap-5 p-5">
                      <h1 className="text-[#2C2C2C] font-semibold text-sm">Brief Description</h1>
                      <p className="text-[#727272] text-xs">At Rayz, we offer a curated selection of stylish and affordable apparel for men, women, and children. Our collections are inspired by the latest trends and designed for every occasion, from casual outings to special events. Visit us today and elevate your wardrobe!" 
                      </p>
                    </div>
                    <div className="bg-white border-[1px] rounded-xl shadow-md flex flex-col gap-5 p-5">
                      {
                        Contact.map((item) => (
                          <div key={item.id}>
                            <p className="text-[#727272] text-xs">{item.title}</p>
                            <h1 className="text-[#2C2C2C] font-semibold text-sm">{item.details}</h1>
                          </div>
                        ))
                      }
                    </div>
            <div className="flex text-[10px] lg:text-[18px]  text-[#727272] justify-between   w-full md:w-1/2  h-full p-4 shadow-lg rounded-lg mt-8 lg:p-6 ">
              <div className="flex flex-col gap-5 lg:gap-10">
                <h1 className="text-[13px] font-bold text-[#B40FBF]  lg:text-[24px]">
                  About Vendor
                </h1>
                <div>
                  <div className="flex gap-2 items-center">
                    <FaUser />
                    <p className="font-bold">Vendor’s Name</p>
                  </div>
                  <p className="font-normal text-sm">
                    {" "}
                    {fullname || "No Name"}
                  </p>
                </div>
                <div>
                  <div className="flex gap-2 items-center">
                    <FaMapMarkerAlt />
                    <p className="font-bold">Address</p>
                  </div>
                  <p className="font-normal text-sm">
                    {address || "No Address"}
                  </p>
                </div>
                <div>
                  <div className="flex gap-2 items-center">
                    <MdEmail />
                    <p className="font-bold">Email</p>
                  </div>
                  <p className="font-normal text-sm">
                    {businessEmail || "No Email"}
                  </p>
                </div>
                <div>
                  <div className="flex gap-2 items-center">
                    <IoCall />
                    <p className="font-bold">Phone Number</p>
                  </div>
                  <p className="font-normal text-sm">09132455678</p>
                </div>
              </div>
              <div className="flex flex-col space-y-5 lg:space-y-10">
                <h1 className="text-[13px] lg:text-[24px] font-bold text-[#B40FBF] ">
                  About Business
                </h1>
                <div>
                  <div className="flex gap-2 items-center">
                    <FaUser />
                    <p className="font-bold">Category</p>
                  </div>
                  <p className="font-normal text-sm">
                    {businessCategory || ""}
                  </p>
                </div>
                <div>
                  <div className="flex gap-2 items-center">
                    <FaUser />
                    <p className="font-bold">Social Media</p>
                  </div>
                  <div className="flex flex-col text-xs gap-2 w-full text-center pl-5 py-3">
                    <Link href={`facebook`}>
                      <div className="flex gap-2 items-center">
                        <PiFacebookLogo />
                        <h1>FB handle</h1>
                      </div>
                    </Link>

                    <Link href={`${whatsAppLink} ? `}>
                      <div className="flex gap-2 items-center">
                        <FaWhatsapp />
                        <h1>X handle</h1>
                      </div>
                    </Link>
                    <Link href={`instagram`}>
                      <div className="flex gap-2 items-center">
                        <FaInstagram />
                        <h1>IG handle</h1>
                      </div>
                    </Link>
                  </div>
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
