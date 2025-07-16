'use client';

import { useEffect } from 'react';

export function BuyMeACoffee() {
  useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute('data-name', 'BMC-Widget');
    script.src = 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js';
    script.setAttribute('data-id', 'sloorjuice');
    script.setAttribute('data-description', 'Support Me!');
    script.setAttribute('data-message', '');
    script.setAttribute('data-color', '#B57EDC');
    script.setAttribute('data-position', 'Right');
    script.setAttribute('data-x_margin', '18');
    script.setAttribute('data-y_margin', '90'); // Higher than footer
    script.async = true;

    script.onload = function () {
      const event = new CustomEvent('DOMContentLoaded', {
        bubbles: true,
        cancelable: true,
      });
      window.dispatchEvent(event);
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
      const widget = document.getElementById('bmc-wbtn');
      if (widget) {
        document.body.removeChild(widget);
      }
    };
  }, []);

  // Glassmorphism overlay for the widget
  return (
    <style>
      {`
        #bmc-wbtn {
          background: linear-gradient(120deg, rgba(181,126,220,0.65) 60%, rgba(230,230,250,0.35) 100%) !important;
          backdrop-filter: blur(18px) !important;
          -webkit-backdrop-filter: blur(18px) !important;
          border: 1.5px solid rgba(255,255,255,0.18) !important;
          box-shadow: 0 8px 32px 0 rgba(140,120,200,0.18) !important;
          border-radius: 1rem !important;
        }
      `}
    </style>
  );
}