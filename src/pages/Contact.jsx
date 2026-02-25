import React, { useState } from 'react';

export default function Contact() {
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('awaiting response...');
        setTimeout(() => setStatus('200 OK: Message sent successfully.'), 1500);
    };

    return (
        <div className="contact-container animate-fade-in">
            <div className="contact-wrapper">
                <div className="contact-form-side">
                    <h2 style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-main)', marginBottom: '2rem' }}>
                        <span className="syntax-func">sendRequest</span><span className="syntax-punct">(</span><span className="syntax-var">payload</span><span className="syntax-punct">)</span>
                    </h2>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name"><span className="syntax-punct">{'// '}</span>client.name</label>
                            <input type="text" id="name" className="form-control" required placeholder="'John Doe'" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email"><span className="syntax-punct">{'// '}</span>client.email</label>
                            <input type="email" id="email" className="form-control" required placeholder="'john@example.com'" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message"><span className="syntax-punct">{'// '}</span>payload.body</label>
                            <textarea id="message" className="form-control" required placeholder="`Hello Trae...`"></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '12px' }}>
                            <i className="fa fa-paper-plane"></i> execute()
                        </button>

                        {status && (
                            <div style={{ marginTop: '1rem', fontFamily: 'var(--font-mono)', color: status.includes('200') ? 'var(--string)' : 'var(--text-muted)' }}>
                                <span className="syntax-punct">{'> '}</span> {status}
                            </div>
                        )}
                    </form>
                </div>

                <div className="contact-info-side">
                    <h3 style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                        <span className="syntax-keyword">export</span> const <span className="syntax-var">socials</span> <span className="syntax-punct">=</span> <span className="syntax-punct">{'{'}</span>
                    </h3>

                    <div style={{ marginLeft: '2rem' }}>
                        <a href="tel:503-754-3298" className="contact-item">
                            <i className="fa fa-phone"></i>
                            <span>"503-754-3298"</span><span className="syntax-punct">,</span>
                        </a>

                        <a href="mailto:shanks.trae@gmail.com" className="contact-item">
                            <i className="fa fa-envelope"></i>
                            <span>"shanks.trae@gmail.com"</span><span className="syntax-punct">,</span>
                        </a>

                        <a href="https://www.linkedin.com/in/trae-shanks-2a1791121/" target="_blank" rel="noopener noreferrer" className="contact-item">
                            <i className="fa fa-linkedin"></i>
                            <span>"LinkedIn"</span><span className="syntax-punct">,</span>
                        </a>

                        <a href="https://github.com/shankstee" target="_blank" rel="noopener noreferrer" className="contact-item">
                            <i className="fa fa-github"></i>
                            <span>"GitHub"</span><span className="syntax-punct">,</span>
                        </a>
                    </div>

                    <h3 style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginTop: '1rem' }}>
                        <span className="syntax-punct">{'};'}</span>
                    </h3>
                </div>
            </div>
        </div>
    );
}
