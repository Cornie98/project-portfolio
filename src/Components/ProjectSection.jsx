import "../Portfolio.css";
import { projectsData } from "../data/projectsData";

const ProjectSection = ({ scrapiPreview, ncPreview }) => {
    const projectsWithPreviews = projectsData.map(project => {
        if (project.id === 2) { 
            return { ...project, previewUrl: ncPreview };
        } else if (project.id === 3) { 
            return { ...project, previewUrl: scrapiPreview };
        }
        return project;
    });

    return (
        <section className="projects section" id="projects">
            <div className="container">
                <h2 className="section-title animate-on-scroll">
                    Featured Projects
                </h2>
                <div className="projects-grid">
                    {projectsWithPreviews.map((project, index) => (
                        <div
                            key={project.title}
                            className="project-card animate-on-scroll magnetic"
                        >
                            <div className="project-glow" />

                            <div className="project-preview">
                                {project.previewType === "iframe" ? (
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
                                <h3 className="project-title">
                                    {project.title}
                                </h3>
                                <p className="project-description">
                                    {project.description}
                                </p>
                                <div className="project-tech">
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a
                                        href={project.demoUrl}
                                        className="btn-small"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Demo
                                    </a>
                                    <a
                                        href={project.codeUrl}
                                        className="btn-small outline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Code
                                    </a>
                                </div>
                            </div>
                            <div className="project-status">
                                {project.status}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default ProjectSection;
