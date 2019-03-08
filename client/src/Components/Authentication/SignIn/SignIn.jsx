import React from 'react';
import './SignIn.scss';
import Input from '../Input/Input';

const signIn = () => {
    return ( 
        <div className="sign-in-container">
            <h1 className='md-txt'>Sign In</h1>
            <Input/>
            <p className='clickable blue-txt-color'>Continue as guest</p>
        </div> 
    );
};

export default signIn;