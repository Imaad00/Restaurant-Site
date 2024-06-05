import React from "react";
import delivery1 from "../Images/restauGalry/foodDelivery.png"
import deliver2 from "../Images/restauGalry/mobileout.png";
import "../App.css"
import { Link } from 'react-router-dom'; 
import Burger from "../Images/restauGalry/burger.jpg";
import Dosa from "../Images/restauGalry/dosa.avif";
import BP from "../Images/restauGalry/paneerkulcha.jpg";
import pizza from "../Images/restauGalry/pizza.avif";
import Mocktail from "../Images/restauGalry/cocktail.jpg";
import LC from "../Images/restauGalry/litti.jpg";
import Rashmalai from "../Images/restauGalry/rashmalai.avif";
import chinese from "../Images/restauGalry/chinese.jpeg";

import rice from "../Images/restauGalry/rice.jpg";
const photo = [Burger, Dosa, BP, pizza, Mocktail, LC, Rashmalai,rice,chinese];
const foodName = ["Burger", "South Indian", "North Indian", "Pizza", "Mocktail", "Litti Chokha", "Sweets","rice","chinese"];
const price=["150Rs","100Rs","180Rs","250Rs","120Rs","180Rs","60Rs","100Rs","100Rs"];
const ratings = [4, 5, 3, 4, 5, 4, 5, 5, 3,2,5,4];
const Delivery = () => {
    return ( 
        <div className="container-fluid bg-dark">
            <div className="row d-flex">
                <div className="col-md-7">
                    <img img-fluid src={deliver2} alt="" />
                </div>
                <div className="col-md-4 text-white">
                    <h1 className="my-5 wlcmMsgdining">"From our kitchen to your doorstep, taste the magic with every bite!"</h1>
                </div>
            </div>
            <div className="row text-white road">
                <div className="col-md-12 roadcol">
                    <h1 className="roadwhite">- - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - - -  - - - - - </h1>
                    <div className="row">
                        <div className="col-md-5"></div>
                        <div className="col-md-7">
                        <img className="img-fluid delivery2" src={delivery1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
        {photo.map((image, index) => (
          <div className="col-md-3 my-3 py-3" key={index}>
            <div className="card bg-dark deliverycard  text-white mx-2 px-2 py-2  my-3 " style={{ width: '18rem' }}>
              <img src={image} className="card-img-top card-image-delivery" alt="..." />
              <div className="card-body bg-black ">
                <h5 className="card-title">{foodName[index]}</h5>
                <div className=" d-flex justify-content-between">
                <div><p className="price">{price[index]}</p></div>
                <div>{Array(ratings[index]).fill().map((x, i) => <i key={i} className="bi bi-star-fill stars mx-1"></i>)}</div>
                </div>
                <Link to="#" className="btn add">Add To Cart</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Delivery;


