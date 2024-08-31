import Hero from "@/components/hero";
import perfImg from "public/performance.jpg";

export default function PerformancePage() {
  return (
    <Hero imgData={perfImg} imgAlt="Perf Img" title="We serve high performance apps"></Hero>
  );
}
