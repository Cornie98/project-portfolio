import '../Portfolio.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaClock, FaCode, FaRocket, FaBook, FaGamepad } from 'react-icons/fa';

const ProjectTimeline = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                        
                        <h3>What I'm Building:</h3>
                        <ul>
                            <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</li>
                            <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</li>
                            <li>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</li>
                            <li>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</li>
                        </ul>
                        
                        <h3>Tech Stack:</h3>
                        <ul>
                            <li>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</li>
                            <li>Consectetur, adipisci velit, sed quia non numquam eius modi tempora</li>
                            <li>Incidunt ut labore et dolore magnam aliquam quaerat voluptatem</li>
                            <li>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis</li>
                        </ul>
                    `,
                    readTime: '5 min read',
                    status: 'completed'
                },
                {
                    id: 2,
                    date: '2024-01-20',
                    title: 'Skills Section Redesign',
                    content: `
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.</p>
                        
                        <h3>Changes Made:</h3>
                        <ul>
                            <li>Sint occaecati cupiditate non provident, similique sunt in culpa qui officia</li>
                            <li>Deserunt mollitia animi, id est laborum et dolorum fuga harum quidem</li>
                            <li>Rerum facilis est et expedita distinctio nam libero tempore, cum soluta</li>
                            <li>Nobis est eligendi optio cumque nihil impedit quo minus id quod maxime</li>
                        </ul>
                        
                        <h3>Next Steps:</h3>
                        <p>Placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
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
                        <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
                        
                        <h3>What I Learned:</h3>
                        <ul>
                            <li>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis</li>
                            <li>Voluptatibus maiores alias consequatur aut perferendis doloribus asperiores</li>
                            <li>Repellat qui blanditiis praesentium voluptatum deleniti atque corrupti</li>
                            <li>Quos dolores et quas molestias excepturi sint occaecati cupiditate</li>
                        </ul>
                        
                        <h3>Comparison with Unity:</h3>
                        <p>Non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                    `,
                    readTime: '8 min read',
                    status: 'completed'
                },
                {
                    id: 2,
                    date: '2024-01-25',
                    title: 'Platformer Game Progress',
                    content: `
                        <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime.</p>
                        
                        <h3>Current Features:</h3>
                        <ul>
                            <li>Placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus</li>
                            <li>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus</li>
                            <li>Saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae</li>
                            <li>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis</li>
                        </ul>
                        
                        <h3>Next Features:</h3>
                        <ul>
                            <li>Voluptatibus maiores alias consequatur aut perferendis doloribus asperiores</li>
                            <li>Repellat qui blanditiis praesentium voluptatum deleniti atque corrupti</li>
                            <li>Quos dolores et quas molestias excepturi sint occaecati cupiditate</li>
                            <li>Non provident, similique sunt in culpa qui officia deserunt mollitia</li>
                        </ul>
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
                        <p>Animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio.</p>
                        
                        <h3>Architecture Decisions:</h3>
                        <ul>
                            <li>Cumque nihil impedit quo minus id quod maxime placeat facere possimus</li>
                            <li>Omnis voluptas assumenda est, omnis dolor repellendus temporibus autem</li>
                            <li>Quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet</li>
                            <li>Ut et voluptates repudiandae sint et molestiae non recusandae itaque</li>
                        </ul>
                        
                        <h3>Key Features:</h3>
                        <ul>
                            <li>Earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus</li>
                            <li>Maiores alias consequatur aut perferendis doloribus asperiores repellat</li>
                            <li>Qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</li>
                            <li>Et quas molestias excepturi sint occaecati cupiditate non provident</li>
                        </ul>
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
                        <p>Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                        
                        <h3>Why Go?</h3>
                        <ul>
                            <li>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil</li>
                            <li>Impedit quo minus id quod maxime placeat facere possimus, omnis voluptas</li>
                            <li>Assumenda est, omnis dolor repellendus temporibus autem quibusdam</li>
                            <li>Et aut officiis debitis aut rerum necessitatibus saepe eveniet ut</li>
                        </ul>
                        
                        <h3>Learning Path:</h3>
                        <ol>
                            <li>Et voluptates repudiandae sint et molestiae non recusandae itaque earum</li>
                            <li>Rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus</li>
                            <li>Maiores alias consequatur aut perferendis doloribus asperiores repellat</li>
                            <li>Qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</li>
                            <li>Et quas molestias excepturi sint occaecati cupiditate non provident</li>
                        </ol>
                    `,
                    readTime: '4 min read',
                    status: 'learning'
                }
            ]
        }
    ];

    useEffect(() => {
        const foundProject = projects.find(p => p.id === parseInt(projectId));
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
            case 'learning': return '#8b5cf6';
            default: return '#6b7280';
        }
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
};

export default ProjectTimeline;
