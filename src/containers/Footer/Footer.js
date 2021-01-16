import React from 'react';

import marker from '../../assets/icons/address.png';
import phone from '../../assets/icons/phone.png';
import mail from '../../assets/icons/email.png';

import classes from './Footer.module.scss';

const footer = () => {
    return (
    	<footer className = { classes.Footer }>
            <div className = { classes.Main }>
                <div className = { classes.About }>
                    <h1 className = { classes.Name }>About us</h1>
                    <div className = { classes.Line } />
                    <p className = { classes.Description }>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Similique Dolorem Quisquam Laudantium, Incidunt Id Laborum, Tempora Aliquid Labore Minus. Nemo Maxime, Veniam!</p>
                </div>

                <div className = { classes.Links }>
                    <h1 className = { classes.Name }>Links</h1>
                    <div className = { classes.Line } />
                    <ul className = { classes.Pages }>
                        <li className = { classes.Page }><a href = '#welcome'>About</a></li>
                        <li className = { classes.Page }><a href = '#team'>Team</a></li>
                        <li className = { classes.Page }><a href = '#services'>Services</a></li>
                        <li className = { classes.Page }><a href = '#contact'>Contact</a></li>
                    </ul>
                </div>

                <div className = { classes.Question }>
                    <h1 className = { classes.Name }>Have questions?</h1>
                    <div className = { classes.Line } />
                    <div className = { classes.Info }>
                        <img className = { classes.Icon } src = { marker } alt = 'marker' />
                        <p className = { classes.Text }>203 Fake St. Mountain View<br/>San Francisco, California<br/>USA</p>
                    </div>
                    <div className = { classes.Info }>
                        <img className = { classes.Icon } src = { phone } alt = 'phone' />
                        <p className = { classes.Text }>+44 7342 216193</p>
                    </div>
                    <div className = { classes.Info }>
                        <img className = { classes.Icon } src = { mail } alt = 'mail' />
                        <p className = { classes.Text }>letscomit@gmail.com</p>
                    </div>
                </div>
            </div>

            <p className = { classes.Copyright }>Copyright beauté &copy;{ new Date().getFullYear() } All rights reserved</p>
    	</footer>
    );
}

export default footer;
