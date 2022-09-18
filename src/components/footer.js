import React from 'react';
import TwitterIcon from '../images/twitter.png';
import FacebookIcon from '../images/facebook.png';
import InstagramIcon from '../images/instagram.png';
import GithubIcon from '../images/github.png';

function Footer() {
    return (
        <div className="footer">
            <ul>
                <li><img className="footer-icon" src={TwitterIcon} alt={'icon'} /></li>
                <li><img className="footer-icon" src={FacebookIcon} alt={'icon'} /></li>
                <li><img className="footer-icon" src={InstagramIcon} alt={'icon'} /></li>
                <li><img className="footer-icon" src={GithubIcon} alt={'icon'} /></li>
            </ul>
        </div>
    )
}

export default Footer;