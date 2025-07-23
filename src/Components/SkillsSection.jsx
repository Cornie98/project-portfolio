import '../Portfolio.css';
import { useEffect, useRef, useState } from 'react';

const SkillsSection = () => {
    const [selectedTab, setSelectedTab] = useState('Frontend');    
    const [visibleSkills, setVisibleSkills] = useState([]);
    const skillRefs = useRef([]);
    useEffect(() => { 
        setVisibleSkills([]); 
        skillRefs.current = [];
        const alreadyAnimated = new Set();
        const observer = new window.IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const skillName = entry.target.dataset.skillName;
                    if (entry.isIntersecting && !alreadyAnimated.has(skillName)) {
                        alreadyAnimated.add(skillName);
                        setVisibleSkills(prev => {
                            if (!prev.includes(skillName)) {
                                return [...prev, skillName];
                            }
                            return prev;
                        });
                    }
                });
            },
            { threshold: 0.3 }
        );
        
        setTimeout(() => {
            const currentSkills = skills.filter(skill => skill.tab === selectedTab);
            currentSkills.forEach((skill) => {
                const skillElement = document.querySelector(`.skill-item[data-skill-name=\"${skill.name}\"]`);
                if (skillElement) {
                    observer.observe(skillElement);
                }
            });
        }, 0);
        return () => {
            observer.disconnect();
        };
    }, [selectedTab]);

    

 
    const skillTabs = [
        { label: 'Frontend', key: 'Frontend' },
        { label: 'Backend', key: 'Backend' },
        { label: 'Soft Skills', key: 'Soft' },
        { label: 'In Progress', key: 'InProgress' },
    ];

   
    const skills = [
        { name: 'JavaScript', level: 60, category: 'Programming', tab: 'Frontend' },
        { name: 'React', level: 55, category: 'Frontend', tab: 'Frontend' },
        { name: 'HTML & CSS', level: 50, category: 'Web', tab: 'Frontend' },
        { name: 'Phaser.js', level: 45, category: 'Web Games', tab: 'Frontend' },
        { name: 'Node.js', level: 50, category: 'Backend', tab: 'Backend' },
        { name: 'SQL & NoSQL', level: 55, category: 'Databases', tab: 'Backend' },
        { name: 'Test Driven Development (Jest, Supertest)', level: 60, category: 'Testing', tab: 'Backend' },
        { name: 'C# & Unity', level: 60, category: 'Game Development', tab: 'Backend' },
        { name: 'Python', level: 30, category: 'Programming', tab: 'Backend' },
        { name: 'Git & GitHub', level: 80, category: 'Version Control', tab: 'Soft' },
        { name: 'Linux', level: 45, category: 'OS', tab: 'Soft' },
        { name: 'Paired Programming', level: 80, category: 'Soft Skill', tab: 'Soft' },
        { name: 'Go', level: 0, category: 'Learning', tab: 'InProgress' },
        { name: 'C++', level: 0, category: 'Learning', tab: 'InProgress' },
        {name: 'Typescript', level: 0, category: 'Learning', tab: 'InProgress'},
        {name: 'Godot', level: 0, category: 'Learning', tab: 'InProgress'}
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
                                   className={`skill-item animate-on-scroll magnetic${visibleSkills.includes(skill.name) ? ' visible' : ''}`}
                                   ref={el => skillRefs.current[index] = el}
                                   data-skill-name={skill.name}
                               >
                                   <div className="skill-header">
                                       <span className="skill-name">{skill.name}</span>
                                       
                                   </div>
                                   <div className="skill-bar-labels">
                                       <span className="skill-bar-label skill-bar-label-left">Beginner</span>
                                       <span className="skill-bar-label skill-bar-label-right">Expert</span>
                                   </div>
                                   <div className="skill-bar">
                                       <div
                                           className="skill-progress"
                                           style={{
                                               width: visibleSkills.includes(skill.name) ? `${skill.level}%` : 0,
                                               transition: 'width 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                               transitionDelay: visibleSkills.includes(skill.name) ? `${index * 0.1}s` : '0s',
                                           }}
                                       />
                                   </div>
                                   <span className="skill-category">{skill.category}</span>
                               </div>
                           ))}
                       </div>
                   </div>
               </section>
    )
}
export default SkillsSection;