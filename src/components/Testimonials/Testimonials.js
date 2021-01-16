import React, { useState, useEffect } from 'react';

import Animation from '../../hoc/Animation/Animation';

import classes from './Testimonials.module.scss';

const Testimonials = ({ data }) => {
	const [quote, setQuote] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
			if(quote + 1 < data.length)
				setQuote(quote + 1)
			else
				setQuote(0)
        }, 10000);

        return () => clearInterval(interval);
	});
	
    return (
    	<div className = { classes.Testimonials }>			
            <Animation>
				<div className = { classes.Wrapper }>
					<p className = { classes.Symbol }>“</p>
					<p className = { classes.Text }>{ data[quote].text }</p>
					<p className = { classes.Person }>{ data[quote].person }</p>
					<p className = { classes.Type }>{ data[quote].type }</p>

					<div className = { classes.Switch }>
						{ data.map((q, i) => (
							<div className = { [classes.Quote, quote === i ? classes.Active : ''].join(' ') } onClick = { () => setQuote(i) } key = { i } />
						)) }
					</div>
				</div>
			</Animation>
    	</div>
    );
}

export default Testimonials;
