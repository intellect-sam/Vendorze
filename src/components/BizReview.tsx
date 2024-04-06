import { BizRev, review } from '@/assets/images';
import Image from 'next/image';

const BizReview = () => {
  return (
    <section className="bg-[#FAFAFA] ">
      <div className="absolute hidden md:block left-0">
        <Image
          src={BizRev}
          alt=""
          className="max-w-[350px]"
        />
      </div>
      <div className="flex md:h-[496px] w-screen items-center flex-col text-gray-dark p-5 gap-5 py-10">
        <div className="flex">
          <div className=" ">
            <div className="md:w-[400px]  md:flex md:flex-col md:gap-5">
              <h1 className="custom-h1 md:text-4xl  md:text-left  md:leading-[50px]">
                Write Reviews For Business.
              </h1>
              <p className="custom-p  md:p-0  md:text-lg md:font-extralight md:w-[400px] md:leading-snug">
                Write reviews for businesses you made contact with to improve
                their trust score and their credibility. Your reviews also help
                other users to find trustworthy businesses easily.
              </p>
            </div>
          </div>
          <div className="md:absolute right-0  hidden md:block">
            <Image
              src={review}
              alt=""
              className="w-100 md:w-[353px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BizReview;
