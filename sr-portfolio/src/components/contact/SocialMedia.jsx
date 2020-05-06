import React from 'react'

const SocialMedia = () => {
    function getResume(){
        window.open(require('../../assets/resume/Steve_Rollins_Resume_MAY_2020.pdf')) 
        const activeElement = document.getElementById('.download-resume')
        console.log(activeElement)
    }

    return (
        <div className="social-icons" >
            <section>
                <a href="https://github.com/greenhornsr/" target="_blank">
                    <span class="fa-stack fa-3x">
                        <i class="fa fa-circle-thin fa-stack-2x"></i>
                        <i class="fa fa-github fa-stack-1x"></i>
                    </span>
                </a>
            </section>
            <section>
                <a href="https://linkedin.com/in/steven-rollins" target="_blank">
                    <span class="fa-stack fa-3x">
                        <i class="fa fa-circle-thin fa-stack-2x"></i>
                        <i class="fa fa-linkedin fa-stack-1x"></i>
                    </span>
                </a>
            </section>
            <section>
                <a href="mailto:coding61.sr@gmail.com?Subject=Job%20Opportunity&body=I%20am%20interested%20in%20connecting!" target="_top">
                    <span class="fa-stack fa-3x">
                        <i class="fa fa-circle-thin fa-stack-2x"></i>
                        <i class="fa fa-envelope fa-stack-1x"></i>
                    </span>
                </a>
            </section>
            <section className="download-resume" onClick={getResume} >
                <span class="fa-stack fa-3x">
                    <i class="fa fa-circle-thin fa-stack-2x"></i>
                    {/* <i class="fa fa-file fa-stack-1x"></i> */}
                    <i class="fa fa-download fa-stack-1x"></i>
                </span>
            </section>
        </div>
    )
}

export default SocialMedia;