const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <div className="container">
        <div className="policy-header">
          <h1>Privacy Policy</h1>
          <p>Last updated: January 2025</p>
        </div>

        <div className="policy-content">
          <section>
            <h2>Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you use our mold detection service:</p>
            <ul>
              <li>Images you upload for analysis</li>
              <li>Environmental data (location, ventilation, etc.)</li>
              <li>Usage data and analytics</li>
            </ul>
          </section>

          <section>
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide mold detection analysis services</li>
              <li>Improve our AI models and accuracy</li>
              <li>Communicate with you about our services</li>
              <li>Ensure security and prevent fraud</li>
            </ul>
          </section>

          <section>
            <h2>Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          </section>

          <section>
            <h2>Data Retention</h2>
            <p>We retain your data only as long as necessary to provide our services and comply with legal obligations. Images are processed and deleted within 24 hours unless you create an account.</p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at privacy@moldkit.ai</p>
          </section>
        </div>
      </div>

      <style jsx>{`
        .privacy-policy {
          padding: 15rem 0 4rem 0;
          min-height: 100vh;
        }

        .policy-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .policy-header h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #1F2937;
        }

        .policy-header p {
          color: #6B7280;
          font-size: 1rem;
        }

        .policy-content {
          max-width: 800px;
          margin: 0 auto;
          background: white;
          border-radius: 12px;
          padding: 3rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .policy-content section {
          margin-bottom: 2.5rem;
        }

        .policy-content h2 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #166534;
        }

        .policy-content p {
          color: #4B5563;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .policy-content ul {
          color: #4B5563;
          line-height: 1.6;
          padding-left: 1.5rem;
        }

        .policy-content li {
          margin-bottom: 0.5rem;
        }

        @media (max-width: 768px) {
          .policy-content {
            padding: 2rem;
            margin: 0 1rem;
          }
        }
      `}</style>
    </div>
  )
}

export default PrivacyPolicy