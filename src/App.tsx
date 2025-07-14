import gsap from "gsap";
import Hero from "./components/Hero";
import Phone from "./components/Phone";
import { ScrollTrigger, SplitText } from "gsap/all";
import PhoneOverview from "./components/PhoneOverview";
import PhoneDetail from "./components/PhoneDetail";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function App() {
  return (
    <main className="w-full bg-[#ffffffcc]">
      <Hero />
      <Phone />
      <PhoneOverview />
      <PhoneDetail />
    </main>
  );
}
