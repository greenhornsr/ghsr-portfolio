import React from 'react';
import Project from './Project'
import './project.css'

// Components
import { Nav } from '../index';

const ProjectsList = () => {
    return (
        <div className="project-container" >
            <Nav />
            <Project />
        </div>
    )
}

export default ProjectsList;