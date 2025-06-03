// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f5f5f5' }}>
      <p>&copy;{new Date().getFullYear()} David Blanco. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
