'use client';

import { useBackendResponse } from '@/contexts/VerifyContext';
import { PinInput, PinInputField, Spinner, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const VerifyEmail = () => {
  const { backendResponse } = useBackendResponse();
  const [pin, setPin] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const toast = useToast();
  const router = useRouter();

  const handleVerify = () => {
    // console.log(backendResponse);
    // console.log(pin);
    // console.log(backendResponse?.data.verificationCode);

    if (backendResponse?.data.verificationCode === pin) {
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
  };

  return (
    <div className="w-full  flex flex-col items-center justify-center gap-5 text-center text-second-col font-light p-10">
      <p className="">
        Check your inbox, We have sent an activation code to your email
      </p>
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
      <div className="px-3 w-full">
        <button
          type="button"
          onClick={handleVerify}
          className="bg-second-col p-3 text-[#fff] rounded-lg text-[14px] font-bold w-full "
          disabled={isSubmitting}>
          {isSubmitting ? <Spinner /> : 'Verify'}
        </button>
      </div>
    </div>
  );
};

export default VerifyEmail;
