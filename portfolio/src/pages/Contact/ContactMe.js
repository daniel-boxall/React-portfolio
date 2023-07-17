import React from 'react';
import ContactForm from '../../components/form/ContactForm.js';
import Navbar from '../../components/nav/Navbar.js';
import pic from '../../assets/images/form.svg';
import Footer from '../../components/footer/Footer.js'

function ContactMe() {
    return (
        <>
            <div className="body">
                <Navbar />
                <div className="contact-me">
                    <img className="background-image" src={pic} alt="animated email" />
                    <div className="form-card">
                        <ContactForm />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default ContactMe;