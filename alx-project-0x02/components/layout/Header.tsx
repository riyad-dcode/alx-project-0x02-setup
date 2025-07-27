import Link from 'next/link';

export default function Header() {
  return (
    <header className=" text-white py-4 px-0 shadow-md align-middle">
      <nav className="container mx-auto flex gap-10 p-0">
        <Link href="/home" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/posts" className="hover:underline">
          Posts
        </Link>
        <Link href="/users" className="hover:underline">
          Users 
        </Link>
      </nav>
    </header>
  );
}