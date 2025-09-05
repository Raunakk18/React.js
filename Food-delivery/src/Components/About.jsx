import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return(
        <div  className=" m-3   ">
            <h1 className=" text-2xl font-medium ">
                Welcome to our Food delivery website
            </h1>
            <User name = {"raunak function "}/>
            <UserClass name = {"Raunak class"} 
                location = {"Mumbai"} 
                contact = {"123456789"}/>
        </div>
    )
}

export default About