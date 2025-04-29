"use client";

export default function Footer() {
    return (
      <footer 
        style={{ 
          backgroundColor: "var(--brand-color)", 
          position: "fixed", 
          bottom: 0, 
          width: "100%",
          zIndex: 50 // Ensure the footer is always on top
        }} 
        className="py-3 text-center text-white"
      >
          <p>&copy; 2025 Anthony Reynolds. All rights reserved.</p>
      </footer>
    );
}