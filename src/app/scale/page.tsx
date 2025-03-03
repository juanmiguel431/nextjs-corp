import image from '@public/scale.jpg'
import Hero from '@/components/Hero';

export default function ScalePage() {
  return (
    <Hero
      image={image}
      alt="Steel factory"
      title="Scale your app to infinity"
    />
  );
}
