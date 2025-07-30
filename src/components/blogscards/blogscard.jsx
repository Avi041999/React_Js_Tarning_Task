const Blogs = ({ data }) => {
    return (
        <>
            <div id="projects" style={{
                background: "linear-gradient(to right, #e0eafc, #cfdef3)",
                minHeight: "100vh",
                paddingBottom: "40px"
            }}>
                <h1 style={{
                    paddingLeft: "20px",
                    marginTop: "20px",
                    textAlign: "center",
                    color: "#333",
                    fontSize: "2.2rem"
                }}>
                    Professional Experience
                </h1>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "20px",
                    padding: "30px 20px",
                }}>
                    {data.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                border: "1px solid #ccc",
                                borderRadius: "12px",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
                                overflow: "hidden",
                                backgroundColor: "#fff",
                                display: "flex",
                                flexDirection: "column",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                cursor: "pointer"
                            }}
                            onMouseOver={e => {
                                e.currentTarget.style.transform = "scale(1.03)";
                                e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.25)";
                            }}
                            onMouseOut={e => {
                                e.currentTarget.style.transform = "scale(1)";
                                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.15)";
                            }}
                        >
                            <img
                                src={item.images}
                                alt={item.altText}
                                style={{
                                    width: "100%",
                                    height: "220px",
                                    objectFit: "contain",
                                    backgroundColor: "#f9f9f9"
                                }}
                            />
                            <div style={{ padding: "16px" }}>
                                <h3 style={{
                                    margin: "0 0 10px",
                                    color: "#222"
                                }}>
                                    {item.title}
                                </h3>
                                <p style={{ margin: 0, color: "#555" }}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Blogs;
