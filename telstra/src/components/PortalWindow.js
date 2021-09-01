import React from 'react'
import ReactDOM from 'react-dom';

function PortalWindow() {
    return ReactDOM.createPortal(
        <h1>
            This is a Portal
        </h1>
        ,
        document.getElementById("portal-root"))
}

export default PortalWindow
