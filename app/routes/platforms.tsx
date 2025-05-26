import React, { useState, useEffect } from "react";
import { MetaFunction } from "@remix-run/node";
import Header from "~/components/Header";
import Platforms from "~/components/Platforms";
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Hackathon Platforms | HackathonHub" },
    { name: "description", content: "Explore top hackathon platforms including HackerEarth, Devpost, DoraHacks, Superteam Earn, and HackQuest" }
  ];
};

export default function PlatformsRoute() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header isScrolled={isScrolled} />
      <main>
        <Platforms />
      </main>
      <Footer />
    </>
  );
} 