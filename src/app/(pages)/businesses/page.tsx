"use client";

import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { b1, b2, b3, b4, b5, b6, logo } from "@/assets/images";
import { FaStar } from "react-icons/fa6";
import SearchBar from "@/components/SearchBar";
import Link from "next/link";
import { FetchAllVendors } from "@/api/vendorsService";
import { Spinner } from "@chakra-ui/react";

type BuzCardProps = {
  imgSrc: StaticImageData;
  name: string;
  category: string;
  location: string;
  trust: string;
  rate: string | JSX.Element;
};

const BuzCard: React.FC<BuzCardProps> = ({
  imgSrc,
  name,
  category,
  location,
  trust,
  rate,
}) => {
  return (
    <Link href="/businesses/profile">
      <div className="max-w-[387px] shadow-xl p-4 flex flex-col items-left gap-2 ">
        <Image src={imgSrc} alt={name} />

        <h1 className=" font-bold text-sm text-[#0E538C]">{name}</h1>
        <div className="text-gray-dark flex gap-5 text-[10px] ">
          <div>
            <p>Category: </p>
            <p>Location: </p>
            <p>TrustScrore: </p>
          </div>
          <div>
            <p>{category} </p>
            <p>{location} </p>

            <p className="flex gap-2 text-str">{trust}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

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
          <SearchBar />
          {loading ? (
            <Spinner />
          ) : (
            <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3  gap-4 lg:py-2">
              {vendors.map((item, index) => (
                <Link
                  key={index}
                  href={`/businesses/profile?profileId=${item.profileId}`}
                >
                  <div className="max-w-[387px] shadow-xl p-2  flex flex-col items-left gap-1 w-full hover:shadow-second-col hover:shadow-sm rounded-lg">
                    <div className="w-full h-[300px] flex justify-center items-center">
                      <Image
                        src={item.businessImageLink || logo}
                        alt={item.businessName || "none"}
                        width={380}
                        height={1}
                        className="object-contain rounded-md"
                      />
                    </div>

                    <h1 className=" font-bold text-sm md:text-lg text-[#0E538C]">
                      {item.businessName || " No Business Name"}
                    </h1>
                    <div className="text-gray-dark flex gap-3 text-[10px] md:text-[12px] ">
                      <div className="flex flex-col md:gap-[2px]">
                        <div className="flex gap-2 items-center">
                          <p className="font-bold">Category: </p>
                          {item.businessCategory || "Not specified"}
                        </div>
                        <div className="flex gap-2 items-center">
                          <p className="font-bold">Location: </p>
                          {item.city && item.country
                            ? `${item.city}, ${item.country}`
                            : "Not specified"}
                        </div>
                        <div className="flex gap-2 items-center">
                          <p className="font-bold">Trust Score: </p>
                          {item.trustScore || "No Trust Score"}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Businesses;
