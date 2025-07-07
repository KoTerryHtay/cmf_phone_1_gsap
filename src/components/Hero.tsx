import { heroImages } from "../../constants";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center">
      <img
        src="/images/cmf.png"
        alt="cmf logo"
        className="w-[200px] md:w-[400px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
      />

      {heroImages.map((image) => (
        <HeroImage
          key={image.id}
          image={image.image}
          x={image.x}
          y={image.y}
          id={image.id}
        />
      ))}
      {heroImages.map((image) => (
        <HeroImage
          key={image.id + "-1"}
          image={image.image}
          x={-1 * image.x}
          y={-1 * (image.y + 100)}
          id={image.id + "-1"}
        />
      ))}
      {/* <HeroImage
        image="/public/images/hero/Arbok-Black.webp"
        x={400}
        y={200}
        // y={null}
        id={"ab"}
      />
      <HeroImage
        image="/public/images/hero/Arbok-White.webp"
        x={-400}
        id={"aw"}
      /> */}
    </section>
  );
}
