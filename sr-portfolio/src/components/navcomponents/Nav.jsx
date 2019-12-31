import React from "react";
import "./nav.css";

// Components
import Logo from "./Logo"

const Nav = () => {
    return (
        <div className="nav-wrapper">
            <Logo />
            <ul className="flex-tags">
                <a href="/"><li>Home</li></a>
                <a href="/"><li>About</li></a>
                <a href="/"><li>Projects</li></a>
                <a href="/"><li>Contact Me</li></a>
            </ul>
            <Logo />
        </div>
    )
}

export default Nav;