`use client`;
import { Logo, Signup } from '@/assets/images';
import Image from 'next/image';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { forgot } from '@/assets/icons';
import Link from 'next/link';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';

// Define your validation schema with Yup
// const validationSchema = yup.object().shape({
//   email: yup.string().email('Invalid email').required('Email is required'),
//   password: yup
//     .string()
//     .required('Password is required')
//     .min(6, 'Password must be at least 6 characters'),
// });

const Login = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(validationSchema),
  // });

  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  return (
    <div className="max-w-[1600px] flex flex-col md:flex-row justify-between items-center">
      <div className="hidden md:block">
        <Image
          src={Signup}
          alt=""
          className="md:w-[2250px]"
        />
      </div>
      <div className="w-full px-[35px] flex flex-col h-screen md:px-[100px] justify-center gap-2">
        <div className="py-10 flex w-full  ">
          <Link href="/">
            <Image
              src={Logo}
              alt=""
              className="w-[100px]"
            />
          </Link>
        </div>

        <h1 className="font-bold text-3xl">Login</h1>
        <p>Enter your credentials to login in to your account</p>

        <FormControl className="flex flex-col md:pr-[100px]">
          <div className="py-3">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter Username"
              className="custom-input"
              // {...register('email')}
            />
          </div>
          <div className="py-3">
            <FormLabel>Password</FormLabel>
            <Input
              type="email"
              placeholder="Enter Password"
              className="custom-input"
              // {...register('password')}
            />
          </div>
          <div className="flex gap-3 text-center items-center">
            <div>
              <Image
                src={forgot}
                alt=""
                className="w-[20px]"
              />
            </div>

            <p>
              <Link href="#"> Forgot Password?</Link>
            </p>
          </div>
          <button
            type="submit"
            className="bg-second-col p-3 text-primary rounded-lg text-[14px] font-bold my-10">
            Login
          </button>
        </FormControl>
      </div>
    </div>
  );
};

export default Login;
