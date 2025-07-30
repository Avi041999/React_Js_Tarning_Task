const Navbar = () => {
    return (
        <div style={{
            height: "80px",
            backgroundColor: "black",
            width: "100%",
            display: "flex",
            alignItems: "center",
            padding: "0 20px",              // Padding inside the navbar
            boxSizing: "border-box",        // Ensures padding doesn't increase width
            overflowX: "hidden"             // Prevents horizontal scroll
        }}>
            <div>
                <img
                    src="https://i.pinimg.com/736x/23/fe/d6/23fed6ce44b9b72d8758531dfe28cc01.jpg"
                    alt="Profile-Logo"
                    style={{
                        height: "60px",
                        width: "60px",
                        borderRadius: "50%",
                        border: "2px solid white"
                    }}
                />
            </div>

            <ul style={{
                listStyle: "none",
                display: "flex",
                gap: "20px",
                margin: 0,
                padding: 0,
                marginLeft: "auto"
            }}>
                <li><a href="#home" style={linkStyle}>HOME</a></li>
                <li><a href="#about" style={linkStyle}>ABOUT</a></li>
                <li><a href="#projects" style={linkStyle}>PROJECT</a></li>
                <li><a href="#contact" style={linkStyle}>CONTACT</a></li>
            </ul>
        </div>
    );
};

const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "16px",
};

export default Navbar;
