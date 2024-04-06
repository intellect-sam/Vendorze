import React from 'react';
import Image from 'next/image';
import { img1, img2, img3, star } from '@/assets/images/Reviews';
import Marquee from 'react-fast-marquee';

const Reviews = () => {
  type CustomReviewProps = {
    imageSrc: ''; // Assuming you're using static images
    name: string; //
    title: string;
    rate: '';
    testimony: string;
  };

  const CustomReview: React.FC<CustomReviewProps> = ({
    imageSrc,
    name,
    title,
    rate,
    testimony,
  }) => {
    return (
      <div className="w-64 shadow-xl p-7 flex flex-col items-left gap-2 ">
        <Image
          src={imageSrc}
          alt={title}
          width={20}
        />
        <div className="text-gray-dark">
          <h1 className=" font-bold text-sm">{name}</h1>
          <h1 className=" font-light text-[10px]">{title}</h1>
          <Image
            src={rate}
            alt={title}
            width={20}
          />
        </div>
        <p className="flex w-full text-[10px] text-left">{testimony}</p>
      </div>
    );
  };
  return (
    <div className="flex flex-col gap-10 m-5 w-screen md:py-40">
      <h1 className="custom-h1 md:text-4xl">Reviews</h1>
      <div className="flex flex-col items-center gap-10">
        <Marquee>
          <CustomReview
            imageSrc={img1}
            name="Akwe Samuel"
            title="Top-notch packaging"
            rate={star}
            testimony="I have been using this product for 5 years now and i must my business has come a long way."
          />
          <CustomReview
            imageSrc={img2}
            name="Akwe Samuel"
            title="Top-notch packaging"
            rate={star}
            testimony="I have been using this product for 5 years now and i must my business has come a long way."
          />
          <CustomReview
            imageSrc={img3}
            name="Akwe Samuel"
            title="Top-notch packaging"
            rate={star}
            testimony="I have been using this product for 5 years now and i must my business has come a long way."
          />
          <CustomReview
            imageSrc={img1}
            name="Akwe Samuel"
            title="Top-notch packaging"
            rate={star}
            testimony="I have been using this product for 5 years now and i must my business has come a long way."
          />
          <CustomReview
            imageSrc={img1}
            name="Akwe Samuel"
            title="Top-notch packaging"
            rate={star}
            testimony="I have been using this product for 5 years now and i must my business has come a long way."
          />
          <CustomReview
            imageSrc={img1}
            name="Akwe Samuel"
            title="Top-notch packaging"
            rate={star}
            testimony="I have been using this product for 5 years now and i must my business has come a long way."
          />
          <CustomReview
            imageSrc={img1}
            name="Akwe Samuel"
            title="Top-notch packaging"
            rate={star}
            testimony="I have been using this product for 5 years now and i must my business has come a long way."
          />
          <CustomReview
            imageSrc={img1}
            name="Akwe Samuel"
            title="Top-notch packaging"
            rate={star}
            testimony="I have been using this product for 5 years now and i must my business has come a long way."
          />
        </Marquee>

        <div className=" max-w-[1350px] hidden md:block">
          <Marquee>
            <CustomReview
              imageSrc={img1}
              name="Akwe Samuel"
              title="Top-notch packaging"
              rate={star}
              testimony="I have been using this product for 5 years now and i must my business has come a long way."
            />
            <CustomReview
              imageSrc={img2}
              name="Akwe Samuel"
              title="Top-notch packaging"
              rate={star}
              testimony="I have been using this product for 5 years now and i must my business has come a long way."
            />
            <CustomReview
              imageSrc={img3}
              name="Akwe Samuel"
              title="Top-notch packaging"
              rate={star}
              testimony="I have been using this product for 5 years now and i must my business has come a long way."
            />
            <CustomReview
              imageSrc={img1}
              name="Akwe Samuel"
              title="Top-notch packaging"
              rate={star}
              testimony="I have been using this product for 5 years now and i must my business has come a long way."
            />
            <CustomReview
              imageSrc={img1}
              name="Akwe Samuel"
              title="Top-notch packaging"
              rate={star}
              testimony="I have been using this product for 5 years now and i must my business has come a long way."
            />
            <CustomReview
              imageSrc={img1}
              name="Akwe Samuel"
              title="Top-notch packaging"
              rate={star}
              testimony="I have been using this product for 5 years now and i must my business has come a long way."
            />
            <CustomReview
              imageSrc={img1}
              name="Akwe Samuel"
              title="Top-notch packaging"
              rate={star}
              testimony="I have been using this product for 5 years now and i must my business has come a long way."
            />
            <CustomReview
              imageSrc={img1}
              name="Akwe Samuel"
              title="Top-notch packaging"
              rate={star}
              testimony="I have been using this product for 5 years now and i must my business has come a long way."
            />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
