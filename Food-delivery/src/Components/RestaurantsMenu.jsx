import React, { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantsMenu = () => {

    const [resInfo , setResInfo] = useState(null)

    useEffect( () => {
        fetchMenu()
    }
        , []);

const fetchMenu = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=296658&catalog_qa=undefined&submitAction=ENTER")

    const json = await data.json()
    setResInfo(json.data)
    console.log(json);
}


    return resInfo === null ? 
    (<Shimmer/> 
    ) : (
        <div> 
            <h1></h1>
        </div>
    )
}

export default RestaurantsMenu;