import React, { useEffect, useRef, useState } from "react";
import "./Portfolio.css";
import scrapiPreview from "./assets/scrapi-preview.jpg";
import ncPreview from "./assets/NC-news-preview.png";
import HeroSection from "./Components/HeroSection";
import AboutSection from "./Components/AboutSection";
import SkillsSection from "./Components/SkillsSection";
import ProjectSection from "./Components/ProjectSection";
import ContactSection from "./Components/ContactSection";
import { FaArrowUp } from "react-icons/fa";

const Portfolio = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [easterEggCount, setEasterEggCount] = useState(0);
    const heroRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px",
            }
        );

        const animateElements = document.querySelectorAll(".animate-on-scroll");
        animateElements.forEach((el) => observer.observe(el));

        return () => {
            animateElements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    useEffect(() => {
        const magneticElements = document.querySelectorAll(".magnetic");

        magneticElements.forEach((el) => {
            el.addEventListener("mousemove", (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                el.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
            });

            el.addEventListener("mouseleave", () => {
                el.style.transform = "translate(0, 0)";
            });
        });

        return () => {
            magneticElements.forEach((el) => {
                el.removeEventListener("mousemove", () => {});
                el.removeEventListener("mouseleave", () => {});
            });
        };
    }, []);

    useEffect(() => {
        setTimeout(() => setIsLoaded(true), 500);
    }, []);

    useEffect(() => {
        const konamiCode = [
            "ArrowUp",
            "ArrowUp",
            "ArrowDown",
            "ArrowDown",
            "ArrowLeft",
            "ArrowRight",
            "ArrowLeft",
            "ArrowRight",
            "KeyB",
            "KeyA",
        ];
        let konamiIndex = 0;

        const handleKeyDown = (e) => {
            if (e.code === konamiCode[konamiIndex]) {
                konamiIndex++;
                if (konamiIndex === konamiCode.length) {
                    document.body.classList.add("rainbow-mode");
                    setTimeout(
                        () => document.body.classList.remove("rainbow-mode"),
                        5000
                    );
                    konamiIndex = 0;
                }
            } else {
                konamiIndex = 0;
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    const handleHeroClick = () => {
        setEasterEggCount((prev) => {
            const newCount = prev + 1;
            if (newCount === 7) {
                document
                    .querySelector(".hero-title")
                    .classList.add("party-mode");
                setTimeout(() => {
                    document
                        .querySelector(".hero-title")
                        .classList.remove("party-mode");
                }, 3000);
                return 0;
            }
            return newCount;
        });
    };

    const BackToTopButton = () => {
        const [visible, setVisible] = useState(false);
        useEffect(() => {
            const handleScroll = () => {
                setVisible(window.scrollY > 200);
            };
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, []);
        if (!visible) return null;
        return (
            <a
                href="#hero"
                className="back-to-top-cloud"
                aria-label="Back to top"
            >
                <span className="cloud-shape">
                    <FaArrowUp size={28} />
                </span>
            </a>
        );
    };

    return (
        <div className={`portfolio ${isLoaded ? "loaded" : ""}`}>
            <HeroSection handleHeroClick={handleHeroClick} heroRef={heroRef} />

            <AboutSection />

            <SkillsSection />

            <ProjectSection
                scrapiPreview={scrapiPreview}
                ncPreview={ncPreview}
            />

            <ContactSection />

            {/* Hidden Easter Egg Indicator */}
            {easterEggCount > 0 && (
                <div className="easter-egg-counter">
                    {easterEggCount}/7 clicks on title for surprise!
                </div>
            )}

            <BackToTopButton />
        </div>
    );
};

export default Portfolio;
