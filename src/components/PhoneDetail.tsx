import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import { useState } from "react";
import { cmfTimeline } from "../cmfTimeline";

// const colors = ["#DB4E30", "#ADC3BB", "#B9CCC6", "#1F1F23"];

const images = ["OrangePhone", "BlackPhone", "GreenPhone"];
const colors = ["#DB4E30", "#1F1F23", "#ADC3BB"];

export default function PhoneDetail() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useGSAP(() => {
    cmfTimeline({
      trigger: "#bg-color",
      start: "start 85%",
      // markers: true,
    }).to("#cmf-logo", { x: -300 });
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      "#phone-color",
      { opacity: 0, xPercent: -100, rotate: 0 },
      { xPercent: 0, opacity: 1, duration: 1, ease: "power1.inOut", rotate: 90 }
    );

    gsap.to("#bg-color", {
      backgroundColor: colors[currentIndex],
      duration: 1.5,
      ease: "power1.inOut",
    });
  }, [currentIndex]);

  return (
    <section
      id="bg-color"
      className="w-full h-screen px-20 flex flex-col items-center relative"
    >
      <img
        className="w-[500px] h-fit"
        id="phone-color"
        src={`/images/${images[currentIndex]}.webp`}
        alt="phone"
      />

      <div className="absolute top-1/2 translate-y-20 space-x-4">
        <button
          onClick={() => setCurrentIndex(0)}
          className={clsx(
            "bg-orange-700 p-2 rounded-full hover:cursor-pointer",
            `${
              currentIndex === 0
                ? "outline-2 outline-offset-2 outline-orange-800"
                : ""
            }`
          )}
        />

        <button
          onClick={() => setCurrentIndex(1)}
          className={clsx(
            "bg-gray-800 p-2 rounded-full hover:cursor-pointer",
            `${
              currentIndex === 1
                ? "outline-2 outline-offset-2 outline-gray-900"
                : ""
            }`
          )}
        />
        <button
          onClick={() => setCurrentIndex(2)}
          className={clsx(
            "bg-[#84bda8] p-2 rounded-full hover:cursor-pointer",
            `${
              currentIndex === 2
                ? "outline-2 outline-offset-2 outline-[#395149]"
                : ""
            }`
          )}
        />
      </div>
    </section>
  );
}
