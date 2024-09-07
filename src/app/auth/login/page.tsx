'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { logo, Signup } from '@/assets/images';
import Image from 'next/image';
import {
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
} from '@chakra-ui/react';
import { forgot } from '@/assets/icons';
import Link from 'next/link';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import ShowPasswordText from '@/core/hooks/ShowPasswordText';

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' }),
});

type FormField = z.infer<typeof schema>;

const Login = () => {
  const [show, setShow] = useState(false);

  const togglePassword = () => setShow(!show);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormField>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormField> = async (data) => {
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
    <div className="max-w-[1600px] flex flex-col lg:flex-row justify-between items-center overflow-hidden">
      <div className="hidden lg:block">
        <Image
          src={Signup}
          alt=""
          className="lg:w-[860px]"
        />
      </div>
      <div className="w-full px-[35px] flex flex-col h-screen   justify-center gap-2 md:w-[450px]">
        <div className="py-3 flex w-full  ">
          <Link href="/">
            <Image
              src={logo}
              alt=""
              className="w-[100px]"
            />
          </Link>
        </div>

        <h1 className="font-bold text-lg">Login</h1>
        <p className="text-[14px] lg:text-[15px]">
          Enter your credentials to login in to your account
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 py-5 text-[12px] item-start w-full">
          <div>
            <label className="input-label">Email</label>
            <Input
              {...register('email')}
              type="email"
              placeholder="Enter Username"
              className="custom-input placeholder:text-[10px]"
            />
            {errors.email && (
              <div className="text-error-col font-lighter text-[10px] ">
                {errors.email.message}
              </div>
            )}
          </div>
          <div className="pt-4">
            <label className="input-label">Password</label>
            <InputGroup>
              <Input
                {...register('password')}
                type={show ? 'text' : 'password'}
                placeholder="Enter Password"
                className="custom-input placeholder:text-[10px]"
              />
              <ShowPasswordText
                onToggle={togglePassword}
                showPassword={show}
              />
            </InputGroup>
            {errors.password && (
              <div className="text-error-col font-lighter text-[10px]">
                {errors.password.message}
              </div>
            )}
          </div>
          <div className="flex gap-1 text-center items-center py-4">
            <div>
              <Image
                src={forgot}
                alt=""
                className="w-[15px]"
              />
            </div>

            <p className="text-[15px]">
              <Link href="#"> Forgot Password?</Link>
            </p>
          </div>
          <button
            disabled={isSubmitting}
            type="submit"
            className="bg-second-col p-3 text-primary rounded-lg text-[14px] font-bold">
            {isSubmitting ? <Spinner /> : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
