"use client";

import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { b1, b2, b3, b4, b5, b6, logo, medal } from "@/assets/images";
import { FaStar } from "react-icons/fa6";
import SearchBar from "@/components/SearchBar";
import Link from "next/link";
import { FetchAllVendors } from "@/api/vendorsService";
import { Spinner } from "@chakra-ui/react";
import { Progress } from "@/components/ui/progress";


interface TopRankingVendor {
  id: number;
  businessName: string;
  businessCategory: string;
  trustScore: number;
  city: string;
  country: string;
}

const topRankingVendors: TopRankingVendor[] = [
  {
    id: 1,
    businessName: "Business Name",
    businessCategory: "Business Category",
    trustScore: 4.5,
    city: "City",
    country: "Country",
  },
  {
    id: 2,
    businessName: "Business Name",
    businessCategory: "Business Category",
    trustScore: 4.5,
    city: "City",
    country: "Country",
  },
  {
    id: 3,
    businessName: "Business Name",
    businessCategory: "Business Category",
    trustScore: 4.5,
    city: "City",
    country: "Country",
  },
  {
    id: 4,
    businessName: "Business Name",
    businessCategory: "Business Category",
    trustScore: 4.5,
    city: "City",
    country: "Country",
  },
  {
    id: 5,
    businessName: "Business Name",
    businessCategory: "Business Category",
    trustScore: 4.5,
    city: "City",
    country: "Country",
  },
  {
    id: 5,
    businessName: "Business Name",
    businessCategory: "Business Category",
    trustScore: 4.5,
    city: "City",
    country: "Country",
  },
  {
    id: 6,
    businessName: "Business Name",
    businessCategory: "Business Category",
    trustScore: 4.5,
    city: "City",
    country: "Country",
  },
  {
    id: 7,
    businessName: "Business Name",
    businessCategory: "Business Category",
    trustScore: 4.5,
    city: "City",
    country: "Country",
  },
]

const Businesses = () => {
  const [vendors, setVendors] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchVendose = async () => {
      try {
        const fetchAllVendors = await FetchAllVendors.getAllVendors();
        setVendors(fetchAllVendors.data);
      } catch (error) {
        setError("Failed to fetch vendors");
      } finally {
        setLoading(false);
      }
    };
    fetchVendose();
  }, []);

  console.log("vendors", vendors);

  const renderStars = () => (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <FaStar key={index} />
      ))}
    </div>
  );

  if (loading) return <div>Loading...</div>;
  return (
    <>
      <section>
        <Header />
        
                  


        <div className="container">
          {/* <SearchBar /> */}
          <div className="flex flex-col gap-4 lg:gap-8  my-5"> 

                <div className="flex w-full justify-between text-[#5B5B5B] text-xs md:text-sm items-center">
                  <h1 className="font-semibold text-sm lg:text-lg">Top Ranking Vendors</h1>

                  <p>See More</p>

                </div>

                <div className="overflow-x-auto bg-[#F3E7F3] p-3 py-7 rounded-xl no-scrollbar shadow-xl">
                  <div className="flex gap-4 lg:gap-10">
                    {topRankingVendors.map((item) => (
                      <div
                        key={item.id}
                        className="lg:min-w-[300px] min-w-[250px] bg-[#FFFFFF] p-4 shadow-xl rounded-lg flex flex-col gap-4 lg:p-6"
                      >
                        <div className="flex justify-between items-center rounded-xl p-2 bg-[#F0CFF2]">
                          <div className="flex flex-col gap-3">
                            <div>
                              <Image src={logo} alt="logo" />
                            </div>
                            <h1 className="text-xs font-bold text-[#007474]">
                              Trust Score: {item.trustScore || "No Trust Score"}
                            </h1>
                            <Progress value={33} color="#007474" />
                          </div>
                          <div className="max-w-[39.83px]">
                            <Image src={medal} alt="medal" className="w-full" />
                          </div>
                        </div>
                        <div className="flex flex-col gap-3">
                          <div className="flex flex-col gap-2 text-xs text-[#495057]">
                            <h1 className="font-bold">{item.businessName || "None"}</h1>
                            <h1>Category: {item.businessCategory || "Not specified"}</h1>
                            <h1>
                              Location:{" "}
                              {item.city && item.country ? `${item.city}` : "Not specified"}
                            </h1>
                          </div>
                          <div className="text-xs font-semibold flex justify-between gap-3 ">
                            <button className="bg-[#B40FBF] p-2 text-[#FFFFFF] rounded-lg lg:w-1/2">
                              Review Vendor
                            </button>
                            <button className="rounded-lg border-[1px] p-2 border-[#008080] text-[#008080] lg:w-1/2">
                              View Profile
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

          </div>

          {loading ? (
            <Spinner />
          ) : (
            <div className="bg-[#FFFFFF] border-[1px] border-[#D0D0D0] rounded-lg p-4 flex flex-col gap-3 my-10 lg:my-20">
              <div className="flex w-full justify-between text-[#5B5B5B]">
                <h1 className="font-semibold">All Vendors</h1>

                <p>See More</p>
              </div>


              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 lg:gap-10 justify-center items-center w-full  ">
                {vendors.map((item, index) => (
              
                    <div  key={index} className="max-w-[326px] w-full] bg-[#FFFFFF] p-2 shadow-xl rounded-lg flex flex-col gap-4 lg:p-6 ">
                      <div className="flex justify-between items-center border-2 border-[#D987DF] rounded-xl p-2">
                      <div className="flex flex-col gap-3">
                        <div>
                          <Image src={logo} alt="logo" />
                        </div>
                        <h1 className="text-xs font-bold text-[#007474]">Trust Score: {item.trustScore || "No Trust Score"}</h1>
                        <Progress value={33} color="#007474" />
                      </div>
                      <div className="max-w-[39.83px]">
                        <Image src={medal} alt="medal" className="w-full" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-col gap-2 text-xs text-[#495057]">
                        <h1 className=" font-bold">{item.businessName || "None"}</h1>
                        <h1>Category:  {item.businessCategory || "Not specified"} </h1>
                        <h1>Location:         {item.city && item.country
                                    ? `${item.city}`
                                    : "Not specified"}</h1>
                      </div>
                      <div className="text-[10px] font-semibold flex  justify-between flex-col gap-3 lg:flex-row">
                        <button className="bg-[#B40FBF]  text-[#FFFFFF] rounded-lg p-2 lg:w-1/2 ">Review Vendor</button>
                        <button className="rounded-lg border-[1px] p-2 border-[#008080] text-[#008080] lg:w-1/2">View Profile</button>
                      </div>
                    </div>
                    </div>

                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Businesses;
