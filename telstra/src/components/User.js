import React from 'react'

function User({userName}) {
    if(userName === "React"){
        throw new Error("Not a User")
    }

    return (
        <div>
            {userName} 
        </div>
    )
}

export default User
