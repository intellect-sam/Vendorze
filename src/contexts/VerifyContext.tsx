'use client';

import React, { useContext, createContext, ReactNode, useState } from 'react';

interface VerifyResponse {
  data: {
    verificationCode: string;
    retrievalCode: string;
  };
  isSuccessful: boolean;
  message: string;
}

interface VerifyResponseContextType {
  verifyResponse: VerifyResponse | null;
  setVerifyResponse: (response: VerifyResponse | null) => void;
}

const VerifyResponseContext = createContext<
  VerifyResponseContextType | undefined
>(undefined);

export const useVerifyResponse = (): VerifyResponseContextType => {
  const context = useContext(VerifyResponseContext);
  if (!context) {
    throw new Error(
      'useVerifyResponse must be used within a VerifyResponseProvider'
    );
  }
  return context;
};

interface VerifyResponseProviderProps {
  children: ReactNode;
}

export const VerifyResponseProvider: React.FC<VerifyResponseProviderProps> = ({
  children,
}) => {
  const [verifyResponse, setVerifyResponse] = useState<VerifyResponse | null>(
    null
  );

  return (
    <VerifyResponseContext.Provider
      value={{ verifyResponse, setVerifyResponse }}>
      {children}
    </VerifyResponseContext.Provider>
  );
};
