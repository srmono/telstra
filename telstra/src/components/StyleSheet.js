import React from 'react'
import "./myStyles.css"

const heading = {
    fontSize: '63px',
    color: "tomato"
}

function StyleSheet(props) {
    let className = props.primary ? "primary" : ''
    return (
        <div>
            {/* <h1 className="primary"> Styles </h1> */}
            {/* <h1 className={`${className} fontSize`}> Styles </h1> */}
            <h1 style={heading}> Inline Styles </h1>
            {/* <h1 className={styles.success}> Success </h1> */}
        </div>
    )
}

export default StyleSheet