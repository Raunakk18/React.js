import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {

    const err = useRouteError()
    console.log(err);
    return ( 
        <>
        <div className="flex justify-center items-center my-4 text-2xl font-medium">
            <h1>Oops!!!</h1>    
            <br />
            <h2>Something went wrong😔</h2>
        </div>
        <div className="flex justify-center items-center my-4 text-2xl font-medium">
                <h3>{err.status}</h3>
                <h3>{err.statusText}</h3>
            </div>
            </>
    )
}

export default Error;