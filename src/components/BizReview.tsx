import { BizRev, review } from '@/assets/images';
import Image from 'next/image';

const BizReview = () => {
  return (
    <section className="max-h-[100%]">
      <div className="bg-[#FAFAFA] lg:min-h-[696px] ">
        <div className="lg, md:absolute left-0 z-0 md:max-w-[300px] lg:min-w-[544px]">
          <Image
            src={BizRev}
            alt=""
            className="w-full"
          />
        </div>
        <div className="flex  w-screen items-center  flex-col text-gray-dark p-5 gap-5 py-10">
          <div className="flex flex-col md:flex-row tablet:px-[100px]">
            <div className="py-10 md:max-w-[250px] lg:max-w-[569px] lg:px-10 ">
              <div className="md:items-center flex flex-col md:justify-center w-full space-y-4">
                <h1 className="text-center text-lg lg:text-5xl font-semibold md:text-2xl md:text-start lg:leading-normal">
                  Write Reviews For Business.
                </h1>
                <p className="text-text-col text-sm text-justify lg:text-2xl">
                  Write reviews for businesses you made contact with to improve
                  their trust score and their credibility. Your reviews also
                  help other users to find trustworthy businesses easily.
                </p>
              </div>
            </div>
            <div className="lg:absolute md:absolute right-0  md:min-w-[150px] lg:min-w-[353px]">
              <Image
                src={review}
                alt=""
                className="w-full "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BizReview;
