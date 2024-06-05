// Footer.js
import React from 'react';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Contact</h5>
            <p className='anchorMapPhone'>
              <i className="bi bi-envelope-fill "></i> <a className='anchorMapPhone ' href="mailto:imaadsharieff266.com">imaadsharieff266@gmail.com</a>
            </p>
            <p className='anchorMapPhone'>
              <i className="bi bi-telephone-fill"></i> <a className='anchorMapPhone' href="tel:8123098981">8123098981</a>
            </p>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <div className="social-links">
              <a href=""><i className="bi bi-facebook"></i></a>
              <a href=""><i className="bi bi-twitter"></i></a>
              <a href=""><i className="bi bi-linkedin"></i></a>
              <a href=""><i className="bi bi-instagram"></i></a>
            </div>
          </div>
          <div className="col-md-4">
            <h5>Legal</h5>
            <p>&copy; 2024 Imaad_Sharieff. All Rights Reserved.</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p>Designed by Mohammed Imaad Sharieff</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
