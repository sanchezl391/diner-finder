import React, { Component } from 'react';
import './Header.scss';
import { connect } from 'react-redux';

class Header extends Component{
    renderContent() {
        console.log(this.props.auth);
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <a href="/auth/google">
                        <div className="log-in-container">
                            <img alt="google logo" src="https://img.icons8.com/color/25/000000/google-logo.png"></img>
                            <p>Sign in with Google</p> 
                        </div>   
                    </a>
                );
              
            default: //logged in
                return (
                    <a href="/api/logout"><p>Logout</p></a>
                );
        }
    }

    render() {
        return (
            <div className="header-container">
                <h2>Diner Finder</h2>                
               { this.renderContent() }
            </div>
        );
    }
}

function mapStateToProps({ auth }){
    return { auth };
};

export default connect(mapStateToProps)(Header);