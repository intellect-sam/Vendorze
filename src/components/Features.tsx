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
  { value: "a", title: "Can Vendorze guarantee I won’t be scammed?", text: "No, Vendorze cannot guarantee you won’t be scammed, but it significantly reduces the risk by providing tools like Trust Scores®, real customer reviews, and seller verification to help you make safer shopping decisions." },
  { value: "b", title: "Why should i choose an AI credibility rating over my full intuition?", text: "" },
  { value: "c", title: "How do I share my review link with customers?", text: "Some value 3..." },
  { value: "d", title: "Can I leave a review for a seller not yet listed on Vendorze?", text: "Some value 3..." },
  { value: "e", title: "Why didn’t I receive the validation token during signup?", text: "Some value 3..." },
  { value: "f", title: "What is the Trust Score, and how is it calculated?", text: "Some value 3..." },
  { value: "g", title: "Can I access Vendorze on both mobile and desktop?", text: "Some value 3..." },

];

const Features = () => {
  

  return (
    <section className="bg-[#F8F9FA] w-full py-5 md:py-20">
      <div className="container flex flex-col gap-5 md:flex-row md:justify-between">
        <div className="flex flex-col gap-5 md:w-1/2 max-w-[504px] lg:gap-14">
          <h1 className="text-[#434343] text-2xl font-bold md:text-3xl lg:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="text-[#5B5B5B] text-sm lg:text-base">
            I’m here to guide you every step of the way, ensuring that your
            business and transaction is built on trust, transparency, and a
            shared commitment to excellence
          </p>
          <h3 className="text-[#8F2396] text-sm font-bold">View All FAQ</h3>
        </div>
        <Accordion allowToggle defaultIndex={[1]} className='flex flex-col gap-4'>
          {items.map((item, index) => (
            <AccordionItem key={index}>
              <h2>
                 <AccordionButton className='bg-[#FEFFFF] rounded-md  flex justify-between w-full lg:gap-10  border-1 shadow-md'>
                    <Box flex="1" textAlign="left" className='py-1 text-[#898989] pr-7 text-sm lg:text-base lg:pr-14  md:py-3'>
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
