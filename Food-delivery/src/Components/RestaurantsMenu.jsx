import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantsMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=296658&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();
    console.log(json);

    // extract restaurant info
    const resArray =
      json?.data?.cards
        ?.filter((c) => c?.card?.card?.info)
        ?.map((c) => c.card.card.info) || [];

    setResInfo(resArray);

    // extract menu items
    const menuCards =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

    const items =
      menuCards[2]?.card?.card?.itemCards?.map((item) => item.card.info) || [];

    setMenuItems(items);
  };

  if (resInfo === null) return <Shimmer />;

  return (
    <div className="max-w-3xl mx-auto my-8">
      {/* Restaurant Info */}
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

      {/* Menu Items */}
      <div className="bg-white rounded-lg shadow-md p-5 border border-gray-200">
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        <ul className="space-y-3">
          {menuItems.map((item) => (
            <li key={item.id} className="flex justify-between">
              <span>{item.name}</span>
              <span className="text-gray-600">
                ₹{item.price / 100 || item.defaultPrice / 100}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantsMenu;
