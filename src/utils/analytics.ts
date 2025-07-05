// Google Analytics configuration and tracking utilities

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Google Analytics Measurement ID - Replace with your actual GA4 ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 ID

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && !window.gtag) {
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
      page_title: title || document.title,
    });
  }
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  trackEvent('form_submit', 'engagement', formName);
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent('button_click', 'engagement', `${buttonName}${location ? `_${location}` : ''}`);
};

// Track registration attempts
export const trackRegistrationAttempt = (source: string) => {
  trackEvent('registration_attempt', 'conversion', source);
};

// Track video plays
export const trackVideoPlay = (videoName: string) => {
  trackEvent('video_play', 'engagement', videoName);
};

// Track social media clicks
export const trackSocialClick = (platform: string) => {
  trackEvent('social_click', 'engagement', platform);
};

// Track scroll depth
export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll_depth', 'engagement', `${depth}%`);
};

// Track time on page
export const trackTimeOnPage = (seconds: number) => {
  trackEvent('time_on_page', 'engagement', `${Math.round(seconds)}s`);
};

// Enhanced ecommerce tracking for registration
export const trackRegistration = (registrationData: {
  value: number;
  currency: string;
  registrationType: string;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'purchase', {
      transaction_id: `reg_${Date.now()}`,
      value: registrationData.value,
      currency: registrationData.currency,
      items: [
        {
          item_id: 'forum_registration',
          item_name: 'III Foro Panamericano de Jóvenes Políticos',
          item_category: registrationData.registrationType,
          price: registrationData.value,
          quantity: 1,
        },
      ],
    });
  }
};

// Track language changes
export const trackLanguageChange = (language: string) => {
  trackEvent('language_change', 'preferences', language);
};

// Track search queries (if applicable)
export const trackSearch = (query: string) => {
  trackEvent('search', 'engagement', query);
};

// Track external link clicks
export const trackExternalLink = (url: string) => {
  trackEvent('external_link_click', 'engagement', url);
};

// Track download events
export const trackDownload = (fileName: string) => {
  trackEvent('file_download', 'engagement', fileName);
};

// Track error events
export const trackError = (errorMessage: string, errorCode?: string) => {
  trackEvent('error', 'error', `${errorMessage}${errorCode ? `_${errorCode}` : ''}`);
};

// Track performance metrics
export const trackPerformance = (metric: string, value: number) => {
  trackEvent('performance', 'metrics', metric, value);
};

// Initialize analytics when the app loads
if (typeof window !== 'undefined') {
  // Initialize GA on page load
  initGA();
  
  // Track initial page view
  trackPageView(window.location.pathname);
  
  // Track scroll depth
  let maxScrollDepth = 0;
  window.addEventListener('scroll', () => {
    const scrollPercent = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );
    
    if (scrollPercent > maxScrollDepth) {
      maxScrollDepth = scrollPercent;
      
      // Track at 25%, 50%, 75%, and 100%
      if ([25, 50, 75, 100].includes(scrollPercent)) {
        trackScrollDepth(scrollPercent);
      }
    }
  });
  
  // Track time on page
  let startTime = Date.now();
  window.addEventListener('beforeunload', () => {
    const timeOnPage = (Date.now() - startTime) / 1000;
    trackTimeOnPage(timeOnPage);
  });
} 