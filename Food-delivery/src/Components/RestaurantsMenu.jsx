import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantsMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        try {
            const data = await fetch(
                "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=78036&catalog_qa=undefined&submitAction=ENTER"
            );
            
            const json = await data.json();
            console.log(json);

            // Extract restaurant info (usually in cards[2])
            const restaurantInfo = json?.data?.cards?.find(card => 
                card?.card?.card?.info?.name
            )?.card?.card?.info;

            setResInfo(restaurantInfo);

            // Extract menu items from grouped cards
            const groupedCards = json?.data?.cards?.find(card => 
                card?.groupedCard?.cardGroupMap?.REGULAR
            )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

            if (groupedCards) {
                const allMenuItems = [];
                
                groupedCards.forEach(card => {
                    if (card?.card?.card?.itemCards) {
                        const categoryTitle = card?.card?.card?.title || "Items";
                        const items = card.card.card.itemCards.map(item => ({
                            ...item.card.info,
                            category: categoryTitle
                        }));
                        allMenuItems.push(...items);
                    }
                });
                
                setMenuItems(allMenuItems);
            }

        } catch (error) {
            console.error("Error fetching menu:", error);
        }
    };

    if (resInfo === null) {
        return <Shimmer />;
    }

    return (
        <div className="max-w-4xl mx-auto p-4">
            {/* Restaurant Info Section */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 mb-6">
                <h1 className="text-3xl font-bold mb-3">{resInfo.name}</h1>
                
                <div className="flex items-center text-gray-700 text-lg mb-3">
                    <span className="flex items-center gap-1">
                        ⭐ <span className="font-semibold">{resInfo.avgRatingString}</span>
                        <span className="text-sm text-gray-500">({resInfo.totalRatingsString})</span>
                    </span>
                    <span className="mx-2">•</span>
                    <span>{resInfo.costForTwoMessage}</span>
                </div>

                <h2 className="text-lg font-medium text-gray-800 mb-2">
                    {resInfo.cuisines?.join(", ")}
                </h2>

                <div className="text-gray-600 text-base">
                    <div className="mb-1">
                        <span className="font-semibold">Outlet:</span> {resInfo.areaName}
                    </div>
                    <div>
                        ⏱ {resInfo.sla?.slaString || "30-35 mins"}
                    </div>
                </div>
            </div>

            {/* Menu Section */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h2 className="text-2xl font-bold mb-4">Menu</h2>
                
                {menuItems.length > 0 ? (
                    <div className="space-y-4">
                        {menuItems.map((item, index) => (
                            <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                                <div className="flex justify-between items-start">
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
                                        <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                                        <div className="flex items-center gap-2 text-sm">
                                            <span className="font-semibold text-green-600">
                                                ₹{(item.price || item.defaultPrice) / 100}
                                            </span>
                                            {item.ratings?.aggregatedRating?.rating && (
                                                <span className="text-gray-500">
                                                    ⭐ {item.ratings.aggregatedRating.rating}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    {item.imageId && (
                                        <img 
                                            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.imageId}`}
                                            alt={item.name}
                                            className="w-24 h-24 object-cover rounded-lg ml-4"
                                        />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500">No menu items available</p>
                )}
            </div>
        </div>
    );
};

export default RestaurantsMenu;