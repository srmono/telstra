import React, { Component } from 'react';

class Welcome extends Component{

    render(){

        const {name, prof} = this.props;

        return (
            <div>
                <h1> {name} - {prof} </h1>
            </div>
        )
    }
}

export default Welcome;