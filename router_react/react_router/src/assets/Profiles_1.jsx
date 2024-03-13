import React from "react";
import { Link } from "react-router-dom"

function Profiles(){

    const nums = [1,2,3,4,5];

    return(
        <>
            <div className="flex flex-col gap-2">
                {nums.map((i) => (
                    
                    <Link key = {i} to={`/profiles/${i}`}>Profile{i}</Link>
                ))}
            </div>
        </>
    )
}

export default Profiles