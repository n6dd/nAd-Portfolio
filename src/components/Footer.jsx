import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
    <footer>
        <div className="footer-container">
            <a href="https://github.com/n6dd" target="_blank" rel="noopener noreferrer">
                <img 
                style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                objectFit: 'cover'
                }} 
                src="/images/github-image.jpg" alt="GitHub" className="footer-icon" />
            </a>
            <a href="https://www.linkedin.com/in/nicholas-dear-aaa78a2a9/" target="_blank" rel="noopener noreferrer">
            <img 
            style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            objectFit: 'cover'
            }} 
            src="/images/linkedinicon.png" alt="LinkedIn" className="footer-icon" />
            </a>
            <a href="https://stackoverflow.com/users/29969766/nicholas-dear" target="_blank" rel="noopener noreferrer">
            <img 
            style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            objectFit: 'cover'
            }} 
            src="/images/Stack-Icon.webp" alt="Stack Overflow" className="footer-icon" />
            </a>
        </div>
    </footer>
    );
}