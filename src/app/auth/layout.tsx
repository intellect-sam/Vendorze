import { logo } from "@/assets/images";
import { VerifyResponseProvider } from "@/contexts/VerifyContext";
import Link from "next/link";
import React from "react";
import Image from "next/image";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <VerifyResponseProvider>
      <div className="h-screen flex item-start w-full justify-center items-center flex-col">
        <div className="mt-10 md:my-20">
          <Link href="/">
            <Image src={logo} alt="" className="" />
          </Link>
        </div>
        {children}
      </div>
    </VerifyResponseProvider>
  );
};

export default AuthLayout;
