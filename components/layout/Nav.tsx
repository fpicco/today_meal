'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  signIn,
  signOut,
  useSession,
  getProviders,
  ClientSafeProvider,
} from 'next-auth/react';

function Nav(): JSX.Element {
  const [providers, setProviders] = useState<ClientSafeProvider[]>([]);
  const { data: session } = useSession();

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      const providersArray = response ? Object.values(response) : [];
      setProviders(providersArray);
    };
    setUpProviders();
  }, []);

  return (
    <nav className='mb-16 flex w-full items-center justify-between pt-3'>
      <Link href='/' passHref className='flex-center flex gap-2'>
        <Image
          src='/assets/images/logo.webp'
          alt='logo'
          width={30}
          height={30}
          className='object-contain'
        />
        <p className='font-semibold'>Today&apos;s Meal</p>
      </Link>
      {session?.user ? (
        <div className='flex gap-3 md:gap-5'>
          <Link href='/create-recipe' className='black_btn'>
            Create Recipe
          </Link>
          <button
            type='button'
            onClick={() => {
              signOut();
            }}
            className='outline_btn'
          >
            Sign out
          </button>
          <Image
            src={session.user.image || ''}
            width={37}
            height={37}
            className='rounded-full'
            alt='profile'
          />
        </div>
      ) : (
        providers &&
        providers.map((provider) => (
          <button
            type='button'
            key={provider.id}
            onClick={() => {
              signIn(provider.name);
            }}
            className='black_btn'
          >
            Sign In
          </button>
        ))
      )}
    </nav>
  );
}

export default Nav;
