import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Microscope, LogOut } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import AuthModal from './AuthModal'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [authModal, setAuthModal] = useState({ isOpen: false, mode: 'login' })
  const location = useLocation()
  const { isAuthenticated, logout, user } = useAuth()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="nav-brand" aria-label="MoldKit Home">
            <Microscope className="nav-icon" aria-hidden="true" />
            <span>Mold-Kit</span>
          </Link>

          <div className="nav-center">
            <div className={`nav-links ${isOpen ? 'nav-open' : ''}`}>
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
              title="AI-powered mold detection landing page"
            >
              Home
            </Link>
            <Link 
              to="/analyze" 
              className={`nav-link ${isActive('/analyze') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
              title="Upload images for mold detection analysis"
            >
              Predict
            </Link>
            <Link 
              to="/results" 
              className={`nav-link ${isActive('/results') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
              title="View analysis history and statistics"
            >
              Results
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
              title="API features and technical specifications"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
              title="Support, feedback and FAQ"
            >
              Contact
            </Link>
            <Link 
              to="/dashboard" 
              className={`nav-link ${isActive('/dashboard') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
              title="API status and endpoint monitoring"
            >
              Dashboard
            </Link>
            </div>
          </div>

          <div className="nav-auth">
            {isAuthenticated ? (
              <>
                <span className="user-name">Hi, {user?.name}</span>
                <button onClick={logout} className="btn btn-secondary nav-logout">
                  <LogOut size={16} />
                  Logout
                </button>
              </>
            ) : (
              <>
                <button 
                  onClick={() => setAuthModal({ isOpen: true, mode: 'login' })}
                  className="nav-link"
                >
                  Login
                </button>
                <button 
                  onClick={() => setAuthModal({ isOpen: true, mode: 'signup' })}
                  className="btn btn-primary nav-signup"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>

          <button 
            className="nav-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <AuthModal 
        isOpen={authModal.isOpen}
        onClose={() => setAuthModal({ isOpen: false, mode: 'login' })}
        initialMode={authModal.mode}
      />

      <style jsx>{`
        .navbar {
          background: white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
        }

        .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 0;
        }

        .nav-center {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-auth {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .nav-signup {
          padding: 8px 16px;
          font-size: 0.875rem;
        }

        .nav-logout {
          padding: 8px 16px;
          font-size: 0.875rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .user-name {
          color: #166534;
          font-weight: 500;
          font-size: 0.875rem;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: #166534;
          font-weight: 700;
          font-size: 1.5rem;
          transition: all 0.3s ease;
        }

        .nav-brand:hover {
          transform: scale(1.05);
        }

        .nav-brand:hover .nav-icon {
          transform: rotate(10deg);
        }

        .nav-icon {
          color: #166534;
          width: 32px;
          height: 32px;
          transition: transform 0.3s ease;
        }



        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-link {
          text-decoration: none;
          color: #6B7280;
          font-weight: 500;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          padding: 8px 16px;
          border-radius: 8px;
        }

        .nav-link:hover {
          color: #166534;
          background: rgba(22, 101, 52, 0.1);
          transform: translateY(-2px);
        }

        .nav-link.active {
          color: #166534;
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 2px;
          background: #166534;
          border-radius: 1px;
        }

        .nav-actions {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .nav-action {
          display: flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
          color: #6B7280;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav-action:hover {
          color: #166534;
        }

        .nav-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: #6B7280;
        }

        @media (max-width: 768px) {
          .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            width: 280px;
            height: 100vh;
            background: white;
            flex-direction: column;
            justify-content: flex-start;
            padding: 5rem 2rem 2rem;
            box-shadow: -2px 0 10px rgba(0,0,0,0.1);
            transition: right 0.3s ease;
          }

          .nav-links.nav-open {
            right: 0;
          }

          .nav-auth {
            display: none;
          }

          .nav-toggle {
            display: block;
          }
        }
      `}</style>
    </nav>
  )
}

export default Navbar