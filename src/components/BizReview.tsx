import { BizRev, review } from '@/assets/images';
import Image from 'next/image';

const BizReview = () => {
  return (
    <section className="bg-[#FAFAFA] ">
      <div className="absolute hidden laptop, tablet:block left-0 z-0">
        <Image
          src={BizRev}
          alt=""
          className="laptop:max-w-[400px] tablet:max-w-[250px]"
        />
      </div>
      <div className="flex laptop:h-[496px] w-screen items-center laptop:items-center tablet:items-end flex-col text-gray-dark p-5 gap-5 py-10">
        <div className="flex tablet:px-[100px]">
          <div className="tablet:w-[300px] laptop:w-full  ">
            <div className="laptop:w-[400px]  laptop:flex laptop:flex-col laptop:gap-5">
              <h1 className="custom-h1 laptop:text-4xl  laptop:text-left  laptop:leading-[50px]">
                Write Reviews For Business.
              </h1>
              <p className="custom-p  laptop:p-0  laptop:text-lg laptop:font-extralight laptop:w-[400px] laptop:leading-snug">
                Write reviews for businesses you made contact with to improve
                their trust score and their credibility. Your reviews also help
                other users to find trustworthy businesses easily.
              </p>
            </div>
          </div>
          <div className="laptop:absolute right-0  hidden laptop:block">
            <Image
              src={review}
              alt=""
              className="w-100 laptop:w-[353px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BizReview;
