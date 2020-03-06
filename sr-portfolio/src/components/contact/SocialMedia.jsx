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
            <a href="mailto:coding61.sr@gmail.com?Subject=Job%20Opportunity&body=I%20am%20interested%20in%20connecting!" target="_top">
                <span class="fa-stack fa-3x">
                    <i class="fa fa-circle-thin fa-stack-2x"></i>
                    <i class="fa fa-envelope fa-stack-1x"></i>
                </span>
            </a>
            <a href="/resume/Steve_Rollins_Resume_2020.pdf" download="StevenDRollinsResume">
                <span class="fa-stack fa-3x">
                    <i class="fa fa-circle-thin fa-stack-2x"></i>
                    <i class="fa fa-file fa-stack-1x"></i>
                </span>
            </a>
        </div>
    )
}

export default SocialMedia;