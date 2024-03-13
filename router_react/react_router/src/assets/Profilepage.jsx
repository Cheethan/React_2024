import React from "react";
import { Link, useParams } from "react-router-dom"

function Profilepage(){

    const x = useParams();
    console.log(x);

    return(
        <><h1>Profile-{x.id}</h1></>
    )
}

export default Profilepage