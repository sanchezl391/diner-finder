import React, { Component } from 'react';
import './Header.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component{
    renderContent() {
        console.log(this.props.auth);
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <div className="buttons-container">
                        <Link to='/find'>
                            <button 
                                className='guest-btn button-hover sm-txt'
                                onClick={this.props.onGuestContinue}>
                                    Continue as guest
                            </button>
                        </Link>
                        <a href="/auth/google">
                            <div className="log-in-container button-hover sm-txt">
                                <img alt="google logo" src="https://img.icons8.com/color/25/000000/google-logo.png"></img>
                                <p>Sign in with Google</p> 
                            </div>   
                        </a>
                    </div>
                );
            default: //logged in
                return (
                    <a className="logout-btn button-hover sm-txt" href="/api/logout"><p>Logout</p></a>
                );
        }
    }

    render() {
        return (
            <div className="header-container">
                <Link to="/"><h2>Diner Finder</h2></Link>
               { this.renderContent() }
            </div>
        );
    }
}

const mapDispathToProps = dispatch => {
    return {
        onGuestContinue: () => dispatch({type: 'GUEST'})
    };
};

function mapStateToProps({ auth }){
    return { auth };
};

export default connect(mapStateToProps, mapDispathToProps)(Header);