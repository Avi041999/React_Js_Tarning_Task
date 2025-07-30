import React from 'react'

const Footer = () => {
  return (
    <div style={{
      backgroundColor: "#030202ff",
      padding: "20px 0",
      textAlign: "center",
      borderTop: "1px solid #ddd",
      marginTop: "50px"
    }}>
      <p style={{ margin: 0, fontSize: "14px", color: "white" }}>
        &copy; {new Date().getFullYear()} Bhasaka Technologies. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;

