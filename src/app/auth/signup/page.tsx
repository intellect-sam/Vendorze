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
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

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
        <div className="w-full px-[35px] h-full flex flex-col  md:px-[100px] justify-center gap-2">
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
              <label className="input-label">Email</label>
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
              <label className="input-label">Password</label>
              <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter Password"
                  className="custom-input  md:py-5"
                  {...register('password')}
                />
                <ShowPasswordText
                  onToggle={togglePassword}
                  showPassword={showPassword}
                />
              </InputGroup>
              {errors.password && (
                <div className="text-error-col font-lighter text-[10px] ">
                  {errors.password.message}
                </div>
              )}
            </div>
            <div className="py-1">
              <label className="input-label">Confirm Password</label>
              <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter Password"
                  className="custom-input  md:py-5"
                  {...register('confirmPassword')}
                />
                <ShowPasswordText
                  onToggle={togglePassword}
                  showPassword={showPassword}
                />
              </InputGroup>
              {errors.confirmPassword && (
                <div className="text-error-col font-lighter text-[10px] ">
                  {errors.confirmPassword.message}
                </div>
              )}
            </div>
            <div className="md:py-5 py-1 mb-7">
              <label className="input-label">Are you a vendor or a buyer</label>

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
              {isSubmitting ? <Spinner /> : 'Sign Up'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
