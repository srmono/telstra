import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    
    render() {

        return this.state.isLoggedIn && <div> Welcome React </div>

        // return (
        //     this.state.isLoggedIn ?
        //         (<div> Welcome React </div> ):
        //         ( <div> Welcome Guest </div> )
        // )

        // let message;

        // if(this.state.isLoggedIn){
        //     message = <div> Welcome React </div>
        // } else {
        //     message = <div> Welcome Guest </div>
        // }

        // return <div> {message} </div>
        // if(this.state.isLoggedIn){
        //     return (
        //         <div>
        //             <div> Welcome React </div>
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             <div> Welcome Guest </div>
        //         </div>
        //     )
        // }
    }
}

export default UserGreeting
