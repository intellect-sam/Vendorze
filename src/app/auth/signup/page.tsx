'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { Logo, Signup } from '@/assets/images';
import Image from 'next/image';
import {
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Spinner,
} from '@chakra-ui/react';
import Link from 'next/link';
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useState } from 'react';
import { IoEyeOff, IoEye } from 'react-icons/io5';
import ShowPasswordText from '@/core/hooks/ShowPasswordText';
import { _BASE_API_URL } from '@/constants';

interface SignUpData {
  fullname: 'string';
  emailAddress: 'string';
  type: 'string';
}

const signUpSchema: ZodType<SignUpData> = z.object({
  fullname: z.string().min(3, { message: 'Enter a full name' }),
  emailAddress: z.string().email('Invalid email address'),
  type: z.string().min(1, { message: 'Please select an option' }),
});

type SignupInput = z.infer<typeof signUpSchema>;

const SignUp = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<SignupInput>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<SignupInput> = async (data) => {
    try {
      const response = await axios.post(
        `${_BASE_API_URL}/api/ExternalUser/add-waitlist`,
        data
      );
      // Handle successful response here
      console.log(response.data);
    } catch (error) {
      console.error('There was a problem with the Axios request:', error);
      setError('root', {
        message: 'This is for another email',
      });
    }
  };
  return (
    <>
      <div className="max-w-[1600px] flex flex-col  md:flex-row justify-between items-center">
        <div className="hidden md:block">
          <Image
            src={Signup}
            alt=""
            className="md:w-[2250px]"
          />
        </div>
        <div className="w-full px-[35px] h-screen  flex flex-col  md:px-[100px] justify-center gap-2">
          <div className="py-3 flex w-full">
            <Link href="/">
              <Image
                src={Logo}
                alt=""
                className="w-[100px]"
              />
            </Link>
          </div>

          <h1 className="font-bold text-2xl">Sign Up</h1>
          <p>Enter your credentials to sign up as a user. </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col md:pr-[100px] md:gap-4 ">
            <div>
              <label className="input-label">Full Name</label>
              <Input
                type="text"
                placeholder="Enter Full Name"
                className="custom-input md:py-5"
                {...register('fullname')}
              />
              {errors.fullname && (
                <div className="text-error-col font-lighter text-[10px] ">
                  {errors.fullname.message}
                </div>
              )}
            </div>
            <div>
              <label className="input-label">Email</label>
              <Input
                type="email"
                placeholder="Enter Email"
                className="custom-input  md:py-5"
                {...register('emailAddress')}
              />
              {errors.emailAddress && (
                <div className="text-error-col font-lighter text-[10px] ">
                  {errors.emailAddress.message}
                </div>
              )}
            </div>

            <div>
              <label className="input-label">Are you a vendor or a buyer</label>

              <Select
                placeholder="Choose"
                {...register('type')}
                className="bg-primary text-[10px] font-light md:text-[15px] ">
                <option>Vendor</option>
                <option>Buyer</option>
              </Select>
              {errors.type && (
                <div className="text-error-col font-lighter text-[10px] ">
                  {errors.type.message}
                </div>
              )}
            </div>

            <button
              disabled={isSubmitting}
              type="submit"
              className="bg-second-col p-3 text-[#fff] rounded-lg text-[14px] font-bold">
              {isSubmitting ? <Spinner /> : 'Sign Up'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
