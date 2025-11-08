const TermsOfService = () => {
  return (
    <div className="terms-of-service">
      <div className="container">
        <div className="terms-header">
          <h1>Terms of Service</h1>
          <p>Last updated: January 2025</p>
        </div>

        <div className="terms-content">
          <section>
            <h2>Acceptance of Terms</h2>
            <p>By accessing and using MoldKit, you accept and agree to be bound by the terms and provision of this agreement.</p>
          </section>

          <section>
            <h2>Service Description</h2>
            <p>MoldKit provides AI-powered mold detection analysis based on uploaded images and environmental data. Our service is for informational purposes only and should not replace professional inspection.</p>
          </section>

          <section>
            <h2>User Responsibilities</h2>
            <ul>
              <li>Provide accurate information and images</li>
              <li>Use the service for legitimate purposes only</li>
              <li>Not attempt to reverse engineer our AI models</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2>Limitations of Liability</h2>
            <p>MoldKit provides analysis for informational purposes only. We are not liable for any decisions made based on our analysis. Always consult qualified professionals for serious mold concerns.</p>
          </section>

          <section>
            <h2>Intellectual Property</h2>
            <p>All content, features, and functionality of MoldKit are owned by us and are protected by copyright, trademark, and other intellectual property laws.</p>
          </section>

          <section>
            <h2>Termination</h2>
            <p>We may terminate or suspend your access to our service immediately, without prior notice, for any reason whatsoever, including breach of these Terms.</p>
          </section>

          <section>
            <h2>Contact Information</h2>
            <p>For questions about these Terms of Service, please contact us at legal@moldkit.ai</p>
          </section>
        </div>
      </div>

      <style jsx>{`
        .terms-of-service {
          padding: 15rem 0 4rem 0;
          min-height: 100vh;
        }

        .terms-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .terms-header h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #1F2937;
        }

        .terms-header p {
          color: #6B7280;
          font-size: 1rem;
        }

        .terms-content {
          max-width: 800px;
          margin: 0 auto;
          background: white;
          border-radius: 12px;
          padding: 3rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .terms-content section {
          margin-bottom: 2.5rem;
        }

        .terms-content h2 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #166534;
        }

        .terms-content p {
          color: #4B5563;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .terms-content ul {
          color: #4B5563;
          line-height: 1.6;
          padding-left: 1.5rem;
        }

        .terms-content li {
          margin-bottom: 0.5rem;
        }

        @media (max-width: 768px) {
          .terms-content {
            padding: 2rem;
            margin: 0 1rem;
          }
        }
      `}</style>
    </div>
  )
}

export default TermsOfService