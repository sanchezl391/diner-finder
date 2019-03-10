import React, { Component } from 'react';
import './Header.scss';

class Header extends Component{
    render(){
        return (
            <div className="header-container">
                <h2>Diner Finder</h2>
                <div className="log-in-container">
                    <img src="https://img.icons8.com/color/25/000000/google-logo.png"></img>
                    <p>Sign in with Google</p> 
                </div>   
            </div>
        );
    }
}

export default Header;