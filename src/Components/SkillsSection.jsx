import '../Portfolio.css';
import { useState } from 'react';
import { IoLogoJavascript } from 'react-icons/io5';
import { FaReact, FaHtml5, FaNodeJs, FaGithub, FaLinux, FaUnity } from 'react-icons/fa';
import { SiPostgresql, SiJest, SiPython, SiGo, SiCplusplus, SiTypescript, SiGodotengine, SiFirebase } from 'react-icons/si';
import phaserIcon from '../assets/phaser-planet-web.png';

const SkillsSection = () => {
    const [selectedTab, setSelectedTab] = useState('Languages');    

    const skillTabs = [
        { label: 'Languages', key: 'Languages' },
        { label: 'Tools', key: 'Tools' },
        { label: 'In Progress', key: 'InProgress' },
    ];

    const skills = [
        { 
            name: 'JavaScript', 
            icon: <IoLogoJavascript />, 
            category: 'Programming', 
            tab: 'Languages',
            description: 'ES6+, Modern JS, DOM manipulation',
            brandColor: '#F7DF1E'
        },
        { 
            name: 'Python', 
            icon: <SiPython />, 
            category: 'Programming', 
            tab: 'Languages',
            description: 'Scripting, Data processing, Automation',
            brandColor: '#3776AB'
        },
        { 
            name: 'C#', 
            icon: <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>C#</span>, 
            category: 'Programming', 
            tab: 'Languages',
            description: 'Game mechanics, Scripting, 3D development',
            brandColor: '#239120'
        },
        
        { 
            name: 'React', 
            icon: <FaReact />, 
            category: 'Frontend Framework', 
            tab: 'Tools',
            description: 'Hooks, Context, Component architecture',
            brandColor: '#61DAFB'
        },
        { 
            name: 'HTML & CSS', 
            icon: <FaHtml5 />, 
            category: 'Web Technologies', 
            tab: 'Tools',
            description: 'Semantic HTML, CSS Grid, Flexbox',
            brandColor: '#E34F26'
        },
        { 
            name: 'Node.js', 
            icon: <FaNodeJs />, 
            category: 'Runtime Environment', 
            tab: 'Tools',
            description: 'Express.js, REST APIs, Middleware',
            brandColor: '#339933'
        },
        { 
            name: 'PostgreSQL', 
            icon: <SiPostgresql />, 
            category: 'Database', 
            tab: 'Tools',
            description: 'Database design, SQL queries, Optimization',
            brandColor: '#336791'
        },
        { 
            name: 'Firebase', 
            icon: <SiFirebase />, 
            category: 'Backend Services', 
            tab: 'Tools',
            description: 'Authentication, Real-time database, Cloud functions',
            brandColor: '#FF6B35'
        },
        { 
            name: 'Phaser.js', 
            icon: <img src={phaserIcon} alt="Phaser.js" style={{ width: '2rem', height: '2rem' }} />,
            category: 'Game Engine', 
            tab: 'Tools',
            description: '2D game development, Sprite management',
            brandColor: '#87CEEB'
        },
        { 
            name: 'Unity', 
            icon: <FaUnity />, 
            category: 'Game Engine', 
            tab: 'Tools',
            description: 'Game mechanics, Scripting, 3D development',
            brandColor: '#000000'
        },
        { 
            name: 'Jest', 
            icon: <SiJest />, 
            category: 'Testing Framework', 
            tab: 'Tools',
            description: 'Unit testing, Test-driven development',
            brandColor: '#C21325'
        },
        { 
            name: 'Git & GitHub', 
            icon: <FaGithub />, 
            category: 'Version Control', 
            tab: 'Tools',
            description: 'Branch management, Collaboration, CI/CD',
            brandColor: '#181717'
        },
        { 
            name: 'Linux', 
            icon: <FaLinux />, 
            category: 'Operating System', 
            tab: 'Tools',
            description: 'Command line, Server administration',
            brandColor: '#FCC624'
        },
        
        { 
            name: 'Go', 
            icon: <SiGo />, 
            category: 'Programming', 
            tab: 'InProgress',
            description: 'Concurrent programming, Performance',
            brandColor: '#00ADD8'
        },
        { 
            name: 'C++', 
            icon: <SiCplusplus />, 
            category: 'Programming', 
            tab: 'InProgress',
            description: 'Systems programming, Memory management',
            brandColor: '#00599C'
        },
        { 
            name: 'TypeScript', 
            icon: <SiTypescript />, 
            category: 'Programming', 
            tab: 'InProgress',
            description: 'Type safety, Advanced JavaScript features',
            brandColor: '#3178C6'
        },
        { 
            name: 'Godot', 
            icon: <SiGodotengine />, 
            category: 'Game Engine', 
            tab: 'InProgress',
            description: 'Game engine, GDScript, 2D/3D development',
            brandColor: '#478CBF'
        }
    ];

    const filteredSkills = skills.filter(skill => skill.tab === selectedTab);

    return (
        <section className="skills section" id="skills">
            <div className="container">
                <h2 className="section-title animate-on-scroll">Technical Skills</h2>
                <div className="skills-tabs">
                    {skillTabs.map(tab => (
                        <button
                            key={tab.key}
                            className={`skills-tab${selectedTab === tab.key ? ' active' : ''}`}
                            onClick={() => setSelectedTab(tab.key)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                
                <div className="skills-grid">
                    {filteredSkills.map((skill, index) => (
                        <div
                            key={skill.name}
                            className="skill-item"
                            style={{
                                animationDelay: `${index * 0.1}s`
                            }}
                        >
                            <div 
                                className="skill-icon"
                                style={{ 
                                    color: skill.brandColor,
                                    borderColor: skill.brandColor 
                                }}
                            >
                                {skill.icon}
                            </div>
                            <div className="skill-content">
                                <h3 className="skill-name">{skill.name}</h3>
                                <p className="skill-description">{skill.description}</p>
                                <span className="skill-category">{skill.category}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
