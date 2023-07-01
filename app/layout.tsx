import '@styles/globals.css';
import { Inter } from 'next/font/google';

export const metadata = {
  title: 'Create Next App',
  description:
    'The ultimate solution for effortless meal planning and ingredient organization.',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout