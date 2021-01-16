import React from 'react';

import Animation from '../../hoc/Animation/Animation';

import classes from './Contact.module.scss';

const contact = ({ address, coordinates, phone, email, open }) => {
    return (
            <div className = { classes.Contact }>
                <div className = { classes.Info }>                    			
                    <div className = { classes.Wrapper }>
                        <Animation>
                            <div className = { classes.Section }>
                                <h2 className = { classes.Type }>Address</h2>
                                <p className = { classes.Text }>{ address }</p>
                            </div>
                            
                            <div className = { classes.Section }>
                                <h2 className = { classes.Type }>Contact Information</h2>
                                <p className = { classes.Text }>{ phone }</p>
                                <p className = { classes.Text }>{ email }</p>
                            </div>
                            
                            <div className = { classes.Section }>
                                <h2 className = { classes.Type }>Open hours</h2>
                                { open.map((d, i) => (
                                    <React.Fragment key = { i }>
                                        <p className = { classes.Meta }>{ d[0] }</p>
                                        <p className = { classes.Text }>{ d[1] }</p>
                                    </React.Fragment>
                                )) }
                            </div>
                        </Animation>
                    </div>
                </div>

                <div className = { classes.Appointments }>
                    <Animation>
                        <h1 className = { classes.Name }>Appointments</h1>
                    </Animation>

                    <form className = { classes.Form }>
                        <Animation>
                            <div className = { classes.Double }>
                                <input className = { classes.Input } type = 'text' placeholder = 'First name' />
                                <input className = { classes.Input } type = 'text' placeholder = 'Last name' />
                            </div>
                            
                            <div className = { classes.Double }>
                                <input className = { classes.Input } onFocus = { (e) =>  e.currentTarget.type = 'date' } onBlur = {  (e) =>  e.currentTarget.type = 'text' } placeholder = 'Date' />
                                <input className = { classes.Input } type = 'number' placeholder = 'Phone' />
                            </div>
                            
                            <textarea className = { classes.Message } placeholder = 'Message' />

                            <button className = { classes.Submit } type = 'submit'>Submit</button>
                        </Animation>
                    </form>                    
                </div>
            </div>
    );
}

export default contact;
