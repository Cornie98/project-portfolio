import '../Portfolio.css';
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaItchIo } from "react-icons/fa";

const ContactSection = () => {
    return (
        <section  className="contact section" id="contact">
            <div className="container">
                <h2 className="section-title animate-on-scroll">Contact me through the links below!</h2>
                <div className="contact-content">
                    <p className="contact-subtitle animate-on-scroll">
                        Email | GitHub | LinkedIn | Itch.io
                    </p>
                    <div className="contact-links animate-on-scroll">
                        <a href="mailto:your@email.com" className="contact-link magnetic">
                            <MdEmail /> Email Me
                        </a>
                        <a href="https://github.com/cornie98" className="contact-link magnetic" target="_blank" rel="noopener noreferrer">
                            <FaGithub /> GitHub
                        </a>
                        <a href="https://linkedin.com/in/yourprofile" className="contact-link magnetic" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin /> LinkedIn
                        </a>
                        <a href="https://conniem.itch.io/" className="contact-link magnetic" target="_blank" rel="noopener noreferrer">
                            <FaItchIo /> Itch.io
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ContactSection;