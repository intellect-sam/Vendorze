import Header from '@/components/Header';
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { b1, b2, b3, b4, b5, b6 } from '@/assets/images';
import { FaStar } from 'react-icons/fa6';
import SearchBar from '@/components/SearchBar';
import Link from 'next/link';

const Businesses = () => {
  type BuzCardProps = {
    imgSrc: StaticImageData;
    name: string;
    category: string;
    location: string;
    rate: string | JSX.Element;
  };

  const BuzCard: React.FC<BuzCardProps> = ({
    imgSrc,
    name,
    category,
    location,
    rate,
  }) => {
    return (
      <Link href="/businesses/profile">
        <div className="w-[350px] shadow-xl p-4 flex flex-col items-left gap-2 ">
          <Image
            src={imgSrc}
            alt={name}
            width={339}
          />

          <h1 className=" font-bold text-sm text-[#0E538C]">{name}</h1>
          <div className="text-gray-dark flex gap-5 text-[10px] ">
            <div>
              <p>Category: </p>
              <p>Location: </p>
              <p>Rate: </p>
            </div>
            <div>
              <p>{category} </p>
              <p>{location} </p>

              <p className="flex gap-2 text-str">{rate}</p>
            </div>
          </div>
        </div>
      </Link>
    );
  };
  return (
    <>
      <section className="container">
        <Header />
        <div className="laptop:mt-10">
          <SearchBar />
          <div className="grid grid-cols laptop:grid-cols-3 tablet:grid-cols-2 laptop:gap-10 gap-4">
            <BuzCard
              imgSrc={b1}
              name="Obiz Closet"
              category="Clothing and Accesories"
              location="Ibadan, Nigeria"
              rate={
                <>
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </>
              }
            />
            <BuzCard
              imgSrc={b2}
              name="Rayz Clothings"
              category="Clothing and Accesories"
              location="Ibadan, Nigeria"
              rate={
                <>
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </>
              }
            />
            <BuzCard
              imgSrc={b3}
              name="VFK Phones and Accessories"
              category="Gadgets"
              location="Ibadan, Nigeria"
              rate={
                <>
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </>
              }
            />
            <BuzCard
              imgSrc={b4}
              name="Better Life Restaurant"
              category="Services"
              location="Ibadan, Nigeria"
              rate={
                <>
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </>
              }
            />
            <BuzCard
              imgSrc={b5}
              name="Tunde Gadgets"
              category="Electronics"
              location="Ibadan, Nigeria"
              rate={
                <>
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </>
              }
            />
            <BuzCard
              imgSrc={b6}
              name="B’s Cuisine"
              category="Food"
              location="Ibadan, Nigeria"
              rate={
                <>
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </>
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Businesses;
