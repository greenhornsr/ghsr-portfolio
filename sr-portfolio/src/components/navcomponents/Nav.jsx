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
                <NavLink className="navlinks" activeClassName="selected-nav" exact to="/">Home</NavLink>
                <NavLink className="navlinks" activeClassName="selected-nav" to="/about">About</NavLink>
                <NavLink className="navlinks" activeClassName="selected-nav" to="/projects">Projects</NavLink>
                <NavLink className="navlinks" activeClassName="selected-nav" to="/contact">Contact Me</NavLink>
            </ul>
            <Logo />
        </div>
    )
}

export default Nav;