import React, { Component } from 'react'

class Counter extends Component {

    //rconst
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    increment(){
       // this.state.count = this.state.count + 1;
    //    this.setState({
    //        count: this.state.count + 1
    //    }, () => console.log("Call back inside SetSTate: ", this.state.count))

    //     console.log("Outside SetState: ", this.state.count); 

        this.setState( (prevState) => ({
            count: prevState.count + 1
        }) )
    }

    updateFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <h1> { this.state.count } </h1>
                <button onClick={() => this.increment()}> Increment </button>
                <button onClick={() => this.updateFive()}> Update Five Times </button>
            </div>
        )
    }
}

export default Counter
