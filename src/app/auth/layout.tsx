// components/AuthLayout.tsx
import { BackendResponseProvider } from '@/contexts/VerifyContext';
import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <BackendResponseProvider>
      <div>{children}</div>
    </BackendResponseProvider>
  );
};

export default AuthLayout;
