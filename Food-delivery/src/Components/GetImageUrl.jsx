import React from "react";


const GetImageUrl = (imageId) => {
  if (!imageId) return "";

  
  if (imageId.includes("RX_THUMBNAIL")) {
    return `https://media-assets.swiggy.com/swiggy/image/upload/${imageId}`;
  }

  return `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`;
};

export default GetImageUrl