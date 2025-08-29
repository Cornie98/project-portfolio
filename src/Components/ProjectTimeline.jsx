import '../Portfolio.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaClock } from 'react-icons/fa';
import { getProjectById } from '../data/projectsData';

const ProjectTimeline = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const foundProject = getProjectById(projectId);
        if (foundProject) {
            setProject(foundProject);
        }
        setLoading(false);
    }, [projectId]);

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
            case 'development': return '#6366f1';
            case 'experimentation': return '#8b5cf6';
            case 'learning': return '#8b5cf6';
            default: return '#6b7280';
        }
    };

    
    const calculateTotalReadTime = (updates) => {
        return updates.reduce((total, update) => {
            
            const time = typeof update.readTime === 'string' 
                ? parseInt(update.readTime.split(' ')[0]) || 0
                : update.readTime || 0;
            return total + time;
        }, 0);
    };

    if (loading) {
        return (
            <div className="dev-logs-page">
                <div className="container">
                    <div className="loading">Loading project...</div>
                </div>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="dev-logs-page">
                <div className="container">
                    <div className="error">
                        <h1>Project Not Found</h1>
                        <p>The project you're looking for doesn't exist.</p>
                        <button onClick={() => navigate('/dev-logs')} className="back-to-projects">
                            Back to Projects
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="dev-logs-page">
            <div className="container">
                <header className="project-header">
                    <button 
                        className="back-to-projects"
                        onClick={() => navigate('/dev-logs')}
                    >
                        <FaArrowLeft /> Back to Projects
                    </button>
                    <div className="project-info">
                        <div>
                            <h1>{project.name}</h1>
                            <p>{project.description}</p>
                            <div className="project-meta">
                                <span className={`project-status ${project.status}`}>
                                    {project.status}
                                </span>
                                <span className="project-category">{project.category}</span>
                                <span className="total-read-time">
                                    <FaClock /> {calculateTotalReadTime(project.updates)} min
                                </span>
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
};

export default ProjectTimeline;
