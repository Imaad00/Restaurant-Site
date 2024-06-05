import React from 'react';
import rest1 from "../Images/restauGalry/rest1.jpg";
import rest2 from "../Images/restauGalry/rest2.jpg";
import rest3 from "../Images/restauGalry/rest3.jpg";
import rest4 from "../Images/restauGalry/rest4.jpg";
import rest5 from "../Images/restauGalry/rest5.jpg";
import rest6 from "../Images/restauGalry/rest6.jpg";
import rest7 from "../Images/restauGalry/rest7.jpg";
import rest8 from "../Images/restauGalry/rest8.jpg";
import rest9 from "../Images/restauGalry/rest9.jpg";
import rest10 from "../Images/restauGalry/rest10.jpg";
import rest11 from "../Images/restauGalry/rest11.jpg";
import rest12 from "../Images/restauGalry/rest12.jpg";
const images = [rest1, rest2, rest3, rest4, rest5, rest6, rest7, rest8, rest9,rest10,rest11,rest12];
const restaurants = ["Bengaluru Oota Company", "FarmLore", "Karavalli", "Lupa", "Carnatic Cafe", "Indian Accent", "Spice Terrace", "Olive Bar & Kitchen", "Cafe Noir","Foodie Zone","EDO Restaurant and Bar", "FarmLore"];
const Addresses = [
    "100 Feet Rd, Indiranagar, Bengaluru, Karnataka 560038",
    "Koramangala 4th Block, Koramangala, Bengaluru, Karnataka 560034",
    "Church St, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560001",
    "Whitefield Main Road, Whitefield, Bengaluru, Karnataka 560066",
    "11th Main, Jayanagar East, Jayanagar, Bengaluru, Karnataka 560011",
    "Margosa Rd, Malleswaram, Bengaluru, Karnataka 560003",
    " 12th Main HSR Layout, Bengaluru, Karnataka 560102",
    "Banashankari Stage II, Banashankari, Bengaluru, Karnataka 560070",
    "14th Cross Marathahalli, Bengaluru, Karnataka 560037",
    "2nd Cross Kumarswamy Layout, Bengaluru, Karnataka 560037",
    "Koramangala 4th Block, Koramangala, Bengaluru, Karnataka 560034",
    "11th Main, Jayanagar East, Jayanagar, Bengaluru, Karnataka 560011"
  ];
  
const ratings = [4, 5, 3, 4, 5, 4, 5, 5, 3,2,5,4];

const Restaurant = () => {
  return (
    <div className="container-fluid bg-dark py-3">
      <div className="row">
        <div className="col-md-12 d-flex justify-content-between">
          
         <div className='py-4 px-2'> <h1 className="text-white services-heading ">Top Restaurants</h1></div>
          <div className='py-4 px-2'><input  className="input px-5 py-2  rounded " type="text" placeholder="Search here..." /> 
            <button id="searchButton" class="btn mx-2  text-white srchbtn"  >Search</button></div>
        </div>
      </div>
      <div className="row justify-content-around  py-3">
        {images.map((image, index) => (
          <div key={index} className="col-md-3 my-3 py-3">
            <div className="card-rest custom-card">
              <img src={image} className="card-img-top card-image-restaurant img-fluid" />
              <div className="card-body">
                <h5 className="card-title bg-black text-white py-2 px-3">{restaurants[index]}</h5>
                <p className="card-text bg-black text-white px-3">{Addresses[index]}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-black text-white px-3"><a href="" className='anchorMapPhone'><i class="bi bi-telephone-fill mx-1"></i>Contact Us</a> </li>
                <li className="list-group-item bg-black text-white px-3"> <a href=""  className='anchorMapPhone'><i class="bi bi-geo-alt-fill  mx-1"></i>View Map </a></li>
                <li className="list-group-item bg-black text-white px-3">Review {Array(ratings[index]).fill().map((x, i) => <i key={i} className="bi bi-star-fill stars mx-1"></i>)}</li>

                {/* Array(ratings[index]): This creates a new array of length equal to the value of ratings[index].
.fill(): This fills each element of the newly created array with undefined values (since no specific value is provided to fill with).
.map((_, i) => <i key={i} className="bi bi-star-fill"></i>) */}


              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Restaurant;
