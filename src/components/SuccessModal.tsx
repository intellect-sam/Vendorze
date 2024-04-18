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
        <div className="bg-second-col py-5"></div>
        <div className="flex flex-col justify-center items-center h-80 gap-5 font-bold text-primary ">
          <div className="rounded-[100%] h-20 w-20 bg-second-col text-center items-center justify-center flex text-4xl font-extrabold ">
            <IoCheckmark />
          </div>
          <h1 className="text-second-col">Success</h1>
          <Link href="/">
            <button className="bg-second-col  px-10 py-1 rounded-md ">
              Back to Home Page
            </button>
          </Link>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default SuccessModal;
