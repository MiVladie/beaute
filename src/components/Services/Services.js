import React from 'react';

import Animation from '../../hoc/Animation/Animation';

import classes from './Services.module.scss';

const services = ({ data }) => {
    return (
    	<div className = { classes.Services }>
                { data.map(service => (
                    <div className = { classes.Service } key = { service.name + Math.random() }>
                        <Animation>
                            <div className = { classes.Wrapper }>
                                <h2 className = { classes.Name }>{ service.name }</h2>
                                <p className = { classes.Description }>{ service.description }</p>
                                <p className = { classes.Price }>£{ service.price }</p>
                            </div>
                        </Animation>
                    </div>
                )) }
    	</div>
    );
}

export default services;
