import React from "react";

const User = (props) => {
    return(
        <div className="p-4 border border-red mt-2">
            <h1 className="text-2xl font-bold">Name : {props.name}</h1>
            <h2 className="text-xl font-medium"> Location : Mumbai</h2>
            <h3 className="text-lg font-medium">Contact : 1234567890</h3>
        </div>
    )
}

export default User;