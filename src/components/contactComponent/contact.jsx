export default function Contact() {
  return (
    <div id="contact" style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      padding: "40px 60px",
      fontFamily: "Arial, sans-serif",
      flexWrap: "wrap",
      backgroundColor: "#f9f9f9"
    }}>
      
      {/* Contact Form Section */}
      <form style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        flex: "1",
        minWidth: "300px",
        maxWidth: "500px",
        backgroundColor: "#fff",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)"
      }}>
        <h2 style={{ color: "#333", marginBottom: "10px" }}>Contact Me</h2>
        <input type="text" placeholder="Your Name" required style={inputStyle} />
        <input type="email" placeholder="Your Email" required style={inputStyle} />
        <textarea placeholder="Your Message" rows="5" required style={{ ...inputStyle, resize: "vertical" }} />
        <button type="submit" style={buttonStyle}>Send Message</button>
      </form>

      {/* Social Media Section */}
      <div style={{
        flex: "1",
        minWidth: "280px",
        marginLeft: "40px",
        marginTop: "20px",
        backgroundColor: "#fff",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)"
      }}>
        <h3 style={{ marginBottom: "15px", color: "#444" }}>Connect with Me</h3>
        <p style={{ fontSize: "0.95rem", color: "#555", marginBottom: "20px", lineHeight: "1.6" }}>
          Bhasaka Technologies is always open to collaboration, freelance opportunities, or just a tech talk. Reach out via the form or connect with me on any of these platforms.
        </p>
        <div style={{ display: "flex", gap: "20px", marginBottom: "10px" }}>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" style={iconStyle} />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" style={iconStyle} />
          </a>
          <a href="mailto:someone@example.com">
            <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" style={iconStyle} />
          </a>
        </div>
        <p style={{ fontSize: "0.85rem", color: "#888", textAlign: "right" }}>
          Based in India | Available remotely 🌍
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: "10px",
  fontSize: "16px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  outline: "none"
};

const buttonStyle = {
  padding: "12px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontWeight: "bold"
};

const iconStyle = {
  height: "40px",
  width: "40px",
  cursor: "pointer"
};
