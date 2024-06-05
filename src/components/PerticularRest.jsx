import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import Burger from "../Images/restauGalry/burger.jpg";
import Dosa from "../Images/restauGalry/dosa.avif";
import BP from "../Images/restauGalry/paneerkulcha.jpg";
import pizza from "../Images/restauGalry/pizza.avif";
import Mocktail from "../Images/restauGalry/cocktail.jpg";
import LC from "../Images/restauGalry/litti.jpg";
import Rashmalai from "../Images/restauGalry/rashmalai.avif";
import chinese from "../Images/restauGalry/chinese.jpeg";

import rice from "../Images/restauGalry/rice.jpg";
import carousel1 from "../Images/restauGalry/1.jpg"
import carousel2 from "../Images/restauGalry/2.jpg"
import carousel3 from "../Images/restauGalry/3.jpg"
import carousel4 from "../Images/restauGalry/4.jpg"
import carousel5 from "../Images/restauGalry/5.jpg"
import carousel6 from "../Images/restauGalry/6.jpg"
import carousel7 from "../Images/restauGalry/7.jpg"
import carousel8 from "../Images/restauGalry/8.jpg"
import carousel9 from "../Images/restauGalry/9.jpg"
import carousel10 from "../Images/restauGalry/10.jpg"
import carousel11 from "../Images/restauGalry/11.jpg"
import carousel12 from "../Images/restauGalry/12.jpg"
import carousel13 from "../Images/restauGalry/13.jpg"
import carousel14 from "../Images/restauGalry/14.jpg"
import carousel15 from "../Images/restauGalry/15.jpg"
import carousel16 from "../Images/restauGalry/16.jpg"
import carousel17 from "../Images/restauGalry/17.jpg"
import carousel18 from "../Images/restauGalry/rest9.jpg"


const foodimg = [Burger, Dosa, BP, pizza, Mocktail, LC, Rashmalai,rice,chinese];
const menu = ["Burger", "South Indian", "North Indian", "Pizza", "Mocktail", "Litti Chokha", "Sweets","rice","chinese"];

const PerticularRest = () => {
  const { id } = useParams();  // Fetching the restaurant ID from the URL parameter

  const [restaurants] = useState([
    {
      images: [carousel1, carousel2, carousel3],
      resuarentName: "Ocean View Resort"
    },
    {
      images: [carousel4, carousel5, carousel6],
      resuarentName: "Sunset Paradise Hotel"
    },
    {
        images: [carousel7, carousel8, carousel9],
        resuarentName: "Golden Sands Inn"
      },
    {
        images: [carousel10, carousel11, carousel12],
        resuarentName: "Mountain Retreat "
    },  
    {
        images: [carousel13, carousel14, carousel15],
        resuarentName: "Azure Waters Resort"
    }, 
    {
        images: [carousel16, carousel17, carousel18],
        resuarentName: "Palm Grove Suites"
    }, 
  ]);

  const selectedRestaurant = restaurants[Number(id)];  // Converting id to a number and fetching the restaurant just for safety precaution because id can be anything





  const deepmenu = [
    {
      category: "Burger",
      dishes: [
        "Cheese Burger",
        "Veggie Burger",
        "Chicken Burger",
        "Fish Burger",
        "Mushroom Burger"
      ]
    },
    {
      category: "South Indian",
      dishes: [
        "Dosa",
        "Idli",
        "Vada",
        "Uttapam",
        "Pongal"
      ]
    },
    {
      category: "North Indian",
      dishes: [
        "Butter Chicken",
        "Paneer Tikka",
        "Dal Makhani",
        "Aloo Paratha",
        "Rogan Josh"
      ]
    },
    {
      category: "Pizza",
      dishes: [
        "Margherita",
        "Pepperoni",
        "Vegetarian",
        "Hawaiian",
        "BBQ Chicken"
      ]
    },
    {
      category: "Mocktail",
      dishes: [
        "Strawberry Daiquiri",
        "Pina Colada",
        "Blue Lagoon",
        "Mango Tango"
      ]
    },
    {
      category: "Litti Chokha",
      dishes: [
        "Litti",
        "Chokha",
        "Aloo Chokha",
        "Baingan Bharta",
        "Tomato Chutney"
      ]
    },
    {
      category: "Sweets",
      dishes: [
        "Gulab Jamun",
        "Rasgulla",
        "Kheer",
        "Jalebi",
        "Barfi"
      ]
    },
    {
        category: "rice",
        dishes: [
          "Fried Rice",
          "Pulao",
          "Biryani",
          "Plain Rice",
          
        ]
      },
      {
        category: "chinese",
        dishes: [
          "Hakka Noodles",
          "Manchurian",
          "Pasta",
          "Schezwan Noodles",
          
        ]
      },  
  ];




return (
    <div className="container-fluid restaurant-container bg-dark text-white">
      <div className="row">
        <div className="col-md-12">
          <div id="restaurantCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {selectedRestaurant.images.map((image, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval="2000">
                  <img src={image} className=" "  alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-12">
          <h1 className="restaurant-name text-white">{selectedRestaurant.resuarentName}</h1>
        </div>
      </div>

       <div className="row mt-4 bg-dark justify-content-around my-3 py-3">
           <h4 className="menu-title"><i class="bi bi-menu-down mx-2"></i>Menu</h4>
       
           {menu.map((item, index) => (
           <div className="col-md-4 menu-section my-3 py-3">
               <ul className="menu-list">
               <li key={index} className="menu-item justify-content-around">
                 <div>
                   <img src={foodimg[index]} alt={item} className="menu-image" />
                   <p className="menu-text my-2 mx-3">{item}</p>
                 </div>
                 <div>
                   <ul className="my-4">
                     {deepmenu.find(category => category.category === item)?.dishes.map((dish, ind) => (
                       <li key={ind}>{dish}</li>
                     ))}
                   </ul>
                 </div>
               </li>
               </ul>
           </div>
         ))}
        </div>
        <div className="row d-flex justify-content-center">
            <div className="col-md-6">
            <h4 className="menu-title"><i class="bi bi-clock-history mx-2"></i>History</h4>

            </div>
            <div className="col-md-6">
            <h4 className="menu-title"><i class="bi bi-geo-alt-fill mx-2"></i>Map</h4>

            </div>

        </div>
    </div>
  );
};

export default PerticularRest;