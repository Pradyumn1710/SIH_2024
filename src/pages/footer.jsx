import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#061518",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
  };

  return (
    <footer style={footerStyle}>
      <div>
        <p>&copy; {new Date().getFullYear()} Navics. All rights reserved.</p>
        {/* <p>Follow us on:</p> */}
       
      </div>
    </footer>
  );
};

export default Footer;