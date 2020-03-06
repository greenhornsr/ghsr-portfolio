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
                <form action="submit">
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
                </form>
            </div>
            <footer>
                <SocialMedia />
            </footer>
        </div>
    )
}

export default ContactForm;