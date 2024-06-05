// Services.js
import React from 'react';
import restaurantimg from "../Images/restauGalry/card.jpg";
import dining from "../Images/restauGalry/dining.jpg";
import delivery from "../Images/restauGalry/pexels-norma-mortenson-4393426 (1).jpg";
import "../App.css"

const Services = () => {
    return (
        <div className="container-fluid bg-dark py-3">
            <h1 className="text-white services-heading py-4">Services</h1>
            <div className="row justify-content-center my-3 py-3 ">
                {/* Restaurant Card */}
                <div className="col-md-3 my-3 pb-3 mx-4">
                    <div className="card card-three bg-black text-white">
                        <img src={restaurantimg} className="card-img-top card-image" alt="Restaurant" />
                        <div className="card-body">
                            <h5 className="card-title">Restaurant</h5>
                            <p className="card-text">Get the best Restaurant near you in just one click.</p>
                            <a href="#" >Explore</a>
                        </div>
                    </div>
                </div>

                {/* Dining Card */}
                <div className="col-md-3 my-3 pb-3 mx-4">
                    <div className="card card-three bg-black text-white">
                        <img src={dining} className="card-img-top card-image" alt="Book Your Table" />
                        <div className="card-body">
                            <h5 className="card-title">Book Your Table</h5>
                            <p className="card-text">Reserve your spot and enjoy an unforgettable dining experience.</p>
                            <a href="#" >Reserve Now</a>
                        </div>
                    </div>
                </div>

                {/* Delivery Card */}
                <div className="col-md-3 my-3 pb-3 mx-4">
                    <div className="card card-three bg-black text-white">
                        <img src={delivery} className="card-img-top card-image" alt="Online Delivery" />
                        <div className="card-body">
                            <h5 className="card-title">Online Delivery</h5>
                            <p className="card-text">Order your favorite dishes online and get them delivered to your doorstep.</p>
                            <a href="#" >Order Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
