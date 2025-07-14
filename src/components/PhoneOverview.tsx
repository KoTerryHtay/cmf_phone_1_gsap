import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import BatteryIcon from "./svg/BatteryIcon";

import CameraIcon from "./svg/CameraIcon";
import ProcessorIcon from "./svg/ProcessorIcon";

import OsIcon from "./svg/OsIcon";
import WaterIcon from "./svg/WaterIcon";
import RamIcon from "./svg/RamIcon";

export default function PhoneOverview() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#overview-video",
        start: "top 95%",
        end: "bottom top",
        scrub: true,
        // pin: true,
      },
    });

    videoRef.current!.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current?.duration,
      });
    };

    const text = gsap.timeline({
      scrollTrigger: {
        trigger: "#overview-video",
        start: "5% top",
        end: "50% bottom",
        // pin: true,
        scrub: 1, // animation progress will follow the scroll but with some delay
      },
    });

    text
      .fromTo(
        "#overview-text-1",
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1, // stagger between each different words of 0.01
          ease: "power1.in",
        }
      )
      .fromTo(
        "#overview-text-2",
        {
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1, // stagger between each different words of 0.01
          ease: "power1.in",
        },
        "-=1"
      );
  }, []);

  return (
    <section className="relative w-full">
      <video
        id="overview-video"
        className="w-full"
        ref={videoRef}
        src="/videos/output2.mp4"
        muted
        playsInline
        preload="auto"
        // autoPlay
        // loop
      />
      {/* <div className="absolute top-1/3 right-1/6 h-full"> */}

      {/* text 1 */}
      <div
        id="overview-text-1"
        className="absolute top-1/3 left-[14%] h-full hidden lg:block"
      >
        <h1 className="font-ndot-47 text-xl font-semibold mb-6 lowercase">
          CMF Phone 1 Specs
        </h1>
        <div className="space-y-2">
          <div id="spec" className="flex items-center gap-2">
            <ProcessorIcon />
            <span className="font-letteraMonoLL-regular uppercase leading-none font-normal text-sm">
              Mediatek Dimensity 7300
              {/* (4 nm) */}
            </span>
          </div>
          <div id="spec" className="flex items-center gap-2">
            <RamIcon />
            <span className="font-letteraMonoLL-regular uppercase leading-none font-normal text-sm">
              6/128, 8/128, 8/256
            </span>
          </div>
          <div id="spec" className="flex items-center gap-2">
            <OsIcon />
            <span className="font-letteraMonoLL-regular uppercase leading-none font-normal text-sm">
              Nothing OS 2.6/ Android 14
            </span>
          </div>
        </div>
      </div>

      {/* text 2 */}
      <div
        id="overview-text-2"
        className="absolute top-1/3 right-[9%] h-full hidden lg:block"
      >
        <h1 className="font-ndot-47 text-xl font-semibold mb-6 lowercase">
          CMF Phone 1 Specs
        </h1>
        <div className="space-y-2">
          <div id="spec" className="flex items-center gap-2">
            <BatteryIcon />
            <span className="font-letteraMonoLL-regular uppercase leading-none font-normal text-sm">
              5000 mAh battery
            </span>
          </div>
          <div id="spec" className="flex items-center gap-2">
            <WaterIcon />
            <span className="font-letteraMonoLL-regular uppercase leading-none font-normal text-sm">
              IP52 Certified
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
