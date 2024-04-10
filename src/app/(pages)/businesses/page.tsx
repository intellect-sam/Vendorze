import Header from '@/components/Header';
import React from 'react';
import Image from 'next/image';
import { b1, b2, b3, b4, b5, b6 } from '@/assets/images';
import { star } from '@/assets/images/Reviews';

const Businesses = () => {
  type BuzCardProps = {
    imgSrc: string;
    name: string;
    category: string;
    location: string;
    rate: string;
  };

  const BuzCard: React.FC<BuzCardProps> = ({
    imgSrc,
    name,
    category,
    location,
    rate,
  }) => {
    return (
      <div className="w-[350px] shadow-xl p-4 flex flex-col items-left gap-2 ">
        <Image
          src={imgSrc}
          alt={name}
          width={339}
        />
        <h1 className=" font-bold text-sm text-[#0E538C]">{name}</h1>
        <div className="text-gray-dark flex gap-5 text-[10px] ">
          <div>
            <p>category: </p>
            <p>location: </p>
            <p>rate: </p>
          </div>
          <div>
            <p>{category} </p>
            <p>{location} </p>
            <p>
              <Image
                src={rate}
                alt={rate}
                width={15}
              />
            </p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <Header />
      <div className="max-w-[1166px] mx-auto py-4 flex flex-col justify-between items-center p-4">
        <div className="grid grid-cols md:grid-cols-3 md:gap-10 gap-4">
          <BuzCard
            imgSrc={b1}
            name="Obiz Closet"
            category="Clothing and Accesories"
            location="Ibadan, Nigeria"
            rate={star}
          />
          <BuzCard
            imgSrc={b2}
            name="Rayz Clothings"
            category="Clothing and Accesories"
            location="Ibadan, Nigeria"
            rate={star}
          />
          <BuzCard
            imgSrc={b3}
            name="VFK Phones and Accessories"
            category="Gadgets"
            location="Ibadan, Nigeria"
            rate={star}
          />
          <BuzCard
            imgSrc={b4}
            name="Better Life Restaurant"
            category="Services"
            location="Ibadan, Nigeria"
            rate={star}
          />
          <BuzCard
            imgSrc={b5}
            name="Tunde Gadgets"
            category="Electronics"
            location="Ibadan, Nigeria"
            rate={star}
          />
          <BuzCard
            imgSrc={b6}
            name="B’s Cuisine"
            category="Food"
            location="Ibadan, Nigeria"
            rate={star}
          />
        </div>
      </div>
    </>
  );
};

export default Businesses;
