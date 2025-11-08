// Google Analytics event tracking
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, parameters)
  }
}

// Track page views
export const trackPageView = (pagePath, pageTitle) => {
  if (typeof gtag !== 'undefined') {
    gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: pagePath,
      page_title: pageTitle
    })
  }
}

// Track mold prediction events
export const trackPrediction = (prediction, confidence, riskLevel) => {
  trackEvent('mold_prediction', {
    prediction_result: prediction,
    confidence_score: Math.round(confidence * 100),
    risk_level: riskLevel
  })
}

// Track image uploads
export const trackImageUpload = (fileSize, fileType) => {
  trackEvent('image_upload', {
    file_size: fileSize,
    file_type: fileType
  })
}

// Track user engagement
export const trackEngagement = (action, section) => {
  trackEvent('user_engagement', {
    action: action,
    section: section
  })
}