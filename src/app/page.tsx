import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedMenu from "@/components/FeaturedMenu";
import LocationMap from "@/components/LocationMap";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <FeaturedMenu />
      <Testimonials />
      <CallToAction />
      <LocationMap />
    </div>
  );
}