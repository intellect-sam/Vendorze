'use client';

import { PinInput, PinInputField, Spinner } from '@chakra-ui/react';

const VerifyEmail = () => {
  return (
    <div className="w-full  flex flex-col items-center justify-center gap-5">
      <div className="flex  gap-5">
        <PinInput otp>
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
        className="bg-second-col p-3 text-[#fff] rounded-lg text-[14px] font-bold mb-10">
        {' '}
        Verify
        {/* {isSubmitting ? <Spinner /> : 'Submit'} */}
      </button>
    </div>
  );
};

export default VerifyEmail;
