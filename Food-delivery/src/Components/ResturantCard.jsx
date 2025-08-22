import React from "react";
import GetImageUrl from "./GetImageUrl";


const ResturantCard = ({ resData }) => {
  const imageUrl = GetImageUrl(resData?.info?.cloudinaryImageId);
  return (
    <div className='resturant-card  w-60  p-1.5  border border-transparent hover:border-black cursor-pointer transition-transform duration-500 ease-in-out hover:scale-95 'style={ {backgroundColor : '#f0f0f0'}}>
      <img src={imageUrl} alt={resData?.info?.name} />
      <h3 className='text-lg font-semibold'>{resData?.info?.name}</h3>
      <h4 className='font-medium'>{resData?.info?.cuisines?.join(", ")}</h4>
      <h4  className='font-medium' >{resData?.info?.costForTwo}</h4>
      <h4>⭐{resData?.info?.avgRatingString}</h4>
      <h4>{resData?.info?.sla?.slaString}</h4>
      
    </div>
  );
};

export default ResturantCard