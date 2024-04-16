import React from 'react';

interface MessageProps {
  message: string;
}

const Notification: React.FC<MessageProps> = ({ message }) => {
  return (
    <>
      <div className="text-[10px] text-error-col">{message}</div>
    </>
  );
};

export default Notification;
