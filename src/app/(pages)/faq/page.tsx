import { faq, faq2, faq3 } from '@/assets/images'
import Header from '@/components/Header'
import { Input } from '@/components/ui/input'
import Image from "next/image";
import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import Footer from '@/components/Footer';
import Download from '@/components/Download';

const items = [
  { value: "a", title: "Can Vendorze guarantee I won’t be scammed?", text: "No, Vendorze cannot guarantee you won’t be scammed, but it significantly reduces the risk by providing tools like Trust Scores®, real customer reviews, and seller verification to help you make safer shopping decisions." },
  { value: "b", title: "Why should i choose an AI credibility rating over my full intuition?", text: "" },
  { value: "c", title: "How do I share my review link with customers?", text: "Some value 3..." },
  { value: "d", title: "Can I leave a review for a seller not yet listed on Vendorze?", text: "Some value 3..." },
  { value: "e", title: "Why didn’t I receive the validation token during signup?", text: "Some value 3..." },
  { value: "f", title: "What is the Trust Score, and how is it calculated?", text: "Some value 3..." },
  { value: "g", title: "Can I access Vendorze on both mobile and desktop?", text: "Some value 3..." },

];

const Faq = () => {
  return (
    <section>
      <Header />
      <div className='container flex flex-col gap-24 md:gap-0 lg:mb-40'>
        <div className='flex flex-col gap-10 md:flex-row md:justify-between md:items-center md:gap-10 md:py-20 lg:py-[150px]'>
          <div className='md:w-1/2 md:flex md:flex-col md:gap-10 max-w-[443px] lg:gap-20'>

            <h1 className='text-2xl text-[#5B5B5B] italic font-medium md:text-4xl lg:text-6xl'>How do i help you ?</h1>
            <Input placeholder='Enter keywords to find answers' style={{padding: "20px"}} className=' text-xs shadow-md hidden md:block' />
            <div className=' absolute container top-[420px] md:top-[350px] lg:top-[450px] right-[100px] -z-50'>
              <Image src={faq3} alt='' className='w-[1563px]' />
            </div>
          </div>
          <div>
            <Image src={faq} alt="faq" />
          </div>
          <div>

          <Input placeholder='Enter keywords to find answers' style={{padding: "20px"}} className=' text-xs shadow-md md:hidden' />
          </div>
        </div>
        <div className='flex flex-col gap-8 lg:gap-16'>
          <h1 className='text-2xl text-[#5B5B5B] italic font-medium md:text-center md:text-4xl lg:text-6xl'>Frequently Asked Questions</h1>
             <Accordion allowToggle defaultIndex={[1]} className='flex flex-col gap-4'>
                    {items.map((item, index) => (
                      <AccordionItem key={index}>
                        <h2>
                          <AccordionButton className='bg-[#FEFFFF] rounded-md  flex justify-between w-full lg:gap-10  border-1 shadow-md'>
                            <Box flex="1" textAlign="left" className='py-1 text-[#898989] pr-7 text-sm lg:pr-14 md:text-lg md:py-3 font-medium'>
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
      </div>
        <div className=' bg-[#FAEBF8] md:my-10 w-full'>
          <div className=' container flex flex-col justify-center items-center gap-10 py-10 rounded-lg md:flex-row md:py-10 '>
            <div className='max-w-[446px]'>
              <Image src={faq2} alt="faq2" className='w-full' />
            </div>
            <div className='flex flex-col gap-4 justify-center items-center md:w-1/2 lg:gap-10'>
          
              <h1 className='text-xl text-center font-semibold text-[#5B5B5B] md:text-3xl lg:text-5xl'>Can’t find what you’re looking for?</h1>
              <button className='bg-[#B40FBF] p-1 font-semibold px-2 text-[#FCFAFA] rounded-md'>Contact us</button>
            </div>
          </div>
        </div>
      <div className='py-5 lg:py-10  flex flex-col items-center justify-center lg:gap-20 text-[#727272] w-full gap-3 md:flex-row'>
      <h1 className='lg:text-4xl'>Want to experience more?</h1>
        <Download />
      </div>
      <Footer />
    </section>
  )
}

export default Faq