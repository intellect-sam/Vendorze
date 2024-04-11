'use client';

import ShowPasswordText from '@/core/hooks/ShowPasswordText';
import { Input, InputGroup, Select, Spinner, Textarea } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { register } from 'module';

import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z, ZodType } from 'zod';

interface ReviewData {
  fullName: string;
  businessOrVendorName: string;
  review: string;
}

const reviewScheme: ZodType<ReviewData> = z.object({
  fullName: z.string().min(3, { message: 'Enter a full name' }),
  businessOrVendorName: z
    .string()
    .min(1, { message: 'Enter your name or your business name' }),
  review: z.string().min(1, { message: 'Write a review' }),
});

type reviewInput = z.infer<typeof reviewScheme>;

const WriteReview = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<reviewInput>({
    resolver: zodResolver(reviewScheme),
  });

  const onSubmit: SubmitHandler<reviewInput> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
      throw new Error();
    } catch (error) {
      setError('root', {
        message: 'This is for another email',
      });
    }
  };

  return (
    <div>
      <div className="py-5 md:py-3 text-[13px]">
        <h1 className="text-[13px] md:text-[18px] font-bold text-second-col">
          Write Review
        </h1>
        <p>Write your experience with the business here</p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 ">
        <div className="py-1">
          <label className="input-label">Full Name</label>
          <Input
            type="text"
            placeholder="Enter Full Name"
            className="custom-input md:py-5"
            {...register('fullName')}
          />
          {errors.fullName && (
            <div className="text-error-col font-lighter text-[10px] ">
              {errors.fullName.message}
            </div>
          )}
        </div>

        <div className="py-1">
          <label className="input-label">Name of Vendor and Business</label>

          <Input
            type="text"
            placeholder="Enter name of Business"
            className="custom-input md:py-5"
            {...register('businessOrVendorName')}
          />
          {errors.businessOrVendorName && (
            <div className="text-error-col font-lighter text-[10px] ">
              {errors.businessOrVendorName.message}
            </div>
          )}
        </div>
        <div className="py-1">
          <label className="input-label">Enter Review</label>
          <Textarea placeholder="Enter Review" />
          {errors.review && (
            <div className="text-error-col font-lighter text-[10px] ">
              {errors.review.message}
            </div>
          )}
        </div>

        <button
          disabled={isSubmitting}
          type="submit"
          className="bg-second-col p-3 text-[#fff] rounded-lg text-[14px] font-bold">
          {isSubmitting ? <Spinner /> : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default WriteReview;
