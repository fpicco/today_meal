import '@styles/globals.css';

export const metadata = {
  title: 'Create Next App',
  description:
    'The ultimate solution for effortless meal planning and ingredient organization.',
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
