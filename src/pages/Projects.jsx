import React from 'react';

export default function Projects() {
    const projects = [
        {
            title: 'FindaSpot',
            image: '/assets/images/findaSpot.png',
            desc: 'Find or sell parking app built with modern web tech.',
            repo: 'https://github.com/hyxhuynh/FindaSpot'
        },
        {
            title: 'Stockio',
            image: '/assets/images/stockio.png',
            desc: 'Practice stock trading web app.',
            repo: 'https://github.com/Andydandy77/Stockio'
        },
        {
            title: 'JJ-PowerData',
            image: '/assets/images/JReactApp.png',
            desc: 'Inventory and tracking system for client management.',
            repo: 'https://github.com/shankstee/JD-ReactApp'
        },
        {
            title: 'Scrape the Dead',
            image: '/assets/images/scrape.png',
            desc: 'Organized scrapped information from Reddit.',
            repo: 'https://github.com/shankstee/LinkScraper'
        },
        {
            title: 'Zombie Memory',
            image: '/assets/images/zombieMemory.png',
            desc: 'Click based memory game built with React.',
            repo: 'https://github.com/shankstee/Click-Game'
        },
        {
            title: 'GifPlay & Pause',
            image: '/assets/images/gifPlay.png',
            desc: 'Gif search with play and pause functionality.',
            repo: 'https://github.com/shankstee/GifTastic'
        }
    ];

    return (
        <div className="projects-container animate-fade-in">
            <h1 className="section-title">
                <span className="syntax-keyword">const</span> <span className="syntax-var">repositories</span> <span className="syntax-punct">=</span> <span className="syntax-punct">[</span>
            </h1>

            <div className="projects-grid">
                {projects.map((project, idx) => (
                    <div className="project-card" key={idx}>
                        <img src={project.image} alt={project.title} className="project-img" />
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.desc}</p>
                            <div className="project-links">
                                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                    <i className="fa fa-github"></i> source_code
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <h1 className="section-title" style={{ marginTop: '2rem' }}>
                <span className="syntax-punct">]</span><span className="syntax-punct">;</span>
            </h1>
        </div>
    );
}
