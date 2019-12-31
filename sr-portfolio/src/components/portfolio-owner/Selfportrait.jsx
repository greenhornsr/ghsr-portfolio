import React from 'react';
import MyPic from '../../assets/steve.png';
import './portfolio-owner.css';


const Selfportrait = () => {
    return (
        <div className="image-wrapper">
            <img src={MyPic} alt="Portfolio owner"/>
        </div>
    )
}

export default Selfportrait;