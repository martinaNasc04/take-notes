'use client'
import MobileMenu from "@/components/MobileMenu";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/sections/About";
import ContactSection from "@/components/sections/Contact";
import FeaturesSection from "@/components/sections/Features";
import HeroSection from "@/components/sections/Hero";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)


  return (

    <div className="min-h-screen bg-white">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ContactSection />
    </div>

  );
}
