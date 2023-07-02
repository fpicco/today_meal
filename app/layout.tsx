import Provider from '@components/Provider';
import Nav from '@components/layout/Nav';
import '@styles/globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Create Next App',
  description:
    'The ultimate solution for effortless meal planning and ingredient organization.',
};

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="container mx-auto" suppressHydrationWarning>
        <Provider>
          <Nav />
          {children}
        </Provider>
      </body>
    </html>
  );
}

export default RootLayout;
