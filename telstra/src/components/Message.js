import React, { Component } from 'react'

export class Message extends Component {

    constructor(){
        super()

        this.state = {
            message: "Welcome to State"
        }
    }
    
    changeMessage(){
        //this.state.message = "This is updated message" // can't update directly
        this.setState({
            message: "Thank you for the update"
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={ () => this.changeMessage()}> Change Message </button>
            </div>
        )
    }
}

export default Message
