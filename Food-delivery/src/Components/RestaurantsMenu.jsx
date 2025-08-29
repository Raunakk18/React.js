import React from "react";
import { useEffect } from "react";

const RestaurantsMenu = () => {

    useEffect( () => {
        fetchMenu()
    }
        , [])

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=678579&catalog_qa=undefined&submitAction=ENTER")

        const json = await data.json()
        console.log(json);
    }

    return (
        <div> my menu</div>
    )
}

export default RestaurantsMenu;