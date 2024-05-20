'use client';

import React, { useContext, createContext, ReactNode, useState } from 'react';

interface BackendResponse {
  data: {
    verificationCode: string;
    retrievalCode: string;
  };
  isSuccessful: boolean;
  message: string;
}

interface BackendResponseContextType {
  backendResponse: BackendResponse | null;
  setBackendResponse: (response: BackendResponse | null) => void;
}

const BackendResponseContext = createContext<
  BackendResponseContextType | undefined
>(undefined);

export const useBackendResponse = (): BackendResponseContextType => {
  const context = useContext(BackendResponseContext);
  if (!context) {
    throw new Error(
      'useBackendResponse must be used within a BackendResponseProvider'
    );
  }
  return context;
};

interface BackendResponseProviderProps {
  children: ReactNode;
}

export const BackendResponseProvider: React.FC<
  BackendResponseProviderProps
> = ({ children }) => {
  const [backendResponse, setBackendResponse] =
    useState<BackendResponse | null>(null);

  return (
    <BackendResponseContext.Provider
      value={{ backendResponse, setBackendResponse }}>
      {children}
    </BackendResponseContext.Provider>
  );
};
