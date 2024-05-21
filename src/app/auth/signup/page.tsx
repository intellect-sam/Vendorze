'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { Logo, Signup } from '@/assets/images';
import Image from 'next/image';
import { Input, InputGroup, Select, Spinner } from '@chakra-ui/react';
import Link from 'next/link';
import { unknown, z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { _BASE_API_URL } from '@/constants';
import Notification from '@/components/Notification';
import { useRouter } from 'next/navigation';
import SuccessModal from '@/components/SuccessModal';
import { usePostRequest } from '@/core/hooks/usePostRequest';
import ShowPasswordText from '@/core/hooks/ShowPasswordText';
import { useVerifyResponse } from '@/contexts/VerifyContext';

const signUpSchema = z.object({
  fullname: z.string().min(3, { message: 'Enter a full name' }),
  emailAddress: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' }),

  type: z.string().min(1, { message: 'Please select an option' }),
});

type SignupInput = z.infer<typeof signUpSchema>;

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [show, setShow] = useState(false);
  const togglePassword = () => setShow(!show);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SignupInput>({
    resolver: zodResolver(signUpSchema),
  });

  const router = useRouter();
  const { setVerifyResponse } = useVerifyResponse();

  const onSubmit: SubmitHandler<SignupInput> = async (data) => {
    try {
      const response = await axios.post(
        `${_BASE_API_URL}/api/ExternalUser/add-waitlist`,
        data
      );
      if (response.status === 200) {
        setVerifyResponse(response.data);
        setSuccessMessage(response.data.message);
      } else {
        throw new Error('Unexpected response status');
      }
      setErrorMessage(null);
      reset();
      setShowModal(true);
      setShouldRedirect(true);
    } catch (error: unknown) {
      setSuccessMessage(null);

      if (error instanceof Error) {
        setErrorMessage(error.message);
        console.error(error.message);
      } else {
        // Handle cases where no response was received
        setErrorMessage(
          'An unexpected error occurred. Please try again later.'
        );
      }
    }
  };

  const closeModal = () => {
    if (shouldRedirect) {
      const timer = setTimeout(() => {
        router.push('/');
      }, 1000);

      return () => clearTimeout(timer);
    }
  };

  return (
    <>
      <SuccessModal
        isOpen={showModal}
        onClose={closeModal}
      />
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

          <h1 className="font-bold text-lg">Sign Up</h1>
          <p className="text-[6px] md:text-[15px]">
            Enter your credentials to sign up as a user.{' '}
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col md:pr-[100px] md:gap-4 ">
            {errorMessage && (
              <Notification
                message={errorMessage}
                type="error"
              />
            )}
            {successMessage && (
              <Notification
                message={successMessage}
                type="success"
              />
            )}
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
              <label className="input-label">Password</label>
              <InputGroup>
                <Input
                  {...register('password')}
                  type={show ? 'text' : 'password'}
                  placeholder="Enter Password"
                  className="custom-input"
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
              className="bg-second-col p-3 text-[#fff] rounded-lg text-[14px] font-bold mt-5">
              {isSubmitting ? <Spinner /> : 'Add to waiting list'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
