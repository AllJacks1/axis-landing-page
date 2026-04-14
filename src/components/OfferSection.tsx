import React from "react";
import "../styles/OfferSection.css";

const offerBenefits = [
  "Brand audit",
  "Content strategy review",
  "Growth opportunities",
  "Competitor analysis",
];

const OfferSection: React.FC = () => {
  return (
    <section className="offer-section">
      <div className="offer-container">

        {/* Headline */}
        <h2 className="offer-headline">
          Get a Free <span className="text-accent">1-Hour Marketing Audit</span>
        </h2>

        {/* Benefits List */}
        <div className="offer-content">
          <p className="offer-subhead">What you get:</p>
          <ul className="offer-list">
            {offerBenefits.map((benefit, index) => (
              <li key={index} className="offer-item">
                <span className="offer-check">✔</span>
                <span className="offer-text">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <button className="offer-cta">Book Free Audit</button>
      </div>
    </section>
  );
};

export default OfferSection;
