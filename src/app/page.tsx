import homeImg from '@public/home.jpg'
import Hero from '@/components/Hero';

export default function HomePage() {
  return (
    <div>
      <Hero
        image={homeImg}
        alt="Car Factory"
        title="Professional Cloud Hosting"
      />
    </div>
  );
}
