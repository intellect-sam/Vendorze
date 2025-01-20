'use client';

import React from 'react';
import Image from 'next/image';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const items = [
  { value: "a", title: "First Item", text: "Some value 1..." },
  { value: "b", title: "Second Item", text: "Some value 2..." },
  { value: "c", title: "Third Item", text: "Some value 3..." },
];

const Features = () => {
  // Define a type for the CustomCard props
  type CustomCardProps = {
    imageSrc: string; // Assuming you're using static images
    title: string;
    description: string;
  };

  const CustomCard: React.FC<CustomCardProps> = ({
    imageSrc,
    title,
    description,
  }) => {
    return (
      <div className="shadow-xl p-5 flex flex-col items-center gap-3 max-w-[250px] md:max-w-[373px] md:min-h-[279px] hover:shadow-md rounded-lg hover:shadow-second-col">
        <Image
          src={imageSrc}
          alt={title}
          className="md:w-[24px]"
        />
        <h1 className="text-[#8F2396] font-bold text-[14px] lg:text-[24px]">
          {title}
        </h1>
        <p className="flex w-full text-[10px] lg:text-[16px] text-center">
          {description}
        </p>
      </div>
    );
  };

  return (
    <section className="bg-[#F8F9FA] w-full">
      <div className="container">
        <div className="flex flex-col gap-5">
          <h1 className="text-[#434343] text-2xl font-bold">
            Frequently Asked Questions
          </h1>
          <p className="text-[#5B5B5B] text-sm">
            I’m here to guide you every step of the way, ensuring that your
            business and transaction is built on trust, transparency, and a
            shared commitment to excellence
          </p>
          <h3 className="text-[#8F2396]">View All FAQ</h3>
        </div>
        <Accordion allowToggle defaultIndex={[1]}>
          {items.map((item, index) => (
            <AccordionItem key={index}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {item.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{item.text}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Features;
