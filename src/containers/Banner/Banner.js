import React, { useState, useEffect } from 'react';

import banner1 from '../../assets/images/banner-01.png';
import banner2 from '../../assets/images/banner-02.png';

import facebook from '../../assets/icons/facebook.png';
import twitter from '../../assets/icons/twitter.png';
import instagram from '../../assets/icons/instagram.png';
import pinterest from '../../assets/icons/pinterest.png';

import classes from './Banner.module.scss';

const Banner = () => {
    const [background, setBackground] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setBackground(background === 0 ? 1 : 0)
        }, 10000);

        return () => clearInterval(interval);
    });

    return (
    	<section className = { classes.Banner } id = 'home'>
    		<div className = { classes.Background } style = {{ backgroundImage: 'url(' + (background === 0 ? banner1 : banner2) + ')' }}  />

            <div className = { classes.Promo }>
                    <h2 className = { classes.Welcome }>Welcome to Beauté</h2>
                    <h1 className = { classes.Main }>Style is forever</h1>
                <a className = { classes.Button } href = '#welcome'>Read more</a>
            </div>

            <div className = { classes.Social }>
                <p className = { classes.Text }>Follow us on social media</p>
                <ul className = { classes.Links }>
                    <li className = { classes.Link }><a href = 'https://facebook.com/letscomit' target = '_blank' rel = 'noopener noreferrer'><img src = { facebook } alt = 'facebook' /></a></li>
                    <li className = { classes.Link }><a href = 'https://twitter.com/letscomit' target = '_blank' rel = 'noopener noreferrer'><img src = { twitter } alt = 'twitter' /></a></li>
                    <li className = { classes.Link }><a href = 'https://instagram.com/letscomit' target = '_blank' rel = 'noopener noreferrer'><img src = { instagram } alt = 'instagram' /></a></li>
                    <li className = { classes.Link }><a href = 'https://pinterest.com/letscomit' target = '_blank' rel = 'noopener noreferrer'><img src = { pinterest } alt = 'pinterest' /></a></li>
                </ul>
            </div>

            <div className = { classes.Indicator }>
                <div className = { classes.Lines }>
                    <div className = { [classes.Line, background === 0 ? classes.Active : ''].join(' ') } onClick = { () => setBackground(0) } />
                    <div className = { [classes.Line, background === 1 ? classes.Active : ''].join(' ') } onClick = { () => setBackground(1) } />
                </div>

                <div className = { classes.Switch }>
                    <button className = { classes.Next } onClick = { () => setBackground(background === 0 ? 1 : 0) }>{ '<' }</button>
                    <button className = { classes.Next } onClick = { () => setBackground(background === 0 ? 1 : 0) }>{ '>' }</button>
                </div>
            </div>
    	</section>
    );
}

export default Banner;
