import React from 'react';
import bhavin from '../images/hero.png';
import linkedln from '../images/linkedin.png';
import email from '../images/email.png';



function Info() {
    return (
        <div className="info">
            <img className="img" src={bhavin} alt={'bhavin-img'} />
            <h2 className="name">Bhavin Borkhataria</h2>
            <h3 className="fd">Frontend Developer</h3>
            <p>Bhavin.Website</p>
            <div className="info-button">
                <button className="but-email"><img className="icon-linkedin" src={email} alt={'email'} />Email</button>
                <button className="but-linkedln"><img className="icon-email" src={linkedln} alt={'linkedln'} />Linkedln</button>
            </div>
        </div>
    )
}

export default Info;