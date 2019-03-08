import React, { Component } from 'react';
import './Input.scss';

class Input extends Component {
    state = {
        value: ''
    };

    onChange(e){
        console.log(e.target.value);
    }

    render(){
        return ( 
            <div className="input-container">
                <input onChange={this.onChange} type="text" className='sm-txt' placeholder={'Email or Phone'}/>
            </div> 
        );
    }
};

export default Input;