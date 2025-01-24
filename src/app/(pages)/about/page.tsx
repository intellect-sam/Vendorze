import { aboutunder, mission, vision } from '@/assets/icons'
import { about1, about2, aboutPhone } from '@/assets/images'
import Download from '@/components/Download'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image, {StaticImageData} from 'next/image'
import React from 'react'
import { SlNote } from "react-icons/sl";


interface Values {
    id: number;
    title: string;
    details: string;
}

const values: Values[] = [
    {
        id: 1,
        title: "Transparency",
        details: "I ensure clarity in every interaction and transaction."
    },
    {
        id: 2,
        title: "Integrity",
        details: "Trust is at the heart of everything I do."
    },
    {
        id: 3,
        title: "Innovation",
        details: "I continuously improve to meet your needs."
    },
    {
        id: 1,
        title: "Empowerment",
        details: "I’m here to help businesses thrive and buyers shop with confidence."
    },
]

const About = () => {
  return (
    <section>
        <Header />
        <section className='container flex flex-col gap-14 py-10 md:gap-20 lg:mt-20'>
            <div className='md:flex md:gap-10 md:justify-between md:items-center'>
                <div className='max-w-[608px] md:w-1/2'>
                    <Image src={about1} alt="about1"  className='w-full'/>
                </div>
                <div className='flex flex-col gap-8 md:max-w-[477px]'>
                    <div className='flex flex-col gap-8'>
                        <h1 className='italic text-3xl text-[#5B5B5B] font-semibold lg:text-5xl'>Who I Am</h1>
                        <div>
                            <Image src={aboutunder} alt='' />
                        </div>
                    </div>
                    <p className='text-xl text-[#5B5B5B]'>Hi, I’m Vendorze, your trusted companion in the online marketplace. Whether you’re a vendor working to build your credibility or a buyer seeking peace of mind, I’m here to make every transaction safer and more transparent for you.</p>
                </div>
            </div>
            <div className='md:flex md:flex-row-reverse md:gap-10 md:justify-between md:items-center'>
                <div className='max-w-[608px] hidden md:block md:w-1/2'>
                    <Image src={about2} alt="about2"  className='w-full'/>
                </div>
                <div className='flex flex-col gap-8 md:max-w-[477px]'>
                    <div className='flex flex-col gap-8'>
                        <h1 className='italic text-3xl text-[#5B5B5B] font-semibold lg:text-5xl'>What I Do</h1>
                        <div>
                            <Image src={aboutunder} alt='' />
                        </div>
                    </div>
                    <p className='text-xl text-[#727272]'>I help vendors like you prove your authenticity and grow your business with dynamic Trust Scores, milestone Badges, and actionable Insights. For buyers, I provide tools to verify vendors, avoid scams, and shop confidently—together, we’re transforming the online shopping experience.</p>
                </div>
            </div>
            <div className='flex flex-col gap-14 lg:pt-32 lg:pl-32 lg:pr-32'>
                <div className='flex flex-col gap-14 lg:gap-28'>
                    <div className='flex flex-col gap-8 justify-center items-center'>
                        <h1 className='italic text-3xl text-[#5B5B5B] font-semibold lg:text-5xl'>My Mission and Vision</h1>
                        <div>
                            <Image src={aboutunder} alt='' />
                        </div>
                    </div>
                    <div className='md:flex md:gap-10 md:justify-between md:items-center lg:justify-center lg:gap-60'>
                        <div className='flex flex-col justify-center items-center text-center max-w-[250px] lg:max-w-[477px] gap-6 p-3 shadow-lg relative  bg-[#fff] rounded-lg mb-10 md:mb-0 border-[0.5px] lg:p-6'>
                            <div className='flex flex-col gap-3 items-center'>
                                <div>
                                    <Image src={vision} alt='' />
                                </div>
                                <h1 className='text-xl font-semibold text-[#005B5B]'>My Vision</h1>
                            </div>
                            <p className='text-[#727272] text-sm'>To set the gold standard for trust and transparency in online transactions, connecting a global community of reliable vendors and informed buyers</p>
                            <div className="hexagon bg-[#54AAAA] transform rotate-90 absolute top-[-15px] right-[-40px] -z-50"></div>
                        </div>
                        <div className='flex flex-col justify-center items-center text-center max-w-[250px] lg:max-w-[477px] gap-6 p-3 shadow-lg relative  bg-[#fff] rounded-lg justify-self-end border-[0.5px] lg:p-6'>
                            <div className='flex flex-col gap-3 items-center'>
                                <div>
                                    <Image src={vision} alt='' />
                                </div>
                                <h1 className='text-xl font-semibold text-[#005B5B]'>My Mission</h1>
                            </div>
                            <p className='text-[#727272] text-sm'>I’m here to connect businesses and customers by building trust, promoting transparency, and ensuring every online interaction is safe and meaningful.</p>
                            <div className="hexagon bg-[#54AAAA] transform rotate-90 absolute top-[-15px] left-[-40px] -z-50"></div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-5 lg:gap-28 lg:p-32'>
                    <div className='flex flex-col gap-8 justify-center items-center'>
                        <h1 className='italic text-3xl text-[#5B5B5B] font-semibold lg:text-5xl'>My Core Values</h1>
                        <div>
                            <Image src={aboutunder} alt='' />
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-3 md:grid-cols-4 justify-between w-full'>
                        {
                            values.map((value) => (
                                <div key={value.id} className='flex flex-col gap-3 items-center rounded-lg p-3 shadow-lg bg-[#fff] text-center mb-3 border-[0.5px] max-w-[200px]'>
                                    <SlNote />

                                    <h1 className='text-xl text-[#005B5B] font-semibold'>{value.title}</h1>
                                    <p className='text-[#727272] text-sm'>{value.details}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
        <div className='bg-[#FAEBF8]'>
            <div className='container flex flex-col py-10 md:flex-row md:items-center'>
                <div className='max-w-[560px] md:w-1/2'>
                    <Image src={aboutPhone} alt="about1"  className='w-full'/>
                </div>
                <div className='flex flex-col gap-2 md:w-1/2 '>
                    <h1 className='text-xl font-semibold'>Join Me on This Journey</h1>
                    <p className='text-[#727272] text-sm'>I’m not just a platform; I’m part of a movement toward safer, more reliable online commerce. Together, we can create a world where trust and transparency thrive. Whether you’re a vendor or a buyer, I’m here to make your online experience better, safer, and more rewarding.</p>
                </div>
            </div>

        </div>
        <div className=' container py-5  flex flex-col items-center justify-center lg:gap-20 text-[#727272] w-full gap-3 md:flex-row'>
      <h1 className='lg:text-4xl text-xl italic text-center'>Let’s build trust, one transaction at a time.</h1>
        <Download />
      </div>
        <Footer />
    </section>  
  )
}

export default About