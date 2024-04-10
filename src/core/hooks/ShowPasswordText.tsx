import { InputRightElement } from '@chakra-ui/react';
import React, { useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';

interface PasswordToggleButtonProps {
  onToggle: () => void;
  showPassword: boolean;
}

const ShowPasswordText: React.FC<PasswordToggleButtonProps> = ({
  onToggle,
  showPassword,
}) => {
  return (
    <InputRightElement>
      <button
        className="text-second-col"
        type="button"
        onClick={onToggle}>
        {showPassword ? <IoEyeOff /> : <IoEye />}
      </button>
    </InputRightElement>
  );
};

export default ShowPasswordText;
