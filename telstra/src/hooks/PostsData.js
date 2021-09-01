import axios from 'axios';
import React, {useState, useEffect} from 'react';


function PostsData() {

    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFromButtonclick, setIdFromButtonclick ] = useState(1);

    // useEffect( () => {
    //     axios
    //         .get('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => {
    //             console.log(res)
    //             setPosts(res.data)
    //         })
    //         .catch( error => {
    //             console.log(error)
    //         })
    // }, [])

    useEffect( () => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch( error => {
                console.log(error)
            })
    }, [idFromButtonclick])

    const handleClick = () => {
        setIdFromButtonclick(id)
    }
    return (
        <div>
            <input type="text" value={id} onChange={ e => setId(e.target.value) } />
            <button onClick={handleClick}> Fetch Post </button>
            <div> { post.title } </div>
            {/* <ul>
                {
                    posts.length && posts.map( post => <li key={post.id}> {post.title} </li>)
                }
            </ul> */}
        </div>
    )
}

export default PostsData
