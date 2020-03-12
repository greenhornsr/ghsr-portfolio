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
                <p>If you would like to learn more about my past projects, visit my github.  Learn more about my professional background, visit my LinkedIn.  I have also added a convenient link to email me directly and download my resume.</p>
                <p>Thank you,</p>
                <p>Steven D. Rollins</p>
                {/* <form action="submit">
                    <label> Name: 
                        <input type="text" name="name" />    
                    </label>
                    <label> Email: 
                        <input type="email" name="email" />    
                    </label>
                    <label> Phone: 
                        <input type="tel" name="phone" />    
                    </label>
                    <label> file: 
                        <input type="file" name="file" />    
                    </label>
                    <input type="image" src="../navcomponents/Logo" alt="submit" />    
                </form> */}
            </div>
        </div>
    )
}

export default ContactForm;