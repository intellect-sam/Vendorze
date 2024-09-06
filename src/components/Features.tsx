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
      <div className="shadow-lg p-5 flex flex-col items-center  gap-3 max-w-[250px] md:max-w-[373px] hover:bg-second-col rounded-lg hover:text-[#fff] ">
        <Image
          src={imageSrc}
          alt={title}
          width={15}
        />
        <h1 className="text-[#8F2396] hover:text-[#fff] font-bold text-[14px] ">
          {title}
        </h1>

        <p className="flex w-full text-[10px] lg:text-[16px]  text-center">
          {description}
        </p>
      </div>
    );
  };
  return (
    <section className=" container md:my-[100px] text-gray-dark lg:mt-[400px]">
      <div className="flex flex-col justify-center items-center space-y-3 lg:gap-[40px]">
        <div className="flex w-full items-center justify-center flex-col max-w-[679px] md:max-w-[679px] space-y-2">
          <h3 className="text-lg md:text-2xl lg:text-5xl font-semibold text-shadow">
            Features that you will love
          </h3>
          <p className="text-[12px] md:text-[14px] text-center text-text-col md:px-[100px] lg:text-[18px]">
            The most important benefit of a business plan is that it can help
            you to get more investors.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid- gap-5 md:flex-row lg:py-[50px] ">
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
