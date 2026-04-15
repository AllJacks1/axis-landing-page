import React, { useEffect } from "react";
import { X, Check } from "lucide-react";
import "../styles/ServiceModal.css";

interface Service {
  image: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
}

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  getStartedClicked?: (e: React.MouseEvent) => void;
  service: Service | null;
}

const ServiceModal: React.FC<ServiceModalProps> = ({
  isOpen,
  onClose,
  service,
  getStartedClicked,
}) => {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  return (
    <div className="service-modal-overlay" onClick={onClose}>
      <div className="service-modal" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          className="service-modal__close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* Modal Content */}
        <div className="service-modal__content">
          {/* Image Section */}
          <div className="service-modal__image-wrapper">
            <img
              src={service.image}
              alt={service.title}
              className="service-modal__image"
            />
            <div className="service-modal__image-overlay" />
          </div>

          {/* Text Content */}
          <div className="service-modal__body">
            <h2 className="service-modal__title">{service.title}</h2>

            <p className="service-modal__description">
              {service.fullDescription}
            </p>

            {/* Features List */}
            <div className="service-modal__features">
              <h3 className="service-modal__features-title">What's Included</h3>
              <ul className="service-modal__features-list">
                {service.features.map((feature, index) => (
                  <li key={index} className="service-modal__feature-item">
                    <Check size={18} className="service-modal__feature-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <button className="service-modal__cta" onClick={getStartedClicked}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
