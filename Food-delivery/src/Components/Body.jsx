import React, { useEffect, useState } from "react"
import GetImageUrl from "./GetImageUrl";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";

const Body = ()=> {

  const [listOfResturants , setListOfResturants] = useState([])
  const [searchText , setSearchText] = useState("")
  const [filteredResturants , setFilteredResturants] = useState([])

  useEffect( () => {
    fetchData();
  }, [])

  const fetchData = async() => {
    // const data = await fetch("https://corsproxy.io/?url=https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#")

    // const data = await fetch(
    //   "https://corsproxy.io/?url=https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );

    const data = await fetch(
  "https://api.allorigins.win/raw?url=" + 
  encodeURIComponent("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
);

    const json = await data.json()
      const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    // console.log(restaurants);
      setListOfResturants(restaurants)
      setFilteredResturants(restaurants)
  }

  // if(listOfResturants.length === 0){
  //   return <Shimmer/>
  // }

  return listOfResturants.length=== 0?(
      <Shimmer/>
        ) :(
    <div className=' body overflow-x-hidden box-border'>
      <div className='filter m-2.5 flex gap-2.5'>
        <div className="search ">
          <input type="text" 
          value={searchText} 
          onChange={(e) => {
            setSearchText(e.target.value)
          }}
          className="border border-black ml-2.5" />
          <button 
          className="bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer font-medium rounded-2xl px-4 py-2 ml-0.5"
          onClick={ () => {            
            const filteredResturant = listOfResturants.filter( (res) => res.info.name.toLowerCase(). includes(searchText.toLocaleLowerCase()))
            setFilteredResturants(filteredResturant)
          }}
        
          >Search</button>
        </div>
        <button className="filter-btn bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 ml-2.5  rounded-2xl cursor-pointer font-medium" 
        onClick={() => {
  const filteredList = listOfResturants.filter((res) => res.info.avgRatingString >= 4.6)
  setFilteredResturants(filteredList)
          }}>Top rated resturants</button>
      </div>
      <div className="resturant-container flex flex-wrap gap-7 ml-2.5">
          {filteredResturants.map((restaurant, index) => (
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