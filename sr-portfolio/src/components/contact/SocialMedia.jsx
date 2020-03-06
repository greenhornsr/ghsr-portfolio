import React from 'react'

const SocialMedia = () => {
    return (
        <div className="social-icons" >
            <a href="https://github.com/greenhornsr/">
                <span class="fa-stack fa-3x">
                    <i class="fa fa-circle-thin fa-stack-2x"></i>
                    <i class="fa fa-github fa-stack-1x"></i>
                </span>
            </a>
            <a href="https://linkedin.com/in/steven-rollins">
                <span class="fa-stack fa-3x">
                    <i class="fa fa-circle-thin fa-stack-2x"></i>
                    <i class="fa fa-linkedin fa-stack-1x"></i>
                </span>
            </a>
            {/* <a href="">
                <span class="fa-stack fa-3x">
                    <i class="fa fa-circle-thin fa-stack-2x"></i>
                    <i class="fa fa-twitter fa-stack-1x"></i>
                </span>
            </a> */}
        </div>
    )
}

export default SocialMedia;