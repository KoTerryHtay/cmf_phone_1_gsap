import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import BatteryIcon from "./svg/BatteryIcon";
import RamIcon from "./svg/RamIcon";
import CameraIcon from "./svg/CameraIcon";

export default function Phone() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: "top 50%",
        end: "bottom top",
        scrub: true,
      },
    });

    videoRef.current!.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current?.duration,
      });
    };

    const text = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: "10% top",
        end: "50% bottom",
        scrub: 1.5, // animation progress will follow the scroll but with some delay
      },
    });

    text.fromTo(
      "#content",
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1, // stagger between each different words of 0.02
        ease: "power1.in",
      }
    );
  }, []);

  return (
    <section className="relative">
      <video
        className="w-full"
        ref={videoRef}
        src="/videos/output1.mp4"
        muted
        playsInline
        preload="auto"
        // autoPlay
        // loop
      />
      {/* <div className="absolute top-1/3 right-1/6 h-full"> */}
      <div id="content" className="absolute top-1/3 right-[14%] h-full">
        <h1 className="font-ndot-47 text-xl font-semibold mb-6 lowercase">
          CMF Phone 1
        </h1>
        <div className="space-y-2">
          <div id="spec" className="flex items-center gap-2">
            <BatteryIcon />
            <span className="font-letteraMonoLL-regular uppercase leading-none font-normal text-sm">
              5000 mAh battery
            </span>
          </div>
          <div id="spec" className="flex items-center gap-2">
            <RamIcon />
            <span className="font-letteraMonoLL-regular uppercase leading-none font-normal text-sm">
              16 GB RAM
            </span>
          </div>
          <div id="spec" className="flex items-center gap-2">
            <CameraIcon />
            <span className="font-letteraMonoLL-regular uppercase leading-none font-normal text-sm">
              50 MP Sony rear camera
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
