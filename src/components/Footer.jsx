const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <span>MoldKit - AI Mold Detection</span>
          <div className="footer-links">
            <a href="/">Home</a>
            <a href="/analyze">Predict</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/dashboard">Dashboard</a>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="https://mold-kit.onrender.com/docs" target="_blank" rel="noopener noreferrer">Docs</a>
          </div>
          <span>&copy; 2025 MoldKit</span>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #1F2937;
          color: white;
          padding: 0.75rem 0;
          margin-top: auto;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.875rem;
        }

        .footer-links {
          display: flex;
          gap: 1.5rem;
        }

        .footer-links a {
          color: #D1D5DB;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: #166534;
        }

        .footer-content > span {
          color: #9CA3AF;
        }

        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            gap: 0.5rem;
            text-align: center;
          }

          .footer-links {
            gap: 1rem;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer