import React from 'react';
import Image from 'next/image';
import { write, rate, review } from '@/assets/icons';

const Features = () => {
  // Define a type for the props
  type CustomCardProps = {
    imageSrc: ''; // Assuming you're using static images
    title: string;
    description: string;
  };

  const CustomCard: React.FC<CustomCardProps> = ({
    imageSrc,
    title,
    description,
  }) => {
    return (
      <div className="shadow-lg p-7 flex flex-col items-center laptop:w-[300px] laptop:h-full gap-3 laptop:gap-2 laptop:py-5">
        <Image
          src={imageSrc}
          alt={title}
          width={15}
        />
        <h1 className="text-[#8F2396] font-bold text-lg">{title}</h1>

        <p className="flex w-full text-[10px] px-10 text-justify">
          {description}
        </p>
      </div>
    );
  };
  return (
    <section className="laptop, tablet:my-[170px]">
      <div className="custom-section items-center">
        <h3 className="custom-h1 laptop:text-4xl ">
          Features that you will love
        </h3>
        <p className="custom-p laptop:w-1/3 tablet:w-1/2 laptop:text-center laptop:text-lgs laptop:pb-10">
          The most important benefit of a business plan is that it can help you
          to get more investors.
        </p>
        <div className="flex flex-col gap-5 laptop:gap-10 laptop, tablet:flex-row laptop:px-32">
          <CustomCard
            imageSrc={write}
            title="Product Score"
            description="The product score reveals the authenticity of a vendor or business. This helps customers make right decisions."
          />
          <CustomCard
            imageSrc={rate}
            title="Rating"
            description="You can get your customers to give a review for you based on their experience with your business. "
          />
          <CustomCard
            imageSrc={write}
            title="Write Reviews"
            description="As a customer, you can write review and give rating to businesses based on the experience you have while transacting with the vendors."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
