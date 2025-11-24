import Navbar from "@/components/Navbar";
import AboutSection from "@/components/sections/About";
import HeroSection from "@/components/sections/Hero";

export default function Home() {

  return (

    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
    </div>

  );
}
