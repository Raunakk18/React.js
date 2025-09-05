import React from "react";
import User from "./User";

const About = () => {
    return(
        <div  className="border border-red m-3   ">
            <h1 className=" text-2xl font-medium ">
                Welcome to our Food delivery website
            </h1>
            <User/>
        </div>
    )
}

export default About