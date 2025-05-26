import { MetaFunction } from "@remix-run/node";
import { useState, useEffect } from "react";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "HackathonHub | Discover Top Hackathon Platforms" },
    { name: "description", content: "Explore the best hackathon platforms for hosting, participating, and innovating with developers from around the world" }
  ];
};

export default function Index() {
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
        <section className="home-content">
          <div className="container">
            <h2>Welcome to HackathonHub</h2>
            <p>Your one-stop resource for discovering the best hackathon platforms available today.</p>
            <p>Use the navigation menu to explore detailed information about top hackathon platforms, learn about the benefits of participating in hackathons, and find answers to frequently asked questions.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 