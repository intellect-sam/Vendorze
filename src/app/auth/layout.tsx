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
        
        {children}
      </div>
    </VerifyResponseProvider>
  );
};

export default AuthLayout;
