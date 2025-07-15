import { useGSAP } from "@gsap/react";
import { heroImages } from "../../constants";
import HeroImage from "./HeroImage";
import gsap from "gsap";

export default function Hero() {
  useGSAP(() => {
    gsap.to("#cmf-logo", {
      opacity: 1,
      duration: 2,
      ease: "power1.out",
    });
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center">
      <div className="absolute left-0 top-0 w-full h-screen z-50 flex items-center justify-center">
        <img
          id="cmf-logo"
          src="/images/cmf.svg"
          alt="cmf logo"
          className="w-[200px] md:w-[400px] absolute opacity-0"
          // className="w-[200px] md:w-[400px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 opacity-0"
        />
      </div>

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
    </section>
  );
}
