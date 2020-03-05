import React from 'react'
import './about.css';

// direct import of me data; skipping to bring in as props; showcasing ability to pass props
// import { aboutme } from '../../assets/data/aboutme-data';


// Components
import Nav from '../navcomponents/Nav';

// destructuring aboutme from the props object as argument passed to About component.
const About = ({ aboutme }) => {
    // further destructuring from the about me object. 
    const {name, se, fi, ed, bg} = aboutme;
    return (
        <div className="about-container">
            <Nav/>
            <div className="about-body">
                <h2>{name}</h2>
                <div className="about-sections">
                    <section className="inner-about-sections software-engineer">
                        <section className="lvl2-inner-about">
                            <h3>{se.h3}</h3>
                            <p className="intro"> {se.desc} </p>
                        </section>
                    </section>
                    <section className="inner-about-sections family">
                        <section className="lvl2-inner-about">
                            <h3> {fi.h3} </h3>
                            <p className="intro"> {fi.desc} </p>
                        </section>
                    </section>
                    <section className="inner-about-sections education">
                        <section className="lvl2-inner-about">
                            <h3> {ed.h3} </h3>
                            <p className="intro"> {ed.desc} </p>    
                        </section>
                    </section>
                    <section className="inner-about-sections background">
                        <section className="lvl2-inner-about">
                            <h3> {bg.h3} </h3>
                            <p className="intro"> {bg.desc} </p>
                        </section>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default About;