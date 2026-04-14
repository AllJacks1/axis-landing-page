import React from "react";
import "../styles/ProcessSection.css";

const steps = [
  {
    step: "01",
    title: "Marketing Audit",
    description: "We analyze your brand, audience, and marketing gaps.",
  },
  {
    step: "02",
    title: "Strategic Execution",
    description: "Content, ads, and campaigns aligned with your goals.",
  },
  {
    step: "03",
    title: "Growth Optimization",
    description: "We refine strategies and scale results.",
  },
];

const ProcessSection: React.FC = () => {
  return (
    <section className="process-section">
      <div className="process-container">
        {/* Section Header */}
        <div className="process-header">
          <span className="process-tagline">How It Works</span>
          <h2 className="process-headline">
            How We Turn <span className="text-accent">Vision Into Results</span>
          </h2>
        </div>

        {/* Process Steps */}
        <div className="process-steps">
          {steps.map((item, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{item.step}</div>
              <div className="step-content">
                <h3 className="step-title">{item.title}</h3>
                <p className="step-description">{item.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="step-connector">
                  <div className="step-connector-line"></div>
                  <div className="step-connector-arrow">→</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
