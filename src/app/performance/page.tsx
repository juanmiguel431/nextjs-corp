import image from '@public/performance.jpg'
import Hero from '@/components/Hero';

export default function PerformancePage() {
  return (
    <Hero
      image={image}
      alt="Welding"
      title="We serve high performance applications"
    />
  );
}
