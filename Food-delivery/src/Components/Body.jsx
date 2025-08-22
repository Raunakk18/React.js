import React, { useState } from "react"
import GetImageUrl from "./GetImageUrl";
import ResturantCard from "./ResturantCard";
// import resList from "../utils/mockdata";

const Body = ()=> {

  const [listOfResturants , setListOfResturants] = useState( [
    {
                    "info": {
                      "id": "78036",
                      "name": "Burger King",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/8021373a-e4e9-4780-b502-59d621ee2c7b_78036.jpg",
                      "locality": "Central Plaza, Kalina",
                      "areaName": "Santacruz East",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Burgers",
                        "American",
                        
                      ],
                      "avgRating": 4.3,
                      "avgRatingString": "4.3"
                    }
  },
    {
                    "info": {
                      "id": "78037",
                      "name": "KFC",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/8021373a-e4e9-4780-b502-59d621ee2c7b_78036.jpg",
                      "locality": "Central Plaza, Kalina",
                      "areaName": "Santacruz East",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Burgers",
                        "American",
                        
                      ],
                      "avgRating": 3.8,
                      "avgRatingString": "3.8"
                    }
  },
    {
                    "info": {
                      "id": "78038",
                      "name": "MCD",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/8021373a-e4e9-4780-b502-59d621ee2c7b_78036.jpg",
                      "locality": "Central Plaza, Kalina",
                      "areaName": "Santacruz East",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Burgers",
                        "American",
                        
                      ],
                      "avgRating": 4.8,
                      "avgRatingString": "4.8"
                    }
  }
  ])

  return(
    <div className=' body overflow-x-hidden box-border'>
      <div className='filter m-2.5 '>
        <button className="filter-btn bg-indigo-600 hover:bg-indigo-800 text-white px-4 py-2 rounded-2xl cursor-pointer font-medium" 
        onClick={ () => {
          const filteredList = listOfResturants.filter( (res) => res.info.avgRatingString>4)
          console.log(filteredList);
          setListOfResturants(filteredList)
        }}>Top rated resturants</button>
      </div>
      <div className="resturant-container flex flex-wrap gap-7">
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