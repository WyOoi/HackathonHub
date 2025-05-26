import React, { useState, useEffect } from "react";
import { MetaFunction } from "@remix-run/node";
import Header from "~/components/Header";
import About from "~/components/About";
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "About Hackathon Platforms | HackathonHub" },
    { name: "description", content: "Learn about different hackathon platforms and what makes them unique" }
  ];
};

export default function AboutRoute() {
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
        <About />
      </main>
      <Footer />
    </>
  );
} 