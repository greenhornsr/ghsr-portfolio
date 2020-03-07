import React from 'react';
import './portfolio-owner.css';

// Component
import Selfportrait from './Selfportrait';


const Name = () => {
    return (
        <div className="portfolio-user-wrapper">
            <div className="user-detail">
                <h3>Software Engineer</h3>
                <h1>Steven D. <span>Rollins</span></h1>
            </div>
            <Selfportrait/>
        </div>
    )
}

export default Name;