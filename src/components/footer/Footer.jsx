import React from 'react';

/**
 * Creates footer component
 * @returns { HTMLElement }
 */
const Footer = () => {
  const year= new Date().getFullYear()
  return (
    <footer className="footer">
      <p className="footer-text">Copyright {year} Argent Bank</p>
    </footer>
  )
}

export default Footer