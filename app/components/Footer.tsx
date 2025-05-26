import React from "react";
import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>HackathonHub</h2>
            <p>Your gateway to the world's best hackathon platforms.</p>
          </div>
          <div className="footer-links">
            <div className="footer-links-column">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="#about">About</Link></li>
                <li><Link to="#platforms">Platforms</Link></li>
                <li><Link to="#faq">FAQ</Link></li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h3>Platforms</h3>
              <ul>
                <li><a href="https://www.hackerearth.com/recruit/hackathons/" target="_blank" rel="noopener noreferrer">HackerEarth</a></li>
                <li><a href="https://devpost.com/hackathons" target="_blank" rel="noopener noreferrer">Devpost</a></li>
                <li><a href="https://dorahacks.io/hackathon" target="_blank" rel="noopener noreferrer">DoraHacks</a></li>
                <li><a href="https://earn.superteam.fun/" target="_blank" rel="noopener noreferrer">Superteam Earn</a></li>
                <li><a href="https://www.hackquest.io/hackathons" target="_blank" rel="noopener noreferrer">HackQuest</a></li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h3>Resources</h3>
              <ul>
                <li><a href="https://devpost.com/software/built-with/hackathon" target="_blank" rel="noopener noreferrer">Project Showcase</a></li>
                <li><a href="https://devpost.com/guides" target="_blank" rel="noopener noreferrer">Hackathon Guides</a></li>
                <li><a href="https://hackerearth.com/blog/" target="_blank" rel="noopener noreferrer">Developer Blog</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-social">
            <h3>Connect With Us</h3>
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-discord"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} HackathonHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 