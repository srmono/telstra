import React, { Component } from 'react'

export class ClassClick extends Component {

    clickHandler(){
        console.log("Event Called in Class Component")
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}> Click From Class</button>
            </div>
        )
    }
}

export default ClassClick
