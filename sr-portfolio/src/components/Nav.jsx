import React from "react";
import "./nav.css"

const Nav = () => {
    return (
        <>
            <ul className="flex-tags">
                <a href="/"><li>Home</li></a>
                <a href="/"><li>About</li></a>
                <a href="/"><li>Projects</li></a>
                <a href="/"><li>Contact Me</li></a>
            </ul>
        </>
    )
}

export default Nav;