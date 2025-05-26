import React, { useState, useEffect } from "react";
import { MetaFunction } from "@remix-run/node";
import Header from "~/components/Header";
import Faq from "~/components/Faq";
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "FAQ | HackathonHub" },
    { name: "description", content: "Frequently asked questions about hackathons and how to participate" }
  ];
};

export default function FaqRoute() {
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
        <Faq />
      </main>
      <Footer />
    </>
  );
} 