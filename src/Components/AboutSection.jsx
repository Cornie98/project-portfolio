import "../Portfolio.css";
import profilePicture from "../assets/portfolio_picture.png";
const AboutSection = () => {
    return (
        <section className="about section">
            <div className="container">
                <h2 className="section-title animate-on-scroll">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p className="animate-on-scroll">
                            I'm a passionate junior software engineer and game
                            developer who loves creating fun and engaging
                            applications. With experience in game engines and
                            web development, I try to insert fun into every
                            project I work on. I'm constantly driven to learn
                            and develop my skills.
                        </p>
                        <p className="animate-on-scroll">
                            When I'm not coding, you'll find me crocheting,
                            travelling, watching moomins or a studio ghibli film
                            and of course, playing games!
                        </p>
                    </div>
                    <div className="about-image magnetic animate-on-scroll">
                        <div className="image-placeholder dither-halftone">
                            <img
                                src={profilePicture}
                                alt="Profile"
                                className="profile-picture"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
