import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "React"
        }
        console.log("LifeCycleB Inside Constructor")
    }
    
    static getDerivedStateFromProps(props, state){
        console.log("LifeCycleB Inside getDerivedStateFromProps")
        return null;
    }

    componentDidMount(){
        console.log("LifeCycleB Inside componentDidMount")
    }

    shouldComponentUpdate() {
        console.log("LifeCycleB Inside shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifeCycleB Inside getSnapshotBeforeUpdate");
        return null

    }

    componentDidUpdate(){
        console.log("LifeCycleB Inside componentDidUpdate");
    }
    
    render() {
        console.log("LifeCycleB inside render")
        return (
            <div>
                
            </div>
        )
    }
}

export default LifeCycleB
