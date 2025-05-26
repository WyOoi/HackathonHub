import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "What is a hackathon?",
    answer: "A hackathon is an event, typically lasting between 24 and 72 hours, where programmers, designers, and project managers collaborate intensively to create software or hardware projects from scratch. Hackathons often have specific themes, challenges, or prizes to guide participants' efforts."
  },
  {
    question: "How do I choose the right hackathon platform?",
    answer: "Consider your goals, experience level, and interests. If you're looking for career opportunities, platforms like HackerEarth or Devpost might be ideal. For blockchain projects, DoraHacks could be more suitable. For crypto bounties, check Superteam Earn. HackQuest is great for project management and team collaboration."
  },
  {
    question: "Do I need to be an experienced developer to participate?",
    answer: "Not necessarily! Many hackathons welcome beginners and have tracks specifically for newcomers. Teams often need people with various skills including design, marketing, and project management. Look for hackathons labeled as 'beginner-friendly' on platforms like Devpost or HackerEarth."
  },
  {
    question: "Are hackathons only virtual or can I attend in-person events?",
    answer: "Both options exist! Many platforms offer both virtual and in-person hackathons. Virtual events became more common during the pandemic, but in-person hackathons are making a strong comeback. Platforms like Devpost and HackerEarth list both types of events."
  },
  {
    question: "How can I host my own hackathon?",
    answer: "Most platforms like HackerEarth, Devpost, and HackQuest offer services for organizing and hosting hackathons. They provide tools for participant registration, submission management, judging, and more. Reach out to their sales or support teams for details on hosting options."
  }
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqItems.map((item, index) => (
            <div 
              className={`faq-item ${activeIndex === index ? "active" : ""}`} 
              key={index}
            >
              <div className="faq-question" onClick={() => toggleFaq(index)}>
                <h3>{item.question}</h3>
                <span className="faq-toggle">
                  <i className="fas fa-plus"></i>
                </span>
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 