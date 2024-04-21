import { useState } from 'react';
import axios from 'axios';

interface PostRequestResult<T> {
  isLoading: boolean;
  error: string | null;
  response: T | null;
  postData: (data: any) => Promise<void>;
}

export const usePostRequest = <T>(url: string): PostRequestResult<T> => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<T | null>(null);

  const postData = async (data: any) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post<T>(url, data);
      setResponse(response.data);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setError(error.response.data.message);
      } else {
        setError('An unexpected error occurred. Please try again later.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, response, postData };
};
