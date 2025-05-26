import React from "react";

export default function About() {
  return (
    <section className="about-section">
      <div className="container">
        <h2>About Hackathon Platforms</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hackathons are intensive events where developers, designers, and entrepreneurs 
              collaborate to create innovative solutions within a limited timeframe. Finding 
              the right platform to host or participate in hackathons is crucial for success.
            </p>
            <p>
              Our platform aggregates the best hackathon websites, making it easy for you to 
              discover opportunities that match your interests, skill level, and goals. Whether 
              you're looking to showcase your skills, build your portfolio, or connect with 
              like-minded innovators, we've got you covered.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <h3>5+</h3>
              <p>Major Platforms</p>
            </div>
            <div className="stat-item">
              <h3>1000+</h3>
              <p>Active Hackathons</p>
            </div>
            <div className="stat-item">
              <h3>$1M+</h3>
              <p>In Prizes</p>
            </div>
            <div className="stat-item">
              <h3>50K+</h3>
              <p>Global Participants</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 