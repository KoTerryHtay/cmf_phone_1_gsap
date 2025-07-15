import gsap from "gsap";

type Options = {
  trigger: string;
  start?: string;
  end?: string;
  markers?: boolean;
};

export const cmfTimeline = ({
  trigger,
  start,
  end,
  markers = false,
}: Options) =>
  gsap.timeline({
    scrollTrigger: {
      trigger,
      start: start ?? "top 95%",
      end: end ?? "top top",
      pin: "#cmf-logo",
      scrub: true,
      markers, // for debugging
      invalidateOnRefresh: true, // ensures recalculation on resize
    },
  });
