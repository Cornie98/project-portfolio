import React from "react";
import "../Portfolio.css";

const HeroSection = ({ handleHeroClick, heroRef }) => (
    <section className="hero" ref={heroRef} id="hero">
        <div className="hero-content">
            <h1 className="hero-title magnetic" onClick={handleHeroClick}>
                Connie McLachlan
            </h1>
            <p className="hero-subtitle animate-in">
                Junior Software & Game Developer
            </p>
            <p className="hero-description animate-in">
                Passionate about building software and games that are intuitive,
                enjoyable, and user-focused.
            </p>
            <div className="hero-cta animate-in">
                <a href="#projects" className="btn-primary magnetic">
                    View My Work
                </a>
                <a href="#contact" className="btn-secondary magnetic">
                    Get In Touch
                </a>
            </div>
        </div>
    </section>
);

export default HeroSection;
