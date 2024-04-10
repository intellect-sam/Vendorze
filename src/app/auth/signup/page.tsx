'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { Logo, Signup } from '@/assets/images';
import Image from 'next/image';
import { FormLabel, Input, Select } from '@chakra-ui/react';
import Link from 'next/link';
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';

interface SignUpData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  buyerOrVendor: string;
}

const signUpSchema: ZodType<SignUpData> = z
  .object({
    fullName: z.string().min(3, { message: 'Enter a full name' }),
    email: z.string().email('Invalid email address'),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters' }),
    confirmPassword: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters' }),
    buyerOrVendor: z.string().min(1, { message: 'Please select an option' }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'Passwords do not match',
      });
    }
  });

type signupInput = z.infer<typeof signUpSchema>;

const SignUp = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<signupInput>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<signupInput> = async (data) => {
    // with axios
    try {
      const response = await axios.post(
        'https://vendorze.com/api/ExternalUser/create-user',
        data
      );
      console.log(response.data);
      console.log(data);
    } catch (error) {
      console.error('There was a problem with the Axios request:', error);
      setError('root', {
        message: 'This is for another email',
      });
    }
    // try {
    //   await new Promise((resolve) => setTimeout(resolve, 1000));
    //   console.log(data);
    //   throw new Error();
    // } catch (error) {
    //   setError('root', {
    //     message: 'This is for another email',
    //   });
    // }
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
        <div className="w-full px-[35px] h-full flex flex-col h-screen md:px-[100px] justify-center gap-2">
          <div className="py-3 flex w-full">
            <Link href="/">
              <Image
                src={Logo}
                alt=""
                className="w-[100px]"
              />
            </Link>
          </div>

          <h1 className="font-bold text-3xl">Sign Up</h1>
          <p>Enter your credentials to sign up as a user. </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col md:pr-[100px] md:gap-4 ">
            <div className="py-1">
              <label className="text-[10px] font-bold md:text-[15px]">
                Full Name
              </label>
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
              <label className="text-[10px] font-bold md:text-[15px]">
                Email
              </label>
              <Input
                type="email"
                placeholder="Enter Email"
                className="custom-input  md:py-5"
                {...register('email')}
              />
              {errors.email && (
                <div className="text-error-col font-lighter text-[10px] ">
                  {errors.email.message}
                </div>
              )}
            </div>
            <div className="py-1">
              <label className="text-[10px] font-bold md:text-[15px]">
                Password
              </label>
              <Input
                type="password"
                placeholder="Enter Password"
                className="custom-input  md:py-5"
                {...register('password')}
              />
              {errors.password && (
                <div className="text-error-col font-lighter text-[10px] ">
                  {errors.password.message}
                </div>
              )}
            </div>
            <div className="py-1">
              <label className="text-[10px] font-bold md:text-[15px]">
                Confirm Password
              </label>
              <Input
                type="password"
                placeholder="Enter Password"
                className="custom-input  md:py-5"
                {...register('confirmPassword')}
              />
              {errors.confirmPassword && (
                <div className="text-error-col font-lighter text-[10px] ">
                  {errors.confirmPassword.message}
                </div>
              )}
            </div>
            <div className="md:py-5 py-1 mb-7">
              <label className="text-[10px] font-bold md:text-[15px]  ">
                Are you a vendor or a buyer
              </label>

              <Select
                placeholder="Choose"
                {...register('buyerOrVendor')}
                className="bg-primary text-[10px] font-light md:text-[15px] ">
                <option>Vendor</option>
                <option>Buyer</option>
              </Select>
              {errors.buyerOrVendor && (
                <div className="text-error-col font-lighter text-[10px] ">
                  {errors.buyerOrVendor.message}
                </div>
              )}
            </div>

            <button
              disabled={isSubmitting}
              type="submit"
              className="bg-second-col p-3 text-[#fff] rounded-lg text-[14px] font-bold">
              {isSubmitting ? 'submitting...' : 'Sign Up'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
