import React from 'react';

function Greet(props){
    console.log(props);
    return (
        <div>
            <h1> {props.name} - {props.prof} </h1>
            {props.children}
        </div>
    )
}

//Destructuring Props
// function Greet({name}){
    
//     return <h1> Hey {name}</h1>;
// }
//const Greet = () => <h1> I am a functional Component </h1>

export default Greet;