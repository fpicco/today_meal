import Image from 'next/image';
import Link from 'next/link';

function Nav(): JSX.Element {
  return (
    <nav className="flex items-center mb-16 w-full pt-3">
      <Link href="/" passHref className="flex-center flex gap-2">
        <Image
          src="/assets/images/logo.webp"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="font-semibold">Today&apos;s Meal</p>
      </Link>
    </nav>
  );
}

export default Nav;
