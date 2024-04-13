import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Input,
  Spinner,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import React, { forwardRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z, ZodType } from 'zod';

export interface SignUpModalRef {
  onOpen: () => void;
}

interface SignUpData {
  email: string;
  password: string;
  confirmPassword: string;
  serverError?: string;
}

const signUpdataSchema: ZodType<SignUpData> = z
  .object({
    email: z.string().email('Invalid email address'),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters' }),
    confirmPassword: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters' }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'Passwords do not match',
      });
    }
  });

type signUpIn = z.infer<typeof signUpdataSchema>;

const SignUpModal = forwardRef((props, ref) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<signUpIn>({
    resolver: zodResolver(signUpdataSchema),
  });

  const onSubmit: SubmitHandler<signUpIn> = async (data) => {
    try {
      const response = await axios.post(
        'https://vendorze.com/api/ExternalUser/create-user',
        data
      );
      // Handle successful response here
      console.log(response.data);
    } catch (error: any) {
      if (error.response && error.response.data) {
        const serverResponse = error.response.data;
        if (!serverResponse.isSuccessful) {
          setError('serverError', {
            type: 'server',
            message: serverResponse.message,
          });
        }
      } else {
        console.error('There was a problem with the Axios request:', error);
      }
    }
  };

  React.useImperativeHandle(ref, () => ({
    onOpen,
  }));
  return (
    <div>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        isCentered>
        <ModalOverlay />
        <ModalContent className="text-[#727272]">
          <ModalHeader>
            <div>
              <h1 className="text-[20px]">Sign Up</h1>
              <p className="text-[10px] font-light">
                Kindly sign up to finish the process
              </p>
            </div>
            {errors.serverError && (
              <p className="text-[2px] text-error-col">
                {errors.serverError.message}
              </p>
            )}
          </ModalHeader>
          <hr />
          <ModalBody>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-3 ">
              <div>
                <label className="input-label">Email Address</label>
                <Input
                  type="email"
                  placeholder="Enter email address"
                  className="custom-input md:py-5"
                  {...register('email')}
                />
                {errors.email && (
                  <div className="text-error-col font-lighter text-[10px] ">
                    {errors.email.message}
                  </div>
                )}
              </div>
              <div>
                <label className="input-label">Password</label>
                <Input
                  type="password"
                  placeholder="***********"
                  className="custom-input md:py-5"
                  {...register('password')}
                />
                {errors.password && (
                  <div className="text-error-col font-lighter text-[10px] ">
                    {errors.password.message}
                  </div>
                )}
              </div>
              <div>
                <label className="input-label">Confirm Password</label>
                <Input
                  type="password"
                  placeholder="***********"
                  className="custom-input md:py-5"
                  {...register('confirmPassword')}
                />
                {errors.confirmPassword && (
                  <div className="text-error-col font-lighter text-[10px] ">
                    {errors.confirmPassword.message}
                  </div>
                )}
              </div>

              <button
                disabled={isSubmitting}
                type="submit"
                className="bg-second-col p-3 text-[#fff] rounded-lg text-[14px] font-bold mb-10">
                {isSubmitting ? <Spinner /> : 'Submit'}
              </button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
});

export default SignUpModal;
