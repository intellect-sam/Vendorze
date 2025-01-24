import { google, apple } from '@/assets/icons';
import Image, { StaticImageData } from 'next/image';
import React from 'react'

interface store {
  id: number;
  img: StaticImageData;
}

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

const Download = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-3'>
           <p className='text-[#727272] text-sm md:text-base'>Download our app</p>
                      <div className='flex gap-6'>
                        {
                          playstore.map((item) => (
                     
                              <button key={item.id} className='bg-[#007474] p-2 rounded-full'>
                                <Image src={item.img} alt="store icon" />
                              </button>
                
                          ))
                        }
                      </div>
    </div>
  )
}

export default Download