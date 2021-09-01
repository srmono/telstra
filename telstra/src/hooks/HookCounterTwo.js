import React, {useState} from 'react'

function HookCounterTwo() {

    const initialCount = 0;
    const [count, setCount] = useState(initialCount)
    // const [posts, setPosts] = useState([])
    // const [post, setPost] = useState({})

    const incrementFive = () => {
        for( let i = 0; i < 5; i++){
            // setCount( count + 1)
            setCount( prevCount => prevCount + 1)
        }
    }

    return (
        <div>
            <h2> Count {count} </h2>
            <button onClick={() => setCount(initialCount)}> Reset </button>
            <button onClick={() => setCount(count + 1)}> Increment  </button>
            <button onClick={() => setCount(count - 1 )}> Decrement </button>

            <button onClick={incrementFive}> Increment 5 Times </button>
        </div>
    )
}

export default HookCounterTwo
