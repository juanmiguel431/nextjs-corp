import Image from 'next/image';
import homeImg from '@public/home.jpg'

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <div className="absolute -z-10 inset-0">
        <Image
          src={homeImg}
          alt="Care Factory"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
}
