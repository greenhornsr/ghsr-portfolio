import React from 'react';
import './contact.css'

// Components
import { Nav, SocialMedia } from '../index';

const ContactForm = () => {

    return (
        <div >
            <Nav />
            <div className="contact-body">
                <h2>Contact Me</h2>
                <SocialMedia />
                <p>If you would like to learn more about my past projects, visit my github.  Learn more about my professional background, visit my LinkedIn.  I have also added a convenient link to email me directly and <a href="http://localhost:3000/static/media/Steve_Rollins_Resume_July_2022.19f95230.pdf" target="_blank" rel="noopener noreferrer" >download my resume.</a></p>
                <p>Thank you,</p>
                <p>Steven D. Rollins</p>
            </div>
        </div>
    )
}

export default ContactForm;