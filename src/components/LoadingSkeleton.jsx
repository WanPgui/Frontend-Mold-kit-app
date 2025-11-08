const LoadingSkeleton = ({ type = 'card', count = 1 }) => {
  const skeletons = Array.from({ length: count }, (_, i) => (
    <div key={i} className={`skeleton skeleton-${type}`}>
      {type === 'card' && (
        <>
          <div className="skeleton-header"></div>
          <div className="skeleton-line"></div>
          <div className="skeleton-line short"></div>
        </>
      )}
      {type === 'text' && <div className="skeleton-line"></div>}
      {type === 'image' && <div className="skeleton-image"></div>}
    </div>
  ))

  return (
    <>
      {skeletons}
      <style jsx>{`
        .skeleton {
          background: #f3f4f6;
          border-radius: 8px;
          padding: 1rem;
          margin-bottom: 1rem;
          animation: pulse 2s infinite;
        }

        .skeleton-card {
          height: 200px;
        }

        .skeleton-header {
          height: 20px;
          background: #e5e7eb;
          border-radius: 4px;
          margin-bottom: 1rem;
          width: 60%;
        }

        .skeleton-line {
          height: 16px;
          background: #e5e7eb;
          border-radius: 4px;
          margin-bottom: 0.5rem;
        }

        .skeleton-line.short {
          width: 40%;
        }

        .skeleton-image {
          height: 200px;
          background: #e5e7eb;
          border-radius: 8px;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </>
  )
}

export default LoadingSkeleton