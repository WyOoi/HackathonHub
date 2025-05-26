import React, { useState } from "react";
import { Link } from "@remix-run/react";

interface HeaderProps {
  isScrolled: boolean;
}

export default function Header({ isScrolled }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header>
      <nav className={isScrolled ? "scrolled" : ""}>
        <div className="logo">
          <h1><Link to="/">HackathonHub</Link></h1>
        </div>
        <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
          <li>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/platforms" onClick={() => setMobileMenuOpen(false)}>
              Platforms
            </Link>
          </li>
          <li>
            <Link to="/faq" onClick={() => setMobileMenuOpen(false)}>
              FAQ
            </Link>
          </li>
        </ul>
        <div
          className={`hamburger ${mobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      <div className="hero">
        <h1>Find the Perfect Hackathon Platform</h1>
        <p>
          Discover top hackathon platforms to host, participate, and innovate with
          developers from around the world
        </p>
        <div className="cta-buttons">
          <Link to="/platforms" className="cta-primary">
            Explore Platforms
          </Link>
          <a
            href="https://devpost.com/hackathons"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-secondary"
          >
            Join a Hackathon
          </a>
        </div>
      </div>
    </header>
  );
} 