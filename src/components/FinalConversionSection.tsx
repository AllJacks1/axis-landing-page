import React from "react";
import "../styles/FinalConversionSection.css";

const FinalConversionSection: React.FC = () => {
  return (
    <section className="final-conversion-section">
      <div className="final-conversion-container">
        {/* Tagline */}
        <span className="final-conversion-tagline">
          Strong emotional close.
        </span>

        {/* Headline */}
        <h2 className="final-conversion-headline">
          Stop Blending In.
          <br />
          <span className="text-accent">Start Standing Out.</span>
        </h2>

        {/* Supporting Copy */}
        <div className="final-conversion-copy">
          <p>Your competitors are already capturing attention.</p>
          <p>Make sure your brand is the one customers remember.</p>
        </div>

        {/* CTA Button */}
        <button className="final-conversion-cta">
          Book Free Marketing Audit
        </button>
      </div>
    </section>
  );
};

export default FinalConversionSection;
