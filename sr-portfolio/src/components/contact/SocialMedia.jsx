import React from 'react'

const SocialMedia = () => {
    function getResume(){
        window.open(require('/Users/Rollins/Desktop/Steve/Portfolio/ghsr-portfolio/sr-portfolio/src/assets/resume/Steve_Rollins_Resume_2020.pdf')) 
        const activeElement = document.getElementById('.download-resume')
        console.log(activeElement)
    }


    return (
        <div className="social-icons" >
            <a href="https://github.com/greenhornsr/" target="_blank">
                <span class="fa-stack fa-3x">
                    <i class="fa fa-circle-thin fa-stack-2x"></i>
                    <i class="fa fa-github fa-stack-1x"></i>
                </span>
            </a>
            <a href="https://linkedin.com/in/steven-rollins" target="_blank">
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
            <div className="download-resume" onClick={getResume} >
                <span class="fa-stack fa-3x">
                    <i class="fa fa-circle-thin fa-stack-2x"></i>
                    {/* <i class="fa fa-file fa-stack-1x"></i> */}
                    <i class="fa fa-download fa-stack-1x"></i>
                </span>
            </div>
        </div>
    )
}

export default SocialMedia;