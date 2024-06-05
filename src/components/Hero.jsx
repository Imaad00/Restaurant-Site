import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom"
import video from "../Images/restauGalry/video (1080p).mp4";
import restaurantimg from "../Images/restauGalry/card.jpg";
import dining from "../Images/restauGalry/dining.jpg";
import delivery from "../Images/restauGalry/pexels-norma-mortenson-4393426 (1).jpg";
import "../App.css";

const Hero = () => {
  const text = "Discover the Best Restaurants and Enjoy Hassle-Free Dining & Delivery Experiences ";
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < text.length-1) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        currentIndex += 1;
      } else {
        clearInterval(interval);
      }
    }, 70);
    return () => clearInterval(interval);
  }, []); 

  return (
    <>
      <div className="hero">
      <video className="back-video" src={video} autoPlay loop muted playsInline></video> 
      {/* playsInline :-videos will go fullscreen when played.  */}
      <div className="content">
        <h1 className='wlcmMsg'>{displayText}</h1>
      </div>
    </div>
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
                            <Link to="/restaurant">Explore</Link>
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
                            <Link to="/dining">Reserve Now</Link>
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
                            <Link to="/delivery">Order Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Hero;




