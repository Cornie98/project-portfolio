import '../Portfolio.css';
import { useState } from 'react';
import { FaArrowLeft, FaCalendar, FaTag, FaClock } from 'react-icons/fa';
import { getAllProjects } from '../data/projectsData';

const DevLogsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);
    
    const blogCategories = [
        { label: 'All', key: 'All' },
        { label: 'Websites', key: 'Websites' },
        { label: 'Mobile Apps', key: 'Mobile Apps' },
        { label: 'Games', key: 'Games' },
    ];

    const projects = getAllProjects();

    const filteredProjects = selectedCategory === 'All' 
        ? projects 
        : projects.filter(project => project.category === selectedCategory);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleDateString('en-US', { month: 'short' });
        const year = date.getFullYear();
        return { day, month, year };
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'completed': return '#10b981';
            case 'in-progress': return '#f59e0b';
            case 'planning': return '#3b82f6';
            case 'learning': return '#8b5cf6';
            default: return '#6b7280';
        }
    };

    const getIconColor = (iconName) => {
        switch (iconName) {
            case 'FaGamepad': return '#8b5cf6';
            case 'FaCode': return '#3b82f6';
            case 'FaPaperclip': return '#10b981';
            case 'FaBook': return '#f59e0b';
            default: return '#6b7280';
        }
    };

    if (selectedProject) {
        const project = projects.find(p => p.id === selectedProject);
        return (
            <div className="dev-logs-page">
                <div className="container">
                    <header className="project-header">
                        <button 
                            className="back-to-projects"
                            onClick={() => setSelectedProject(null)}
                        >
                            <FaArrowLeft /> Back to Projects
                        </button>
                        <div className="project-info">
                            <div className="project-icon" style={{ color: getIconColor(project.icon.name) }}>
                                {project.icon()}
                            </div>
                            <div>
                                <h1>{project.name}</h1>
                                <p>{project.description}</p>
                                <div className="project-meta">
                                    <span className={`project-status ${project.status}`}>
                                        {project.status}
                                    </span>
                                    <span className="project-category">{project.category}</span>
                                </div>
                            </div>
                        </div>
                    </header>

                    <div className="project-timeline">
                        {project.updates.map((update, index) => {
                            const { day, month, year } = formatDate(update.date);
                            return (
                                <article key={update.id} className="timeline-item">
                                    <div className="timeline-date">
                                        <div className="date-circle">
                                            <span className="date-day">{day}</span>
                                            <span className="date-month">{month}</span>
                                        </div>
                                        <span className="date-year">{year}</span>
                                    </div>

                                    <div className="timeline-content">
                                        <div className="timeline-header">
                                            <h2 className="timeline-title">{update.title}</h2>
                                            <div className="timeline-meta">
                                                <span className={`timeline-status ${update.status}`}>
                                                    {update.status}
                                                </span>
                                                <span className="timeline-read-time">
                                                    <FaClock /> {update.readTime}
                                                </span>
                                            </div>
                                        </div>

                                        <div 
                                            className="timeline-body"
                                            dangerouslySetInnerHTML={{ __html: update.content }}
                                        />
                                    </div>
                                </article>
                            );
                        })}
                    </div>

                    
                </div>
            </div>
        );
    }

    return (
        <div className="dev-logs-page">
            <div className="container">
                <header className="dev-logs-header">
                    <a href="/" className="back-button">
                        <FaArrowLeft /> Back to Portfolio
                    </a>
                    <h1>Development Projects</h1>
                    <p>A collection of my development projects with detailed progress timelines</p>
                </header>

                <div className="dev-logs-categories">
                    {blogCategories.map(category => (
                        <button
                            key={category.key}
                            className={`dev-log-category${selectedCategory === category.key ? ' active' : ''}`}
                            onClick={() => setSelectedCategory(category.key)}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {filteredProjects.map((project) => (
                        <div 
                            key={project.id} 
                            className="project-card"
                            onClick={() => setSelectedProject(project.id)}
                        >
                            <div className="project-card-header">
                                <div className="project-icon" style={{ color: getIconColor(project.icon.name) }}>
                                    {project.icon()}
                                </div>
                                <span className={`project-status ${project.status}`}>
                                    {project.status}
                                </span>
                            </div>
                            
                            <h3 className="project-name">{project.name}</h3>
                            <p className="project-description">{project.description}</p>
                            
                            <div className="project-meta">
                                <span className="project-category">{project.category}</span>
                                <span className="project-updates-count">
                                    {project.updates.length} update{project.updates.length !== 1 ? 's' : ''}
                                </span>
                            </div>
                            
                            <div className="project-tags">
                                {project.tags.map(tag => (
                                    <span key={tag} className="project-tag">{tag}</span>
                                ))}
                            </div>
                            
                            <div className="project-latest">
                                <small>Latest: {formatDate(project.updates[0].date).month} {formatDate(project.updates[0].date).day}, {formatDate(project.updates[0].date).year}</small>
                            </div>
                        </div>
                    ))}
                </div>

                
            </div>
        </div>
    );
};

export default DevLogsPage;
