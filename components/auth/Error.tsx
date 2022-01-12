import { FC } from 'react';

interface ErrorProps {
  message: string
}

export const Error: FC<ErrorProps> = ({ message }) => {
  return (
    <div className="flex items-center justify-center bg-red-500 text-white font-bold text-4xl p-6 rounded-lg">
      <p>ERROR: {message}</p>
    </div>
  )
}