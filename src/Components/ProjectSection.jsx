import '../Portfolio.css';
const ProjectSection = ({scrapiPreview}) => {
    return (
                    
                    <section className="projects section" id="projects">
                    <div className="container">
                        <h2 className="section-title animate-on-scroll">Featured Projects</h2>
                        <div className="projects-grid">
                            {[
                                {
                                    title: '2D Platformer Game',
                                    description: 'Unity-based platformer with innovative mechanics',
                                    tech: ['Unity', 'C#', '2D Physics'],
                                    status: 'Live Demo',
                                    previewType: 'image',
                                    previewUrl: 'https://via.placeholder.com/400x250/87CEEB/2d3748?text=2D+Platformer+Game',
                                    demoUrl: '#',
                                    codeUrl: '#'
                                },
                                {
                                    title: 'Scrapibook',
                                    description: 'A playful digital scrapbook for creative expression and memory keeping.',
                                    tech: ['React.js', 'Konva.js', 'CSS', 'Firebase'],
                                    status: 'Live',
                                    previewType: 'image',
                                    previewUrl: scrapiPreview,
                                    demoUrl: 'https://scrapibook.netlify.app/',
                                    codeUrl: '#'
                                },
                                {
                                    title: 'Interactive Web Experience',
                                    description: 'Phaser.js portfolio with game elements',
                                    tech: ['Phaser.js', 'React', 'WebGL'],
                                    status: 'In Progress',
                                    previewType: 'image',
                                    previewUrl: 'https://codepen.io/cornie98/embed/preview/abcdef?default-tab=result&theme-id=dark',
                                    demoUrl: '#',
                                    codeUrl: '#'
                                },
                                {
                                    title: 'Multiplayer Game Prototype',
                                    description: 'Real-time multiplayer with Node.js backend',
                                    tech: ['Socket.io', 'Node.js', 'MongoDB'],
                                    status: 'Prototype',
                                    previewType: 'image',
                                    previewUrl: 'https://via.placeholder.com/400x250/B0E0E6/2d3748?text=Multiplayer+Game',
                                    demoUrl: '#',
                                    codeUrl: '#'
                                }
                            ].map((project, index) => (
                                <div key={project.title} className="project-card animate-on-scroll magnetic">
                                    <div className="project-glow" />
                                    
                                    {/* Project Preview */}
                                    <div className="project-preview">
                                        {project.previewType === 'iframe' ? (
                                            <iframe 
                                                src={project.previewUrl}
                                                className="project-iframe"
                                                title={`${project.title} Preview`}
                                                loading="lazy"
                                            />
                                        ) : (
                                            <img 
                                                src={project.previewUrl} 
                                                alt={`${project.title} Preview`}
                                                className="project-image"
                                                loading="lazy"
                                            />
                                        )}
                                        <div className="project-overlay">
                                            <div className="project-overlay-content">
                                                <span>Click to view</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="project-content">
                                        <h3 className="project-title">{project.title}</h3>
                                        <p className="project-description">{project.description}</p>
                                        <div className="project-tech">
                                            {project.tech.map(tech => (
                                                <span key={tech} className="tech-tag">{tech}</span>
                                            ))}
                                        </div>
                                        <div className="project-links">
                                            <a href={project.demoUrl} className="btn-small" target="_blank" rel="noopener noreferrer">
                                                View Demo
                                            </a>
                                            <a href={project.codeUrl} className="btn-small outline" target="_blank" rel="noopener noreferrer">
                                                View Code
                                            </a>
                                        </div>
                                    </div>
                                    <div className="project-status">{project.status}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
        
    )
}
export default ProjectSection;