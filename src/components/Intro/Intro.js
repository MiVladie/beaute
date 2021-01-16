import React from 'react';

import Animation from '../../hoc/Animation/Animation';

import classes from './Intro.module.scss';

const intro = ({ image, main, message, person }) => {
    return (
        <div className = { classes.Intro }>
            <Animation>
                <img src = { image } className = { classes.Image } alt = 'welcome' />

                <div className = { classes.Info }>
                    <div className = { classes.Wrapper }>
                        <h1 className = { classes.Main }>{ main }</h1>
                        <div className = { classes.Line } />
                        <p className = { classes.Message }>“{ message }„</p>
                        <p className = { classes.Person }>— { person }</p>
                    </div>
                </div>
            </Animation>
        </div>
    );
}

export default intro;
