import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <br/>
      <ul>
        <li><Link href="/performance">Performance</Link></li>
        <li><Link href="/reliability">Reliability</Link></li>
        <li><Link href="/scale">Scale</Link></li>
      </ul>
    </div>
  );
}
