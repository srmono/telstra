import React, { Component } from 'react'
import ChildComp from './ChildComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentMessage: "This is the message from parent"
        }
    }

    greetParent = (childMsg) => {
        alert( `Hello ${this.state.parentMessage} , ${childMsg}`)
    }
    
    render() {
        return (
            <div>
                <ChildComp gretHandlder={this.greetParent} />
            </div>
        )
    }
}

export default ParentComp
