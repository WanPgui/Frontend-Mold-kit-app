import { useState, useEffect } from 'react'
import { CheckCircle, XCircle, AlertCircle, X } from 'lucide-react'

const Toast = ({ message, type = 'success', duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onClose, 300)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  const getIcon = () => {
    switch (type) {
      case 'success': return <CheckCircle size={20} />
      case 'error': return <XCircle size={20} />
      case 'warning': return <AlertCircle size={20} />
      default: return <CheckCircle size={20} />
    }
  }

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(onClose, 300)
  }

  return (
    <div className={`toast toast-${type} ${isVisible ? 'toast-show' : 'toast-hide'}`}>
      <div className="toast-content">
        <div className="toast-icon">{getIcon()}</div>
        <span className="toast-message">{message}</span>
        <button onClick={handleClose} className="toast-close">
          <X size={16} />
        </button>
      </div>

      <style jsx>{`
        .toast {
          position: fixed;
          top: 120px;
          right: 20px;
          background: white;
          border-radius: 8px;
          padding: 1rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          z-index: 1000;
          min-width: 300px;
          max-width: 500px;
          transition: all 0.3s ease;
        }

        .toast-show {
          opacity: 1;
          transform: translateX(0);
        }

        .toast-hide {
          opacity: 0;
          transform: translateX(100%);
        }

        .toast-content {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .toast-icon {
          flex-shrink: 0;
        }

        .toast-success {
          border-left: 4px solid #10B981;
        }

        .toast-success .toast-icon {
          color: #10B981;
        }

        .toast-error {
          border-left: 4px solid #EF4444;
        }

        .toast-error .toast-icon {
          color: #EF4444;
        }

        .toast-warning {
          border-left: 4px solid #F59E0B;
        }

        .toast-warning .toast-icon {
          color: #F59E0B;
        }

        .toast-message {
          flex: 1;
          color: #1F2937;
          font-weight: 500;
        }

        .toast-close {
          background: none;
          border: none;
          cursor: pointer;
          color: #6B7280;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .toast-close:hover {
          color: #374151;
        }

        @media (max-width: 768px) {
          .toast {
            right: 10px;
            left: 10px;
            min-width: auto;
          }
        }
      `}</style>
    </div>
  )
}

export default Toast