import React from "react";
import { NavLink } from 'react-router-dom';
import "./nav.css";

// Components
import Logo from "./Logo"

const Nav = () => {
    return (
        <div className="nav-wrapper">
            <Logo />
            <ul className="flex-tags">
                <NavLink to="/"><li>Home</li></NavLink>
                <NavLink to="/about"><li>About</li></NavLink>
                <NavLink to="/projects"><li>Projects</li></NavLink>
                <NavLink to="/contact"><li>Contact Me</li></NavLink>
            </ul>
            <Logo />
        </div>
    )
}

export default Nav;