import React, { Component } from 'react';
import './Authentication.scss';
import { GoogleLogin } from 'react-google-login';
// import SignIn from './SignIn/SignIn';

class Authentication extends Component {
    responseGoogle = (response) => {
        console.log(response);
    };

    render(){
        return (
            <GoogleLogin
                clientId="1079535547219-snvt7pe6ctpohpf854jin38ahrn7s9pb.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
            />
        )
    }
}

export default Authentication;