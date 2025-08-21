import React from "react"
import GetImageUrl from "./GetImageUrl";
import ResturantCard from "./ResturantCard";
import resList from "../utils/mockdata";

const Body = ()=> {
  return(
    <div className=' body overflow-x-hidden box-border'>
      <div className='filter '>
        <button className="filter-btn">Filter</button>
      </div>
      <div className="resturant-container flex flex-wrap gap-7">
          {resList.map((restaurant, index) => (
        <ResturantCard 
          key={restaurant.info.id || index} 
          resData={restaurant} 
        />
      ))}
      </div>
    </div>
  )
} 
export default Body;