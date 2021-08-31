import React from 'react'

function ChildComp(props) {
    return (
        <div>
            <button onClick={() => props.gretHandlder("From child")}> Greet parent </button>
        </div>
    )
}

export default ChildComp
