import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantsMenu = () => {

    const [resInfo , setResInfo] = useState(null)

    useEffect( () => {
        fetchMenu()
    } , [])

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=296658&catalog_qa=undefined&submitAction=ENTER")

        const json = await data.json()
        console.log(json);
        
        const resArray = json?.data?.cards
      ?.map((c) => c.card?.card?.info)
      .filter(Boolean);

    setResInfo(resArray);

    }

    

    return resInfo === null ? (
        <Shimmer/>
    ) : (
        <div>
            {resInfo.map((info, i) => (
        <div key={i} className=" p-4" >
            <h1 className="text-2xl font-bold">{info.name}</h1>
            <h2 className="text-xl font-medium ">{info.cuisines?.join(", ")}</h2>
            <h2 className=" text-base font-medium">⭐ {info.avgRatingString}</h2>
            <h2 className=" text-base font-medium">💰 {info.costForTwoMessage}</h2>
        </div>
        ))}
        </div>
    )
}

export default RestaurantsMenu