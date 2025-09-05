// class based Component

import React from "react";



class UserClass extends React.Component{
    constructor(props){
        super(props)
        console.log(props);
    }

    render(){
        const {name , location , contact} = this.props

        return(
            <div className="p-4 border border-red mt-2">
            <h1 className="text-2xl font-bold">Name : {name} </h1>
            <h2 className="text-xl font-medium"> Location : {location}</h2>
            <h3 className="text-lg font-medium">Contact : {contact}</h3>
        </div>
        )
    }
}

export default UserClass;

