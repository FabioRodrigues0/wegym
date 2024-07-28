// eslint-disable-next-line no-unused-vars
import React from "react";
import "./header.style.css";
import logo from "../assets/Logo.png";


export const Header = () =>{
    return (
        <div>
           <nav id="barraDeNavegacao" className="navbar navbar-expand-lg bg-dark-neutral navbar-light fixed-top">
                <img src={logo} alt="Logo We Gym" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-item nav-link links" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-item nav-link links" href="#">Subscription</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-item nav-link links" href="#">Training</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-item nav-link links" href="#">Instructors</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-item nav-link links" href="#">Contacts</a>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </div>
    );
};