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
                <NavLink className="navlinks" to="/"><li>Home</li></NavLink>
                <NavLink className="navlinks" to="/about"><li>About</li></NavLink>
                <NavLink className="navlinks" to="/projects"><li>Projects</li></NavLink>
                <NavLink className="navlinks" to="/contact"><li>Contact Me</li></NavLink>
            </ul>
            <Logo />
        </div>
    )
}

export default Nav;