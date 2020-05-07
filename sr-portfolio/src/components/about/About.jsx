import React from 'react'
import './about.css';

// need to revisit this component as it isn't very DRY...

// direct import of me data; skipping to bring in as props; showcasing ability to pass props
// import { aboutme } from '../../assets/data/aboutme-data';


// Components
import {Nav} from '../index';

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
                            <h3>{se.h3}</h3>  <h5><sup>HOVER</sup></h5>
                            <p className="intro"> {se.desc} </p>
                            <p className="intro"> {se.desc1} </p>
                            <p className="intro"> {se.desc2} </p>
                            <p className="intro"> {se.desc3}, <br/> {se.desc4} <br/> {se.desc5} <br/> {se.desc6} </p>
                        </section>
                    </section>
                    <section className="inner-about-sections family">
                        <section className="lvl2-inner-about">
                            <h3> {fi.h3} </h3> <h5><sup>HOVER</sup></h5>
                            <p className="intro"> {fi.desc} </p>
                            <p className="intro"> {fi.desc1} </p>
                            <p className="intro"> {fi.desc2} </p>
                            <p className="intro"> {fi.desc3} </p>
                            <p className="intro"> {fi.desc4} </p>
                        </section>
                    </section>
                    <section className="inner-about-sections education">
                        <section className="lvl2-inner-about">
                            <h3> {ed.h3} </h3> <h5><sup>HOVER</sup></h5>
                            <p className="intro"> {ed.desc} </p>   
                            <p className="intro"> {ed.desc1} </p>   
                            <p className="intro"> {ed.desc2} </p>   
                            <p className="intro"> {ed.desc3} </p>   
                            <p className="intro"> {ed.desc4} </p>   
                        </section>
                    </section>
                    <section className="inner-about-sections background">
                        <section className="lvl2-inner-about">
                            <h3> {bg.h3} </h3> <h5><sup>HOVER</sup></h5>
                            <p className="intro"> {bg.desc} </p>
                            <p className="intro"> {bg.desc1} </p>
                            <p className="intro"> {bg.desc2} </p>
                            <p className="intro"> {bg.desc3} </p>
                        </section>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default About;