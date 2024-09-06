import { VerifyResponseProvider } from '@/contexts/VerifyContext';
import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <VerifyResponseProvider>
      <div>{children}</div>
    </VerifyResponseProvider>
  );
};

export default AuthLayout;
