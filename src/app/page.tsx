import image from '@public/home.jpg'
import Hero from '@/components/Hero';

export default function HomePage() {
  return (
      <Hero
        image={image}
        alt="Car Factory"
        title="Professional Cloud Hosting"
      />
  );
}
