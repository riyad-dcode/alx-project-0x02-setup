import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav>
        <ul style={{ display: 'flex', gap: '20px', listStyle: 'none' }}>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}