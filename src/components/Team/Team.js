import React from 'react';

import Animation from '../../hoc/Animation/Animation';

import classes from './Team.module.scss';

const team = ({ data }) => {
    return (
    	<div className = { classes.Team }>
                { data.map(member => (
                    <div className = { classes.Member } key = { member.name + Math.random() }>
                        <Animation>
                            <div className = { classes.Wrapper }>
                                <img src = { member.image } className = { classes.Image } alt = { member.name } />
                                <p className = { classes.Name }>{ member.name }</p>
                                <p className = { classes.Type }>{ member.type }</p>
                                <p className = { classes.Description }>{ member.description }</p>
                            </div>
                        </Animation>
                    </div>
                )) }
    	</div>
    );
}

export default team;
