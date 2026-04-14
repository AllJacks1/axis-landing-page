import React from "react";
import "../styles/ServicesSection.css";

const services = [
  {
    number: "1️⃣",
    title: "Social Media Management",
    description: "Strategic content planning and engagement.",
  },
  {
    number: "2️⃣",
    title: "Branding & Design",
    description: "Logos, visuals, and brand identity systems.",
  },
  {
    number: "3️⃣",
    title: "Paid Advertising",
    description: "Conversion-driven ad campaigns.",
  },
  {
    number: "4️⃣",
    title: "Photo & Video Production",
    description: "Scroll-stopping visuals.",
  },
  {
    number: "5️⃣",
    title: "Marketing Strategy",
    description: "Data-driven growth direction.",
  },
  {
    number: "6️⃣",
    title: "Marketing Consulting",
    description: "Expert guidance and campaign planning.",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        {/* Section Header */}
        <div className="services-header">
          <span className="services-tagline">What We Offer</span>
          <h2 className="services-headline">
            Our <span className="text-accent">Marketing Solutions</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-number">{service.number}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-arrow">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
