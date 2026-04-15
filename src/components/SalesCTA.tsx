import React from "react";
import "../styles/SalesCTA.css";

const SalesCTA: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="sales-cta" className="sales-cta-section">
      <div className="sales-cta-container">
        <div className="sales-cta-content">
          <h2 className="sales-cta-headline">
            Got leads but struggling to convert them into sales?
          </h2>
          <p className="sales-cta-description">
            We also help businesses build systems that close deals, not just
            generate leads.
          </p>
          <button className="sales-cta-button" onClick={scrollToContact}>
            <span>Check out Avaris Sales Solutions</span>
            <span className="sales-cta-arrow">👉</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SalesCTA;
