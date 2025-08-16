import React from 'react'
import './App.css'

const Header = () =>{
  return(
    <div className='header flex justify-between border border-black px-2.5 py-1.5'>
      <div className='logo-container'>
        <img className='logo w-24' src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All" alt="logo" />
      </div>
      <div className='nav-items px-10 '>
        <ul className='flex  text-xl font-medium  '>
          <li className='p-2.5 m-2.5'>Home</li>
          <li className='p-2.5 m-2.5'>About-Us</li>
          <li className='p-2.5 m-2.5'>Menu</li>
          <li className='p-2.5 m-2.5'>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const ResturantCard = (props) => {
  
  const {resData} = props;
  return (
    <div className="resturant-card  w-60  p-1.5  border border-transparent hover:border-black cursor-pointer transition-transform duration-500 ease-in-out hover:scale-95" style={ {backgroundColor : '#f0f0f0'}} >

      <img className=' w-full h-40 object-cover'
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/12/30/4016da64-14c4-414e-a125-f0dd9f32b96d_4db8ba2c-d53d-4d5a-8e59-e0ec7d1766d7.jpg_compressed" alt="res-logo"  />

          <h3 className='text-lg font-bold'>{resData.info.name}</h3>
          <h4 className='text-base font-semibold'>{resData.info.cuisines.join(" ,")}</h4>
          <h4 className='text-base font-semibold'>{resData.info.areaName}</h4>
          <h4 className='text-base font-semibold'>{resData.info.costForTwo}</h4>
          <h4 className='text-base font-semibold'>{resData.info.avgRating}🌟</h4>
          <h4 className='text-base font-semibold'>{resData.info.sla.slaString} </h4>
    </div>
  )
}

const resList = {
                    "info": {
                      "id": "78036",
                      "name": "Burger King",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/8021373a-e4e9-4780-b502-59d621ee2c7b_78036.jpg",
                      "locality": "Central Plaza, Kalina",
                      "areaName": "Santacruz East",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Burgers",
                        "American"
                      ],
                      "avgRating": 4.3,
                      "parentId": "166",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "38K+",
                      "sla": {
                        "deliveryTime": 23,
                        "lastMileTravel": 2.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "2.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-17 05:00:00",
                        "opened": true
                      },
                      "badges": {},
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {},
                          "textBased": {},
                          "textExtendedBadges": {}
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹49",
                        "discountCalloutInfo": {
                          "message": "Free Delivery",
                          "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-05b86121-babc-4056-ac5f-768c5d778218"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/burger-king-central-plaza-kalina-santacruz-east-rest78036",
                      "type": "WEBLINK"
                    }
                  }


const Body = ()=> {
  return(
    <div className=' body'>
      <div className='search p-2.5 flex justify-center items-center'>Search</div>
      <div className="resturant-container flex flex-wrap">
        <ResturantCard resData = {resList}
        />
      </div>
    </div>
  )
} 

function App() {
  return (
    <>
      <div className='app'>
        <Header/>
        <Body/>
      </div>
    </>
  )
}

export default App
