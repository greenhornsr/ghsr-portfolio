import React from 'react'

const SocialMedia = () => {
    function getResume(){
        window.open(require('../../assets/resume/Steve_Rollins_Resume_July_2022.pdf')) 
        // const activeElement = document.getElementById('.download-resume')
    }

    return (
        <div className="social-icons" >
            <section className="sm-sections" >
                <a href="https://github.com/greenhornsr/" target="_blank" rel="noopener noreferrer">
                    <span className="fa-stack fa-3x">
                        <i className="fa fa-circle-thin fa-stack-2x"></i>
                        <i className="fa fa-github fa-stack-1x"></i>
                    </span>
                </a>
            </section>
            <section className="sm-sections" >
                <a href="https://linkedin.com/in/steven-rollins" target="_blank" rel="noopener noreferrer">
                    <span className="fa-stack fa-3x">
                        <i className="fa fa-circle-thin fa-stack-2x"></i>
                        <i className="fa fa-linkedin fa-stack-1x"></i>
                    </span>
                </a>
            </section>
            <section className="sm-sections" >
                <a href="mailto:coding61.sr@gmail.com?Subject=Job%20Opportunity&body=I%20am%20interested%20in%20connecting!" target="_top">
                    <span className="fa-stack fa-3x">
                        <i className="fa fa-circle-thin fa-stack-2x"></i>
                        <i className="fa fa-envelope fa-stack-1x"></i>
                    </span>
                </a>
            </section>
            <section className="download-resume sm-sections" onClick={getResume} >
                <span className="fa-stack fa-3x">
                    <i className="fa fa-circle-thin fa-stack-2x"></i>
                    {/* <i class="fa fa-file fa-stack-1x"></i> */}
                    <i className="fa fa-download fa-stack-1x"></i>
                </span>
            </section>
        </div>
    )
}

export default SocialMedia;