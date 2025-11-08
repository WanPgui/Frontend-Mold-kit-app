import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="container">
        <div className="not-found-content">
          <div className="error-code">404</div>
          <h1>Page Not Found</h1>
          <p>The page you're looking for doesn't exist or has been moved.</p>
          <div className="not-found-actions">
            <Link to="/" className="btn btn-primary">
              <Home size={18} />
              Go Home
            </Link>
            <button onClick={() => window.history.back()} className="btn btn-secondary">
              <ArrowLeft size={18} />
              Go Back
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .not-found {
          padding: 15rem 0 6rem 0;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .not-found-content {
          max-width: 500px;
        }

        .error-code {
          font-size: 8rem;
          font-weight: 900;
          color: #166534;
          line-height: 1;
          margin-bottom: 1rem;
        }

        .not-found h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #1F2937;
        }

        .not-found p {
          font-size: 1.125rem;
          color: #6B7280;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .not-found-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-secondary {
          background: #6B7280;
          color: white;
        }

        .btn-secondary:hover {
          background: #4B5563;
        }

        @media (max-width: 768px) {
          .error-code {
            font-size: 6rem;
          }

          .not-found h1 {
            font-size: 2rem;
          }

          .not-found-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  )
}

export default NotFound