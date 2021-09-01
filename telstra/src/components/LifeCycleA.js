import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "React"
        }
        console.log("LifeCycleA Inside Constructor")
    }

    static getDerivedStateFromProps(props, state){
        console.log("LifeCycleA Inside getDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("LifeCycleA Inside componentDidMount")
    }

    shouldComponentUpdate() {
        console.log("LifeCycleA Inside shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifeCycleA Inside getSnapshotBeforeUpdate");
        return null

    }

    componentDidUpdate(){
        console.log("LifeCycleA Inside componentDidUpdate");
    }

    changeState = () => {
        this.setState({
            name: "React-Redux"
        })
    }
    
    render() {
        console.log("LifeCycleA inside render")
        return (
            <div>
                <h1> {this.state.name}</h1>
                <LifeCycleB />
                <button onClick={this.changeState}>Chnage state</button>
            </div>
        )
    }
}

export default LifeCycleA
