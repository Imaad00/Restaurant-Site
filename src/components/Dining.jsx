import React from 'react';
import { Link } from 'react-router-dom'; 
import photo1 from "../Images/restauGalry/hichkee.avif";
import photo2 from "../Images/restauGalry/garden.avif";
import photo3 from "../Images/restauGalry/litti.jpg";
import photo4 from "../Images/restauGalry/paneer.jpg";
import photo5 from "../Images/restauGalry/whiteDosa.jpg";
import photo6 from "../Images/restauGalry/rest10.jpg";
import photo7 from "../Images/restauGalry/pizza.avif";
import photo8 from "../Images/restauGalry/rest6.jpg";
import photo9 from "../Images/restauGalry/workbar.avif";
import photo10 from "../Images/restauGalry/airbar.avif";
import photo11 from "../Images/restauGalry/fatTiger.avif";
import photo12 from "../Images/restauGalry/rest1.jpg";

const photo=[photo1,photo2,photo3,photo4,photo5,photo6,photo7,photo8,photo9,photo10,photo11,photo12];

const hotelNames = [
    "Ocean View Resort",
    "Sunset Paradise Hotel",
    "Golden Sands Inn",
    "Mountain Retreat ",
    "Azure Waters Resort",
    "Palm Grove Suites",
    "Silver Star Hotel",
    "Harbor View Inn",
    "Majestic Peaks Lodge",
    "Royal Gardens Hotel",
    "Emerald Coast Resort",
    "Whispering Pines Inn"
];
const star=[4.5,4,5,4.2,5,4.8,3,4.2,3.8,3.9,4,5];

const Dining = () => {
    return ( 
        <div className="container-fluid bg-dark text-white">
            <div className="row">
                <div className="col-md-12 ">
                    <h1 className="text-white services-heading ">Dining</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-11 text-center welcomcol">
                    <p className="wlcmMsgdining mx-5 py-3 my-1">
                        Dive into a realm where flavors dance on your palate and ambiance transports you to another world.
                    </p>
                </div>
            </div>
            <div className="row justify-content-around  py-3 px-5">
                {
                    photo.map((pic, ind) => (
                        <div key={ind} className="col-md-3 my-3 py-3 col-dining">
                            {/* Wrap the card with Link */}
                            <Link to={`/restaurant/${ind}`} className="text-decoration-none text-white">
                            {/* ye id/data jaaega App.js me  */}
                                <div className="card">
                                    <img src={pic} className="card-img-top card-image-dining" alt="..." />
                                    <div className="card-body bg-black text-white">
                                        <div className="row">
                                            <div className="col-md-12 d-flex justify-content-between">
                                                <div>
                                                    <h6 style={{ fontWeight: "600" }}>{hotelNames[ind]}</h6>
                                                    <p>Book Now</p>
                                                </div>
                                                <div>
                                                    <div className="d-flex greenStartbg justify-content-center rounded">
                                                        <p className="starfontnum">{star[ind]}</p>
                                                        <i className="bi bi-star-fill greenStar"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Dining;