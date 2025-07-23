import React, { useEffect, useState } from 'react';
import '../Portfolio.css';

const NavBar = () => {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true); 
      } else {
        setHidden(false); 
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar${hidden ? ' navbar--hidden' : ''}`}>
      <ul>

        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#devlogs">Dev Logs</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <a href="/path/to/your-cv.pdf" download>
            Download CV
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
