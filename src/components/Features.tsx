'use client';
import React from 'react';
import Image from 'next/image';
import { write, rate, review } from '@/assets/icons';
import { motion } from 'framer-motion';
import { fadeUp } from '@/utils/animation';

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
      <div className="shadow-xl p-5 flex flex-col items-center lg:max-p-9 lg:space-y-5  gap-3 max-w-[250px] md:max-w-[373px] md:min-h-[279px] hover:shadow-md  rounded-lg hover:shadow-second-col ">
        <Image
          src={imageSrc}
          alt={title}
          className="md:w-[24px]"
        />
        <h1 className="text-[#8F2396] font-bold text-[14px] lg:text-[24px] ">
          {title}
        </h1>

        <p className="flex w-full text-[10px] lg:text-[16px]  text-center">
          {description}
        </p>
      </div>
    );
  };
  return (
    <section className=" container md:my-[100px] text-gray-dark lg:mt-[400px] min-h-[400px]">
      <div className="flex flex-col justify-center items-center space-y-3 lg:gap-[40px]">
        <motion.div
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView={'show'}
          className="flex w-full items-center justify-center flex-col max-w-[679px] md:max-w-[679px] space-y-2">
          <h3 className="text-lg md:text-2xl lg:text-5xl font-semibold text-shadow">
            Features that you will love
          </h3>
          <p className="text-[12px] md:text-[14px] text-center text-text-col md:px-[100px] lg:text-[18px]">
            The most important benefit of a business plan is that it can help
            you to get more investors.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid- gap-5 md:flex-row lg:py-[50px] ">
          <motion.div
            variants={fadeUp(0.5)}
            initial="hidden"
            whileInView={'show'}>
            <CustomCard
              imageSrc={write}
              title="Product Score"
              description="The product score reveals the authenticity of a vendor or business. This helps customers make right decisions."
            />
          </motion.div>
          <motion.div
            variants={fadeUp(0.8)}
            initial="hidden"
            whileInView={'show'}>
            <CustomCard
              imageSrc={rate}
              title="Rating"
              description="You can get your customers to give a review for you based on their experience with your business. "
            />
          </motion.div>
          <motion.div
            variants={fadeUp(1.1)}
            initial="hidden"
            whileInView={'show'}>
            <CustomCard
              imageSrc={write}
              title="Write Reviews"
              description="As a customer, you can write review and give rating to businesses based on the experience you have while transacting with the vendors."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
