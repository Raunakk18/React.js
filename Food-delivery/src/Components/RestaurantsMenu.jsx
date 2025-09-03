import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantsMenu = () => {
  const { resId } = useParams(); // ✅ get restaurantId from URL
  const [resInfo, setResInfo] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, [resId]); 

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );

    const json = await data.json();
    console.log(json);

    
    const resArray =
      json?.data?.cards
        ?.filter((c) => c?.card?.card?.info)
        ?.map((c) => c.card.card.info) || [];

    setResInfo(resArray);

    
    const menuCards =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

    const items = menuCards
      .map((c) => c?.card?.card?.itemCards)
      .filter(Boolean)
      .flat()
      .map((item) => item.card.info);

    setMenuItems(items);
  };

  if (resInfo === null) return <Shimmer />;

  return (
    <div className="max-w-3xl mx-auto my-8">
      
      {resInfo.map((info, i) => (
        <div
          key={i}
          className="bg-white rounded-lg shadow-md p-5 border border-gray-200 mb-6"
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

      <div className="bg-white rounded-lg shadow-md p-5 border border-gray-200">
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        {menuItems.length === 0 ? (
          <p>No menu items found</p>
        ) : (
          <ul className="space-y-3">
            {menuItems.map((item, idx) => (
              <li
                key={`${item.id}-${idx}`}
                className="flex justify-between items-start border-b border-gray-400 p-2 pb-10 bg-white mt-5"
              >
                
                <div className="flex-1 pr-4">
                  <span className="font-bold text-xl">{item.name}</span>
                  <h1 className="font-bold pt-1.5">
                    ₹{item.price ? item.price / 100 : item.defaultPrice ? item.defaultPrice / 100 : "N/A"}
                  </h1>
                  <h1 className="text-gray-600 font-medium">{item.description}</h1>
                </div>
                {item.imageId && (
                  <div className="w-40 flex-shrink-0 flex justify-end">
                    <img
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_200,c_fill/${item.imageId}`}
                      alt={item.name}
                      className="rounded-lg object-cover w-full h-auto"
                    />
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default RestaurantsMenu;
