import React, { useState, useEffect } from 'react';

export default function Home() {
    const [showProfile, setShowProfile] = useState(false);

    // Easter Egg: Execute function
    const executeFetch = () => {
        setShowProfile(true);
    };

    return (
        <div className="home-container animate-fade-in">
            <div className="code-block" style={{ paddingTop: '3rem' }}>
                <div className="code-header">
                    <div className="mac-dot red"></div>
                    <div className="mac-dot yellow"></div>
                    <div className="mac-dot green"></div>
                </div>

                <div className="code-content">
                    <div>
                        <span className="line-number">1</span>
                        <span className="syntax-comment">/**</span>
                    </div>
                    <div>
                        <span className="line-number">2</span>
                        <span className="syntax-comment"> * @developer Senior Software Engineer @ Nike</span>
                    </div>
                    <div>
                        <span className="line-number">3</span>
                        <span className="syntax-comment"> * @specialty Full Stack Web Development</span>
                    </div>
                    <div>
                        <span className="line-number">4</span>
                        <span className="syntax-comment"> */</span>
                    </div>
                    <div>
                        <span className="line-number">5</span>
                        <span className="syntax-keyword">const</span> <span className="syntax-func">engineer</span> <span className="syntax-punct">=</span> <span className="syntax-punct">{"{"}</span>
                    </div>
                    <div>
                        <span className="line-number">6</span>
                        <span className="syntax-var" style={{ marginLeft: '2rem' }}>name</span><span className="syntax-punct">:</span> <span className="syntax-string">"Trae Shanks"</span><span className="syntax-punct">,</span>
                    </div>
                    <div>
                        <span className="line-number">7</span>
                        <span className="syntax-var" style={{ marginLeft: '2rem' }}>title</span><span className="syntax-punct">:</span> <span className="syntax-string">"Senior Software Engineer"</span><span className="syntax-punct">,</span>
                    </div>
                    <div>
                        <span className="line-number">8</span>
                        <span className="syntax-var" style={{ marginLeft: '2rem' }}>company</span><span className="syntax-punct">:</span> <span className="syntax-string">"Nike"</span><span className="syntax-punct">,</span>
                    </div>
                    <div>
                        <span className="line-number">9</span>
                        <span className="syntax-var" style={{ marginLeft: '2rem' }}>stack</span><span className="syntax-punct">:</span> <span className="syntax-punct">{"["}</span><span className="syntax-string">"React"</span><span className="syntax-punct">,</span> <span className="syntax-string">"TypeScript"</span><span className="syntax-punct">,</span> <span className="syntax-string">"Node.js"</span><span className="syntax-punct">{"]"}</span>
                    </div>
                    <div>
                        <span className="line-number">10</span>
                        <span className="syntax-punct">{"};"}</span>
                    </div>
                    <br />
                    <div>
                        <span className="line-number">11</span>
                        <span className="syntax-comment">// Click below to fetch bio</span>
                    </div>
                    <div>
                        <span className="line-number">12</span>
                        <span className="syntax-keyword">await</span> <span className="syntax-func">engineer</span>.<span className="syntax-var interactive-cmd" onClick={executeFetch} title="Click to execute!">fetchBio()</span><span className="syntax-punct">;</span><span className="cursor-blink"></span>
                    </div>
                </div>
            </div>

            <div className={`hero-profile ${showProfile ? 'visible' : ''}`}>
                <div className="profile-img-container">
                    <img className="profile-img" src="/assets/images/Me+Puppy.jpg" alt="Trae Shanks photo" />
                </div>
                <div className="about-text">
                    <h2 style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-main)', marginBottom: '1rem' }}>
                        <span className="syntax-punct">{"<"}</span>Bio <span className="syntax-var">status</span><span className="syntax-punct">=</span><span className="syntax-string">"loaded"</span><span className="syntax-punct">{">"}</span>
                    </h2>
                    <p style={{ marginBottom: '1rem' }}>
                        Experienced Full-Stack Web Developer currently engineering high-performance experiences at <strong>Nike</strong>.
                        With a deep passion for modern front-end architectures (React, TypeScript), scalable systems, and pixel-perfect UI/UX.
                    </p>
                    <p>
                        Lifelong dedication to self-improvement, clean code, and fostering collaborative team environments. I thrive at the
                        intersection of complex engineering and beautiful design.
                    </p>
                    <h2 style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-main)', marginTop: '1rem' }}>
                        <span className="syntax-punct">{"</"}</span>Bio<span className="syntax-punct">{">"}</span>
                    </h2>
                </div>
            </div>
        </div>
    );
}
