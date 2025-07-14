<<<<<<< HEAD
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageNotFound404 from '../../assets/img/file-search-icon.png';
import './style.css';
function Page404() {
    return (
      <div className='notfound-cont'>
        <div className='notfound-inner'>
          <div className='page-404-icon'>
            <div className='txt-404'>404</div>
          <img src={PageNotFound404} alt='back-arrow' className='File Search' />
          </div>
          <h3>Page Not Found.</h3>
          <div className="mb-3">
            <p>
              We're sorry, the page you requested could not be found on the server. Please go back to the main page.
            </p>
          </div>
          <div className="d-grid">
          <Link to="/sign-in">
            <button className='btn btn-primary' type='button'>
              Go to Main Login
            </button>
          </Link>
          </div>
        </div>
      </div>
    )
}
export default Page404
=======
import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Page404() {
  return (
    <div className="page_404">
      <div className="container h-100 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <div className="four_zero_four_bg"></div>

          <div className="contant_box_404">
            <h3 className="h2">Something went wrong, please contact us</h3>
            <p>The page you are looking for is not available!</p>
            <Link to={"/"} className="link_404 btn-alpha">
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page404;
>>>>>>> 6bf8d67 (react_project)
