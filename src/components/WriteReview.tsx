"use client";

import ShowPasswordText from "@/core/hooks/ShowPasswordText";
import {
  Input,
  InputGroup,
  Modal,
  Select,
  Spinner,
  Textarea,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import SignUpModal, { SignUpModalRef } from "./SignUpModal";
import React, { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z, ZodType } from "zod";

interface ReviewData {
  fullName: string;
  businessOrVendorName: string;
  review: string;
}

const reviewScheme: ZodType<ReviewData> = z.object({
  fullName: z.string().min(3, { message: "Enter a full name" }),
  businessOrVendorName: z
    .string()
    .min(1, { message: "Enter your name or your business name" }),
  review: z.string().min(1, { message: "Write a review" }),
});

type reviewInput = z.infer<typeof reviewScheme>;

const WriteReview = () => {
  const signUpModalRef = useRef<SignUpModalRef | null>(null);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isValid },
  } = useForm<reviewInput>({
    resolver: zodResolver(reviewScheme),
  });

  const handleButtonClick = () => {
    if (isValid) {
      signUpModalRef.current?.onOpen();
    } else {
      console.log("Please fill out all required fields.");
    }
  };

  const onSubmit: SubmitHandler<reviewInput> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
      throw new Error();
    } catch (error) {
      setError("root", {
        message: "This is for another email",
      });
    }
  };

  return (
    <>
      <SignUpModal ref={signUpModalRef} />
      <div className="flex flex-col text-[14px]  text-[#727272] w-full p-4  shadow-lg  md:w-1/2 mt-8 max-w-[514px] space-y-5 lg:p-5">
        <div className="text-[14px] ">
          <h1 className="text-[13px] lg:text-[28px] font-bold text-[#B40FBF] ">
            Write Review
          </h1>
          <p>Write your experience with the business here</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 "
        >
          <div className="py-1 space-y-3">
            <label className="">Full Name</label>
            <Input
              type="text"
              placeholder="Enter Full Name"
              className="custom-input laptop:py-5"
              {...register("fullName")}
            />
            {errors.fullName && (
              <div className="text-error-col font-lighter text-[10px] ">
                {errors.fullName.message}
              </div>
            )}
          </div>

          <div className="py-1">
            <label className="">Name of Vendor and Business</label>

            <Input
              type="text"
              placeholder="Enter name of Business"
              className="custom-input laptop:py-5"
              {...register("businessOrVendorName")}
            />
            {errors.businessOrVendorName && (
              <div className="text-error-col font-lighter text-[10px] ">
                {errors.businessOrVendorName.message}
              </div>
            )}
          </div>
          <div className="py-1">
            <label className="">Enter Review</label>
            <Textarea placeholder="Enter Review" {...register("review")} />
            {errors.review && (
              <div className="text-error-col font-lighter text-[10px] ">
                {errors.review.message}
              </div>
            )}
          </div>

          <button
            disabled={isSubmitting}
            type="submit"
            className="bg-second-col p-3 text-[#fff] rounded-lg text-[14px] font-bold"
            onClick={handleButtonClick}
          >
            {isSubmitting ? <Spinner /> : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
};

export default WriteReview;
