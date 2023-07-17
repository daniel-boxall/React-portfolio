import React from 'react';
import './Footer.css';
import ButtonMailto from '../footer/ButtonMailto';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';


function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-link-wrapper'>
                <div className='row'>
                    <div className='column'>
                        <h2 className='name'>Daniel Boxall</h2>
                    </div>
                    <div className='column'>
                        <h2>
                            <Link  target="_blank" to='https://linkedin.com/in/daniel-boxall-34a951257'><LinkedInIcon className="link" /></Link>
                            <Link  target="_blank" to='https://github.com/daniel-boxall'><GitHubIcon className="link"/></Link>
                            <ButtonMailto label={<EmailIcon className="link" />} mailto='mailto:danielboxall07@gmail.com' />
                        </h2>
                    </div>
                </div>
            </div>
            <small className='website-rights'> Daniel Boxall © 2023</small>
        </div>
    );
}


export default Footer;
