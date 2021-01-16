import React from 'react';

import Animation from '../../hoc/Animation/Animation';

import classes from './Section.module.scss';

const section = (props) => {
    return (
    	<section className = { classes.Section } id = { props.id } style = {{ ...props.style }}>
            <Animation>
                { props.name && props.description && 
                    <div className = { classes.Main }>
                        <h1 className = { classes.Name }>{ props.name }</h1>
                        <p className = { classes.Description }>{ props.description }</p>
                    </div> }
            </Animation>

            { props.children }
    	</section>
    );
}

export default section;
