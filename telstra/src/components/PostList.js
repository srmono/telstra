import axios from 'axios'
import React, { Component } from 'react'


class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
             errMessage: ""
        }
    }

    componentDidMount(){
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then( response => {
                console.log(response)
                this.setState({ posts: response.data})
            } )
            .catch( error => {
                console.log(error);
                this.setState({ errMessage: "Error While retreving data "})
            })
    }
    
    render() {

        const { posts, errMessage } = this.state;

        return (
            <div>
                List of Posts 
                {
                    posts.length ?
                        posts.map( post => <div key={post.id}> { post.title } </div> ) :
                        null
                }
                {
                    errMessage ? <div>{ errMessage }</div> : null
                }
            </div>
        )
    }
}

export default PostList
