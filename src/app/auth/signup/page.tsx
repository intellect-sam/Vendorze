import { Logo, Signup } from '@/assets/images';
import Image from 'next/image';
import { FormControl, FormLabel, Input, Select } from '@chakra-ui/react';
import Link from 'next/link';

const SignUp = () => {
  return (
    <>
      <div className="max-w-[1600px] flex flex-col md:flex-row justify-between items-center">
        <div className="hidden md:block">
          <Image
            src={Signup}
            alt=""
            className="md:w-[2250px]"
          />
        </div>
        <div className="w-full px-[35px] flex flex-col h-screen md:px-[100px] justify-center gap-2">
          <div className="py-3 flex w-full">
            <Link href="/">
              <Image
                src={Logo}
                alt=""
                className="w-[100px]"
              />
            </Link>
          </div>

          <h1 className="font-bold text-3xl">Sign Up</h1>
          <p>Enter your credentials to sign up as a user. </p>

          <FormControl className="flex flex-col md:pr-[100px] ">
            <div className="py-3">
              <FormLabel>Full Name</FormLabel>
              <Input
                type="email"
                placeholder="Enter Full Name"
                className="custom-input md:py-5"
              />
            </div>
            <div className="py-3">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Enter Email"
                className="custom-input  md:py-5"
              />
            </div>
            <div className="py-3">
              <FormLabel>Password</FormLabel>
              <Input
                type="email"
                placeholder="Enter Password"
                className="custom-input  md:py-5"
              />
            </div>
            <div className="py-3">
              <FormLabel>Confirm Password</FormLabel>
              <Input
                type="email"
                placeholder="Enter Password"
                className="custom-input  md:py-5"
              />
            </div>
            <div className="md:py-5 py-3">
              <FormLabel>Are you a vendor or a buyer?</FormLabel>

              <Select placeholder="Choose">
                <option>Vendor</option>
                <option>Nigeria</option>
              </Select>
            </div>

            <button className="bg-second-col p-3 text-[#fff] rounded-lg text-[14px] font-bold">
              Sign Up
            </button>
          </FormControl>
        </div>
      </div>
    </>
  );
};

export default SignUp;
