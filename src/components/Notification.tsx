import React from 'react';

interface MessageProps {
  message: string;
  type: 'success' | 'error';
}

const Notification: React.FC<MessageProps> = ({ message, type }) => {
  const textColorClass =
    type === 'success' ? 'text-success-col' : 'text-error-col';
  return (
    <>
      <div className={`text-[10px] ${textColorClass}`}>{message}</div>
    </>
  );
};

export default Notification;
