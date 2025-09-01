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
        ?.filter(c => c?.card?.card?.info) 
        ?.map(c => c.card.card.info) || [];
    
setResInfo(resArray);


    }  

    if(resInfo === null) return <Shimmer/>
    
    

    return (
        <div>
            {resInfo.map((info, i) => (
        <div 
    key={i} 
    className="max-w-3xl mx-auto my-13 bg-white rounded-lg shadow-md p-5 border border-gray-200"
    >

    <h1 className="text-2xl font-bold mb-2">{info.name}</h1>

    
    <div className="flex items-center text-gray-700 text-lg mb-2">
        <span className="flex items-center gap-1">
        ⭐ <span className="font-semibold">{info.avgRatingString}</span>
        </span>
        <span className="mx-2">•</span>
        <span>{info.costForTwoMessage}</span>
    </div>

    
    <h2 className="text-lg font-medium text-gray-800 mb-1">
        {info.cuisines?.join(", ")}
    </h2>

    
    <div className="text-gray-600 text-base">
        <span className="font-semibold">Outlet</span> {info.areaName}
    </div>

    
    <div className="text-gray-600 text-base mt-1">
        ⏱ {info.sla?.slaString || "30-35 mins"}
    </div>
    </div>
))}
<div >
    
    
</div>
        </div>
    )
}

export default RestaurantsMenu;