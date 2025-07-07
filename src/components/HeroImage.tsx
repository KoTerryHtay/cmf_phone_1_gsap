import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type Props = {
  image: string;
  x?: number | null;
  y?: number | null;
  id: string;
};

export default function HeroImage({ image, x, y, id }: Props) {
  useGSAP(() => {
    gsap.fromTo(
      `#${id}`,
      {
        opacity: 0,
      },
      {
        opacity: 0.9,
        ...(x && { x }),
        ...(y && { y }),
        duration: 2,
        ease: "power1.out",
        stagger: 0.02, // stagger between each different words of 0.02
      }
    );
  }, []);

  return (
    <img
      id={id}
      src={image}
      alt="cmf logo"
      className="w-[200px] md:w-[100px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block"
    />
  );
}
