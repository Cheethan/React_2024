import React  from "react";
import { Link } from "react-router-dom";

function Error(){
    return(
        <>
            <h1>404 Not-Found.</h1>
            <h2><Link to="/">Home</Link></h2>
        </>
    )
}

export default Error