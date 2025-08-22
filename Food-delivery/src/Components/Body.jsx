import React, { useState } from "react"
import GetImageUrl from "./GetImageUrl";
import ResturantCard from "./ResturantCard";
import resList from "../utils/mockdata";

const Body = ()=> {

  const [listOfResturants , setListOfResturants] = useState(resList)

  return(
    <div className=' body overflow-x-hidden box-border'>
      <div className='filter m-2.5 '>
        <button className="filter-btn bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-2xl cursor-pointer font-medium" 
        onClick={ () => {
          const filteredList = listOfResturants.filter( (res) => res.info.avgRatingString>=4.6)
          setListOfResturants(filteredList)
          console.log(filteredList);
        }}>Top rated resturants</button>
      </div>
      <div className="resturant-container flex flex-wrap gap-7 ml-2.5">
          {listOfResturants.map((restaurant, index) => (
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