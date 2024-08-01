// eslint-disable-next-line no-unused-vars
import React from "react";
import "./footer.style.css";
import logo from "../assets/icons/Logo.png";

export const Footer = () => {
    return (
        <div className="container" id="footer">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-decoration-none lh-1">
                        <img src={logo} alt="Logo We Gym"/>
                    </a>
                    <span className="mb-3 mb-md-0">© 2024 WeGym</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="" href="#">
                        <i className="bi bi-facebook"></i>
                    </a></li>
                    <li className="ms-3"><a className="" href="#">
                        <i className="bi bi-instagram"></i>
                    </a></li>
                    <li className="ms-3"><a className="" href="#">
                        <i className="bi bi-twitter-x"></i>
                    </a></li>
                </ul>
            </footer>
        </div>
    );
};