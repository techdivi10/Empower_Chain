import React from 'react';
import './MicroinsurancePolicyPage.css'; // Import the CSS file for styling

const MicroinsurancePolicyPage = () => {
  return (
    <div className="policy-page">
      <header className="header">
        <div className="logo">Empower Chain</div>
        
      </header>

      <section className="hero-section">
        <img src="https://img.freepik.com/premium-vector/modern-colorful-dark-green-wide-banner-background-abstract-background-banner-design-web-banner-texture-header-website-vector-abstract-graphic-design-banner-pattern-background-template_181182-17980.jpg?w=740" alt="Hero" className="hero-image" />
        <div className="hero-content">
          <h1>Protect What Matters Most with Microinsurance</h1>
          <p>Affordable and accessible coverage for everyone</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      <section className="policy-options">
        <h2>Our Microinsurance Plans</h2>
        <p>Select the plan that fits your needs</p>

        <div className="policy-card">
          {/* <img src="https://img.freepik.com/free-vector/insurance-concept-illustration_114360-22792.jpg?t=st=1722523911~exp=1722527511~hmac=cf67336c12d4707d840b6344affaa94da60b0fc978b6a6a85efb017fcb255f10&w=740" alt="Basic Coverage" className="policy-icon" /> */}
          <h3>Basic Coverage</h3>
          <p>Essential coverage for everyday needs. Provides protection against specific risks.</p>
          <p><strong>Premium:</strong> $5 per month</p>
          <p><strong>Coverage Limits:</strong> Up to $2000</p>
          <button className="cta-button">View Details</button>
        </div>

        <div className="policy-card">
          {/* <img src="https://img.freepik.com/free-vector/insurance-concept-illustration_114360-22792.jpg?t=st=1722523911~exp=1722527511~hmac=cf67336c12d4707d840b6344affaa94da60b0fc978b6a6a85efb017fcb255f10&w=740" alt="Standard Coverage" className="policy-icon" /> */}
          <h3>Standard Coverage</h3>
          <p>Comprehensive coverage with added benefits. Includes protection against specific risks.</p>
          <p><strong>Premium:</strong> $10 per month</p>
          <p><strong>Coverage Limits:</strong> Up to $10,000</p>
          <button className="cta-button">View Details</button>
        </div>

        <div className="policy-card">
          {/* <img src="https://img.freepik.com/free-vector/insurance-concept-illustration_114360-22792.jpg?t=st=1722523911~exp=1722527511~hmac=cf67336c12d4707d840b6344affaa94da60b0fc978b6a6a85efb017fcb255f10&w=740" alt="Premium Coverage" className="policy-icon" /> */}
          <h3>Premium Coverage</h3>
          <p>Extensive coverage with full protection. Covers specific risks and offers additional benefits.</p>
          <p><strong>Premium:</strong> $15 per month</p>
          <p><strong>Coverage Limits:</strong> Up to $20,000</p>
          <button className="cta-button">View Details</button>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial">
          <p>“This microinsurance policy gave me peace of mind knowing that I’m covered even with a tight budget.”</p>
          <p><strong>- Jane Doe</strong></p>
        </div>
        <div className="testimonial">
          <p>“Affordable and reliable. I can focus on my family without worrying about financial setbacks.”</p>
          <p><strong>- John Smith</strong></p>
        </div>
      </section>

      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>What is microinsurance?</h3>
          <p>Microinsurance is a type of insurance designed to be affordable and accessible to low-income individuals or communities, often in developing countries. It aims to provide financial protection against specific risks and unforeseen events, typically with lower premiums and coverage amounts compared to traditional insurance products.</p>
        </div>
        <div className="faq-item">
          <h3>How do I choose the right policy?</h3>
          <p>
          1. Assess Your Needs: Identify what risks you need coverage for and your budget.</p>
         <p> 2. Compare Coverage Options: Check coverage limits, types of risks covered, and exclusions.</p>
         <p> 3. Evaluate Premium Costs: Ensure the premium fits within your budget.</p>
          <p>4. Review Provider Reputation: Choose a provider with good financial stability and customer service.</p>
        <p>  5. Read the Fine Print: Understand the policy terms, conditions, and exclusions before committing.
          </p>
        </div>
       
      </section>

      <footer className="footer">
        <div className="contact-info">
          <p>Address: Your Company Address</p>
          <p>Phone: Your Company Phone Number</p>
          <p>Email: Your Company Email</p>
        </div>
        
        <div className="legal-links">
          <a href="#">Terms and Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default MicroinsurancePolicyPage;
