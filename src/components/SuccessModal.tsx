import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { IoCheckmark } from 'react-icons/io5';
import VerifyEmail from './VerifyEmail';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered>
      <ModalOverlay />
      <ModalContent className="rounded-md">
        <div className="flex flex-col justify-center items-center h-80 gap-5 font-bold text-primary ">
          <VerifyEmail />
        </div>
      </ModalContent>
    </Modal>
  );
};

export default SuccessModal;
