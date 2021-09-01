import axios from 'axios'
import React, { Component } from 'react'


class PostsForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             userId: "",
             title: "",
             body: ""
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state)
        axios
            .post("https://jsonplaceholder.typicode.com/posts", this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
    
    render() {
        const {title, userId, body} = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label>User Id</label>
                        <input 
                            type="text" 
                            name="userId" 
                            value={userId}
                            onChange={this.changeHandler} />
                    </div>
                    <div>
                        <label>Title</label>
                        <input type="text" name="title" value={title} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <label>Body</label>
                        <input type="text" name="body" value={body} onChange={this.changeHandler}/>
                    </div>
                    <button type="submit"> Submit </button> 
                </form>
                
            </div>
        )
    }
}

export default PostsForm
