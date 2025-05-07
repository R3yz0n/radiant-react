import React from "react";
import "./Partners.css";

const Partners = () => {
  const partners = [
    {
      name: "Microsoft",
      logo: "/microsoft-logo.png",
    },
    {
      name: "LinkedIn",
      logo: "/linkedin-logo.png",
    },
    {
      name: "Google",
      logo: "/google-logo.png",
    },
    {
      name: "VectorEdu",
      logo: "/vector-logo.png",
    },
  ];

  return (
    <section className="partners-section">
      <h2>Trusted by the best</h2>
      <div className="partners-grid">
        {partners.map((partner, index) => (
          <div key={index} className="partner-card">
            <img src={partner.logo} alt={partner.name} />
            <span>{partner.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
