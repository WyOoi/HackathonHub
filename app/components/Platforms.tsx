import React from "react";

interface PlatformData {
  name: string;
  url: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
}

const platforms: PlatformData[] = [
  {
    name: "HackerEarth",
    url: "https://www.hackerearth.com/recruit/hackathons/",
    description: "HackerEarth's online hackathon platform enables organizations to get in front of 7.6 million qualified developers, or engage developers internally, with minimal bandwidth drain.",
    icon: "fa-laptop-code",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    features: ["Global hackathons", "Hiring challenges", "Internal hackathons", "Dedicated process management"]
  },
  {
    name: "Devpost",
    url: "https://devpost.com/hackathons",
    description: "Join the world's best online and in-person hackathons. Participate in public hackathons or access your company's private hackathons through Devpost.",
    icon: "fa-code",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    features: ["Browse hackathons", "Explore projects", "Host a hackathon", "Build portfolio"]
  },
  {
    name: "DoraHacks",
    url: "https://dorahacks.io/hackathon",
    description: "DoraHacks is a global hackathon organizer and one of the world's most active multi-chain developer communities, with rich experience in organizing high-quality developer events.",
    icon: "fa-rocket",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    features: ["Blockchain focused", "Grant programs", "Bounty programs", "Community driven"]
  },
  {
    name: "Superteam Earn",
    url: "https://earn.superteam.fun/",
    description: "Find your next high-paying crypto gig. Participate in bounties or apply to freelance gigs of world-class crypto companies, all with a single profile.",
    icon: "fa-coins",
    image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    features: ["Bounties", "Projects", "Grants", "High-quality work"]
  },
  {
    name: "HackQuest",
    url: "https://www.hackquest.io/hackathons",
    description: "Explore hackathons and manage projects, invite teammates, and track your hackathon journey with ease—all in one place.",
    icon: "fa-trophy",
    image: "https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    features: ["Project management", "Team formation", "Prize tracking", "Tech stack focus"]
  }
];

export default function Platforms() {
  return (
    <section className="platforms-section">
      <div className="container">
        <h2>Top Hackathon Platforms</h2>
        <div className="platform-cards">
          {platforms.map((platform, index) => (
            <div className="platform-card" key={index}>
              <div 
                className="platform-image" 
                style={{ backgroundImage: `url(${platform.image})` }}
              ></div>
              <div className="platform-details">
                <h3>
                  <i className={`fas ${platform.icon}`}></i> {platform.name}
                </h3>
                <p>{platform.description}</p>
                <div className="platform-features">
                  <ul>
                    {platform.features.map((feature, i) => (
                      <li key={i}><i className="fas fa-check"></i> {feature}</li>
                    ))}
                  </ul>
                </div>
                <a 
                  href={platform.url} 
                  className="platform-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Visit Platform <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 