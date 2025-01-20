'use client';
import { BizRev, buy1, buy2, buy3, phone3, review, ven1, ven2, ven3, work } from '@/assets/images';
import Image, { StaticImageData } from 'next/image';
import { AnimatePresence, delay, easeInOut, motion } from 'framer-motion';
import { Variants } from 'framer-motion';
import { fadeUp } from '@/utils/animation';
import { useState } from 'react';
import { it } from 'node:test';
import { apple, f1, f2, f3, f4, f5, google } from '@/assets/icons';

interface businessHeader {
  id: number;
  label: string;
}
interface store {
  id: number;
  img: StaticImageData;
}

interface work {
  id: number,
  img: StaticImageData,
  title: string,
  details: string
}




const businessButton: businessHeader[] = [
  {
    id: 1,
    label: "Vendor",
  },
  {
    id: 2,
    label: "Buyer",
  },
]

const playstore:store[] = [
  {
    id: 1,
    img: google
  },
  {
    id: 2,
    img: apple
  },
]

const features = [
  {
    id: 1,
    icon: f1,
    title: "Trust Scores",
    details: "I give a dynamic and always updated trust core to measure business credibility"
  },
  {
    id: 2,
    icon: f2,
    title: "Verification Badges",
    details: "I help you in showcasing your authenticity at every milestone."
  },
  {
    id: 3,
    icon: f3,
    title: "Review Management",
    details: "I collect, respond to, and manage customer reviews all in one place"
  },
  {
    id: 4,
    icon: f4,
    title: "Insights",
    details: "I give tailored analytics for vendors to stay ahead."
  },
  {
    id: 5,
    icon: f5,
    title: "Verification",
    details: "I ensure credibility with physical visits and evidence."
  },
]

const vendor: work[] = [
  {
    id: 1,
    img: ven1,
    title: "Sign up",
    details: "Sign up and complete your profile"
  },
  {
    id: 2,
    img: ven2,
    title: "Compute your Trust Score",
    details: "Show your trust score for increased credibility"
  },
  {
    id: 3,
    img: ven3,
    title: "Share your Review",
    details: "Share your review link to grow your score and get badges"
  },
]
const buyer: work[] = [
  {
    id: 1,
    img: buy1,
    title: "Search vendors",
    details: "Search for preferred vendors available"
  },
  {
    id: 2,
    img: buy2,
    title: "Verify Trust Scores",
    details: "Verify vendor’s trust score for increased credibility"
  },
  {
    id: 3,
    img: buy3,
    title: "Share your Review",
    details: "Help others shop safely with your feedback"
  },
]

const BizReview = () => {
  const [selectedPass, setSelectedPass] = useState<string>("daily");

  const [activeButton, setActiveButton] = useState<number | null>(1);

  const handleButtonClick = (id: number) => {
    setActiveButton(id);
    console.log(id)
  };

  return (
    <>
    
    <section className=" container flex flex-col justify-center items-center text-center gap-10 mt-10">
      <div className='flex bg-[#E6F2F2] p-2 rounded-3xl gap-5 text-[#007474]'>
        {
          businessButton.map((item) => (
            <button key={item.id}   className={`px-6 py-2 rounded-2xl ${
              activeButton === item.id ? "bg-[#007474] text-[#FFFFFF]" : "bg-transparent"
            }`}
            onClick={() => handleButtonClick(item.id)}
            >{item.label}</button>
          ))
        }
      </div>
      <div className='flex flex-col gap-4'>
        <h1 className='text-2xl font-bold text-[#008080]'> 
        {
              activeButton === 1 ? (<><span className='text-[#5B5B5B]'>Your</span> <span className='text-[#E86558]'>Business</span>  + <span className='text-[#B40FBF]'>Vendorze</span>  = Growth</>) : (`Shop Smart! Shop Safe!`)
        }
        </h1>
        <p className='text-[#898989] text-base'> {
         activeButton === 1 ? (` I help gain credibility with your unique Trust Score and badges. Manage customer reviews in one place. Attract new customers and drive more sales.`):(`Verify vendors instantly with Trust Scores and reviews. Avoid scams and enjoy stress-free shopping. Leave reviews and shape a safer online shopping world. `)
          } 
          </p>
        <div className='flex flex-col items-center justify-center gap-3'>

          {
            activeButton === 1 ? (
              <>     
              <p className='text-[#727272] text-sm'>Download our app</p>
              <div className='flex gap-6'>
                {
                  playstore.map((item) => (
             
                      <button className='bg-[#007474] p-2 rounded-full'>
                        <Image src={item.img} alt="store icon" />
                      </button>
        
                  ))
                }
              </div>
              </>
            ):(
              <>
                <button className='border-[#339999] border-[1px] rounded-lg p-2 text-base text-[#339999]'>Leave a Review</button>
              </>
            )
          }
         
          
        </div>
      </div>
      <div>
        <Image src={phone3} alt='' />
      </div>
    </section>
      <div>
        <div className='relative'>
          <div>
          <Image src={work} alt='' className='h-[800px]' />
          </div>
          <div className='container absolute flex flex-col items-center justify-center top-16 w-full gap-5'>
            <div className='flex flex-col text-center'>
              <h1 className='text-[#5B5B5B] text-2xl font-bold'>How I Work</h1>
              <p className='text-[#727272] text-base'>Getting started on Vendorze is easy</p>
            </div>
            <div>
              <div className='grid grid-cols-2 gap-4'>
                {
                  (activeButton === 1 ? vendor : buyer).map((item, index) => (
                    <div
                    key={index}
                    className={`bg-[#FFFFFF] p-5 rounded-lg shadow-md flex flex-col gap-4 ${
                      index === 2 ? "md:col-span-2 md:mx-auto" : ""
                    }`}
                  >
                      <div className='max-w-[339px]'>
                        <Image src={item.img} alt='' className='' />
                      </div>
                      <div className='flex flex-col gap-2'>
                        <h1 className='text-[#007474] font-semibold text-sm'>{item.title}</h1>
                        <p className='text-[#5B5B5B] text-xs'>{item.details}</p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className='container'>
      <div className='relative border-2 border-[#727272] w-full top-[-50px] bg-[#FFFFFF] rounded-3xl px-2  py-7 flex flex-col gap-5'>
        <h1 className='text-center text-2xl font-semibold text-[#5B5B5B]'>My Key Features</h1> 
        <div className='grid grid-cols-2 gap-10 p-3'>
          {
            features.map((item, index) => (
              <div className='flex flex-col gap-3  mb-1'>
                <div>
                  <Image src={item.icon} alt='' />
                </div>
                <h1 className='text-[#434343] text-base font-semibold'>{item.title}</h1>
                <hr />
                <p className='text-sm text-[#727272]'>{item.details}</p>
              </div>
            ))
          }
        </div>
      </div>
      </div>
    </>

  );
};

export default BizReview;
