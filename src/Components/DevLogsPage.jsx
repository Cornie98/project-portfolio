import '../Portfolio.css';
import { useState } from 'react';
import { FaArrowLeft, FaCalendar, FaTag, FaClock, FaCode, FaRocket, FaBook, FaGamepad } from 'react-icons/fa';

const DevLogsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);
    
    const blogCategories = [
        { label: 'All', key: 'All' },
        { label: 'Frontend', key: 'Frontend' },
        { label: 'Backend', key: 'Backend' },
        { label: 'Game Dev', key: 'GameDev' },
        { label: 'Learning', key: 'Learning' },
    ];

    const projects = [
        {
            id: 1,
            name: 'Portfolio Website',
            category: 'Frontend',
            description: 'My personal portfolio built with React and modern web technologies',
            icon: <FaCode />,
            status: 'completed',
            tags: ['React', 'CSS', 'Portfolio', 'Frontend'],
            updates: [
                {
                    id: 1,
                    date: '2024-01-15',
                    title: 'Initial Portfolio Setup',
                    content: `
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    `,
                    readTime: '5 min read',
                    status: 'completed'
                },
                {
                    id: 2,
                    date: '2024-01-20',
                    title: 'Skills Section Redesign',
                    content: `
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    `,
                    readTime: '3 min read',
                    status: 'completed'
                }
            ]
        },
        {
            id: 2,
            name: 'Phaser.js Game Development',
            category: 'GameDev',
            description: 'Learning web-based game development with Phaser.js',
            icon: <FaGamepad />,
            status: 'in-progress',
            tags: ['Phaser.js', 'Game Dev', 'JavaScript', '2D'],
            updates: [
                {
                    id: 1,
                    date: '2024-01-10',
                    title: 'Getting Started with Phaser.js',
                    content: `
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    `,
                    readTime: '8 min read',
                    status: 'completed'
                },
                {
                    id: 2,
                    date: '2024-01-25',
                    title: 'Platformer Game Progress',
                    content: `
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    `,
                    readTime: '4 min read',
                    status: 'in-progress'
                }
            ]
        },
        {
            id: 3,
            name: 'Node.js Backend Architecture',
            category: 'Backend',
            description: 'Designing scalable backend services with Node.js and Express',
            icon: <FaRocket />,
            status: 'planning',
            tags: ['Node.js', 'Express', 'Backend', 'Architecture'],
            updates: [
                {
                    id: 1,
                    date: '2024-01-05',
                    title: 'Architecture Planning',
                    content: `
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    `,
                    readTime: '6 min read',
                    status: 'planning'
                }
            ]
        },
        {
            id: 4,
            name: 'Go Programming Language',
            category: 'Learning',
            description: 'Learning Go for concurrent programming and performance',
            icon: <FaBook />,
            status: 'learning',
            tags: ['Go', 'Learning', 'Programming', 'Concurrency'],
            updates: [
                {
                    id: 1,
                    date: '2024-01-01',
                    title: 'Starting the Go Journey',
                    content: `
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    `,
                    readTime: '4 min read',
                    status: 'learning'
                }
            ]
        }
    ];

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

    if (selectedProject) {
        const project = projects.find(p => p.id === selectedProject);
        return (
            <div className="dev-logs-page">
                <div className="container">
                    {/* Project Header */}
                    <header className="project-header">
                        <button 
                            className="back-to-projects"
                            onClick={() => setSelectedProject(null)}
                        >
                            <FaArrowLeft /> Back to Projects
                        </button>
                        <div className="project-info">
                            <div className="project-icon" style={{ color: getStatusColor(project.status) }}>
                                {project.icon}
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

                    {/* Project Updates Timeline */}
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
                {/* Header */}
                <header className="dev-logs-header">
                    <a href="/" className="back-button">
                        <FaArrowLeft /> Back to Portfolio
                    </a>
                    <h1>Development Projects</h1>
                    <p>A collection of my development projects with detailed progress timelines</p>
                </header>

                {/* Category Filter */}
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

                {/* Projects Grid */}
                <div className="projects-grid">
                    {filteredProjects.map((project) => (
                        <div 
                            key={project.id} 
                            className="project-card"
                            onClick={() => setSelectedProject(project.id)}
                        >
                            <div className="project-card-header">
                                <div className="project-icon" style={{ color: getStatusColor(project.status) }}>
                                    {project.icon}
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
