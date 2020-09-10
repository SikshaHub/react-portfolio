import React from 'react';
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="menu">
        <div className="container-fluid">
            {/* add */}
            <div className="row">
                <div className="col-10 mx-auto">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    {/* add */}
                        <NavLink className="navbar-brand" to="/">
                            SikshaHub
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink exact className="nav-link" to="/" activeClassName="active-menu">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="service" activeClassName="active-menu">Services</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about" activeClassName="active-menu">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact" activeClassName="active-menu">Contact Us</NavLink>
                                </li>
                            </ul>
                        </div>
                    {/* add */}
                    </nav>
                </div>
            </div>
            {/* add */}
        </div>
    </div>
  );
}

export default NavBar;