import React from 'react';
import { NavLink } from 'react-router-dom';

const Base = (props) => {
  return (
    <>
    <section className="home d-flex align-items-center">
      <div className="container-fluid nav-bg">
        <div className="row">
          <div className="col-10 mx-auto">
            {/**Starts here */}
            <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                <h1>
                  {props.desc}
                  <strong className="brand-name"> {props.owner}</strong>
                </h1>
                <h2 className="my-3">
                  {props.statement}
                </h2>
                <div className="mt-3">
                  <NavLink to={props.goto} className="btn-get-started">{props.btnName}</NavLink>
                </div>
              </div>

              <div className="col-lg-6 order-1 order-lg-2 home-img">
                <img src={props.imgSrc} className="animated" alt="Home-Img" />
              </div>
            </div>
            {/**Ends here */}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Base;