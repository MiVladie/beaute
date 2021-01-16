import React, { useState, useEffect } from 'react';

import classes from './Navigation.module.scss';

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);

    const [expand, setExpand] = useState(false);

    useEffect(() => {
        if(expand && window.screen.width >= 1025)
            setExpand(false);

        if(!expand) document.body.style.overflow = 'visible';
        else document.body.style.overflow = 'hidden';
    }, [expand]);

    const expandMenuHandler = (event) => {
        event.preventDefault();

        setExpand(!expand);
    }
    
    window.addEventListener('scroll', () => {
        setScrolled(window.scrollY > 75);  
    });

    return (
    	<nav className = { [classes.Navigation, scrolled ? classes.Scrolled : '', expand ? classes.Expand : ''].join(' ') }>
            <div className = { classes.Hide } />

            <a className = { classes.Brand } href = '#home' onClick = { () => setExpand(false) }>
                <p className = { classes.Logo }>beauté</p>
                <p className = { classes.Name }>Hair & Beauty Salon</p>
            </a>

            <button className = { classes.Menu } onClick = { (event) => expandMenuHandler(event) } />

            <ul className = { classes.Links }>
                <li className = { classes.Link }>
                    <a className = { classes.Text } href = '#welcome' onClick = { () => setExpand(!expand) }>About</a>
                </li>
                
                <li className = { classes.Link }>
                    <a className = { classes.Text } href = '#team' onClick = { () => setExpand(!expand) }>Team</a>
                </li>
                
                <li className = { classes.Link }>
                    <a className = { classes.Text } href = '#services' onClick = { () => setExpand(!expand) }>Services</a>
                </li>
                
                <li className = { classes.Link }>
                    <a className = { classes.Text } href = '#contact' onClick = { () => setExpand(!expand) }>Contact</a>
                </li>
            </ul>
    	</nav>
    );
}

export default Navigation;
