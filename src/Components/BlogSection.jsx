import '../Portfolio.css';
import { useState } from 'react';

const BlogSection = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    
    const blogCategories = [
        { label: 'All', key: 'All' },
        { label: 'Frontend', key: 'Frontend' },
        { label: 'Backend', key: 'Backend' },
        { label: 'Game Dev', key: 'GameDev' },
        { label: 'Learning', key: 'Learning' },
    ];

    const blogPosts = [
        {
            id: 1,
            title: 'Portfolio Website',
            category: 'Frontend',
            date: '2024-01-20',
            readTime: '3 min read',
            tags: ['React', 'CSS', 'Portfolio'],
            status: 'completed',
            projectId: 1,
            latestUpdate: {
                title: 'Skills Section Redesign',
                excerpt: 'Preview post...'
            }
        },
        {
            id: 2,
            title: 'Phaser.js Game Development',
            category: 'GameDev',
            date: '2024-01-25',
            readTime: '4 min read',
            tags: ['Phaser.js', 'Game Dev', 'JavaScript'],
            status: 'in-progress',
            projectId: 2,
            latestUpdate: {
                title: 'Platformer Game Progress',
                excerpt: 'Preview post...'
            }
        },
        {
            id: 3,
            title: 'Node.js Backend Architecture',
            category: 'Backend',
            date: '2024-01-05',
            readTime: '6 min read',
            tags: ['Node.js', 'Express', 'Backend'],
            status: 'planning',
            projectId: 3,
            latestUpdate: {
                title: 'Architecture Planning',
                excerpt: 'Preview post...'
            }
        },
        {
            id: 4,
            title: 'Go Programming Language',
            category: 'Learning',
            date: '2024-01-01',
            readTime: '4 min read',
            tags: ['Go', 'Learning', 'Programming'],
            status: 'learning',
            projectId: 4,
            latestUpdate: {
                title: 'Starting the Go Journey',
                excerpt: 'Preview post...'
            }
        }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'completed': return '#10b981';
            case 'in-progress': return '#f59e0b';
            case 'planning': return '#3b82f6';
            case 'learning': return '#8b5cf6';
            default: return '#6b7280';
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'completed': return '✓';
            case 'in-progress': return '⟳';
            case 'planning': return '📋';
            case 'learning': return '📚';
            default: return '•';
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleDateString('en-US', { month: 'short' });
        const year = date.getFullYear();
        return { day, month, year };
    };

    const latestPosts = blogPosts
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3);

    return (
        <section className="blog section" id="blog">
            <div className="container">
                <h2 className="section-title animate-on-scroll">Development Logs</h2>
              
                
                {/* Latest Posts Horizontal Scroll */}
                <div className="blog-latest-posts">
                    <h3>Latest Updates</h3>
                    <div className="blog-latest-scroll">
                        {latestPosts.map((post) => (
                            <a 
                                key={post.id} 
                                href={`/dev-logs/project/${post.projectId}`}
                                className="blog-latest-card"
                            >
                                <div className="blog-latest-header">
                                    <div className="blog-latest-status-icon" style={{ color: getStatusColor(post.status) }}>
                                        {getStatusIcon(post.status)}
                                    </div>
                                    <span className={`blog-latest-status ${post.status}`}>
                                        {post.status}
                                    </span>
                                </div>
                                
                                <h4 className="blog-latest-title">{post.title}</h4>
                                <div className="blog-latest-update-info">
                                    <small className="blog-latest-update-title">{post.latestUpdate.title}</small>
                                </div>
                                <p className="blog-latest-excerpt">{post.latestUpdate.excerpt}</p>
                                
                                <div className="blog-latest-meta">
                                    <span className="blog-latest-category">{post.category}</span>
                                    <span className="blog-latest-read-time">{post.readTime}</span>
                                </div>
                                
                                <div className="blog-latest-footer">
                                    <span className="blog-latest-date">{post.date}</span>
                                    <span className="blog-latest-link">View Timeline →</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="blog-cta">
                    <p>Want to read more about my development journey?</p>
                    <a href="/dev-logs" className="blog-cta-button">
                        View All Projects
                    </a>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
