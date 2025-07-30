const About = () => {
    return (
        <>
        <div id="about">
            <h2 style={{
                fontWeight: 600,
                color: "red",
                fontSize: "2.5rem",
                textAlign: "center",
                marginBottom: "20px"
            }}>About Me</h2>

            <div style={{
                display: "flex",
                alignItems: "flex-start",
                padding: "0 27px",
                gap: "30px"
            }}>
                {/* Left Column: Image and 1-2 short paragraphs */}
                <div style={{ flex: "1" }}>
                    <img
                        style={{
                            height: "400px",
                            width: "100%",
                            border: "2px dashed blue",
                            borderRadius: "8px",
                            transition: "transform 0.3s ease",
                            cursor: "pointer",
                            backgroundColor:"red"
                        }}
                        src="https://images.dealmaker.nl/dealmaker_profile_photo/53/af/53afa716-9b2e-45b4-8982-aeb46a3ab9e3/profile_photo/profile_photo_large/131037.jpg"
                        alt="Profile_photo"
                        onMouseOver={e => e.currentTarget.style.transform = "scale(1.05)"}
                        onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
                    />

                    
                </div>

                <div style={{ flex: "2", lineHeight: "1.6", fontSize: "1.2rem", textAlign: "justify" }}>
                    
                    <p>
                        In my free time, I explore new tech trends, contribute to open-source projects, and write technical blogs
                        to help others learn. I believe in continuous learning and strive to improve a little every day.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sed ratione consequatur voluptatem praesentium doloremque, maxime adipisci accusantium magni explicabo quia voluptas neque dolore, vitae saepe. Consequuntur deleniti reiciendis hic.
                    </p>
                    <p>
                        I have experience working with Java, AEM, React, and Spring Boot. I'm always eager to take on new challenges
                        and collaborate with passionate individuals.

                         When I'm not coding, you can find me reading books, watching tech documentaries, or sipping coffee while
                        planning my next side project.
                    </p>
                
                    <p>
                        Let's build something amazing together!
                    </p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, voluptate sed asperiores omnis blanditiis fugiat incidunt eveniet...
                    </p>
                </div>
            </div>
            <p style={{ marginTop: "16px", fontSize: "1.2rem", lineHeight: "1.6",textAlign:"justify"}}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores omnis provident ipsam tempora quas eum ex soluta delectus a adipisci nam, eveniet repellat velit. Blanditiis est ea laudantium soluta? Pariatur corrupti corporis sed ipsa error accusantium facilis doloremque sint minima odio tempora, impedit eum veniam obcaecati dolorum quis, reprehenderit natus voluptatem doloribus laboriosam quos quasi nemo culpa quisquam. Libero, odit quibusdam? Incidunt et ea optio harum! Voluptates voluptatibus quam dicta ad eum, corrupti odit assumenda, sed ut explicabo tempora! Quam tempore ex exercitationem obcaecati fugit ipsam reprehenderit maiores ad accusamus voluptatibus. Quisquam nulla harum sed rerum laudantium quod, quia in, perspiciatis, veritatis delectus quae non tempora dolore vitae optio voluptatem fuga ad officiis voluptas neque sequi atque. Quam eligendi suscipit ut laborum deleniti porro cupiditate nemo sint itaque eum et dicta, magnam fuga est. Ducimus magnam placeat, ipsum soluta obcaecati voluptas numquam corporis ullam vel sed culpa, quae iste temporibus eaque odit officiis tempore ratione fuga eveniet magni. Nisi, pariatur veritatis nihil maxime facilis quam commodi? Omnis ex voluptates a ullam amet sed necessitatibus quibusdam dignissimos cupiditate sint, possimus quae dolore? Quibusdam amet totam enim explicabo nesciunt dolores natus architecto delectus debitis non, iste tenetur vel nobis deserunt dolorum eveniet!
            </p>

        </div>
        </>
    );
};

export default About;
