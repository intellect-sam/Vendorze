'use client';

import { _BASE_API_URL } from '@/constants';
import { useVerifyResponse } from '@/contexts/VerifyContext';
import { PinInput, PinInputField, Spinner, useToast } from '@chakra-ui/react';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Notification from './Notification';

const VerifyEmail = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { verifyResponse } = useVerifyResponse();
  const [pin, setPin] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const toast = useToast();
  const router = useRouter();

  const handleVerify = async () => {
    setIsSubmitting(true);
    try {
      const retrievalCode = verifyResponse?.data.retrievalCode;
      const response = await axios.post(
        `${_BASE_API_URL}/api/ExternalUser/verify-email-waitlist`,
        { verificationCode: pin, retrievalCode }
      );
      console.log(response);
      if (response.status === 200) {
        toast({
          title: 'verification successful',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        router.push('/');
      } else {
        toast({
          title: 'Invalid verification code.',
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
      }
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        if (error.response) {
          const errorData = error.response.data;
          if (errorData.isSuccessful === false && errorData.message) {
            setErrorMessage(errorData.message);
          } else {
            setErrorMessage('An error occurred. Please try again.');
          }
        }
      }
    }
    setIsSubmitting(false);
  };

  return (
    <div className="w-full  flex flex-col items-center justify-center gap-5 text-center text-second-col font-light p-10">
      <p className="">
        Check your inbox, We have sent an activation code to your email
      </p>

      <form
        action=""
        onSubmit={handleVerify}
        className="flex flex-col gap-5">
        <div className="flex  gap-5">
          <PinInput
            otp
            placeholder=""
            value={pin}
            onChange={(value) => setPin(value)}>
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </div>

        <button
          type="submit"
          onClick={handleVerify}
          className="bg-second-col p-3 text-[#fff] rounded-lg text-[14px] font-bold w-full "
          disabled={isSubmitting}>
          {isSubmitting ? <Spinner /> : 'Verify'}
        </button>

        {errorMessage && (
          <Notification
            message={errorMessage}
            type="error"
          />
        )}
      </form>
    </div>
  );
};

export default VerifyEmail;
