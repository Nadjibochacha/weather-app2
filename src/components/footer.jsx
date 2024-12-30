import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer style={footerStyle} className='bg-transparent'>
      <p>&copy; {currentYear} <a href="https://nadjib-chacha.netlify.app/" className='text-black underline'>MED DEV</a>. All rights reserved.</p>
    </footer>
  );
};

// Inline styles for basic footer styling
const footerStyle = {
  textAlign: 'center',
  padding: '1rem',
  color: '#333',
  width: '100%',
};

export default Footer;
