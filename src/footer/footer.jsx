// eslint-disable-next-line no-unused-vars
import React from "react";
import "./footer.style.css";

export const Footer = () => {
    return (
        <div className="container">
            <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
                <div className="col mb-3">
                    <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                        <svg className="bi me-2" width="40" height="32">
                            <use xlinkHref="#bootstrap"></use>
                        </svg>
                    </a>
                    <p className="text-body-secondary">© 2024</p>
                </div>
                <div className="col mb-3">

                    <h6 className="text-uppercase fw-bold">Contact</h6>

                    <p><i className="mr-3"></i> New York, NY 10012, US</p>
                    <p><i className="mr-3"></i> info@example.com</p>
                    <p><i className="mr-3"></i> + 01 234 567 88</p>
                    <p><i className="mr-3"></i> + 01 234 567 89</p>
                </div>

                <div className="col mb-3">
                    <h5>Section</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#"
                                                         className="nav-link p-0 text-body-secondary">Home</a></li>
                        <li className="nav-item mb-2"><a href="#"
                                                         className="nav-link p-0 text-body-secondary">Features</a>
                        </li>
                        <li className="nav-item mb-2"><a href="#"
                                                         className="nav-link p-0 text-body-secondary">Pricing</a>
                        </li>
                        <li className="nav-item mb-2"><a href="#"
                                                         className="nav-link p-0 text-body-secondary">FAQs</a></li>
                        <li className="nav-item mb-2"><a href="#"
                                                         className="nav-link p-0 text-body-secondary">About</a></li>
                    </ul>
                </div>

                <div className="col mb-3">
                    <h5>Section</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#"
                                                         className="nav-link p-0 text-body-secondary">Home</a></li>
                        <li className="nav-item mb-2"><a href="#"
                                                         className="nav-link p-0 text-body-secondary">Features</a>
                        </li>
                        <li className="nav-item mb-2"><a href="#"
                                                         className="nav-link p-0 text-body-secondary">Pricing</a>
                        </li>
                        <li className="nav-item mb-2"><a href="#"
                                                         className="nav-link p-0 text-body-secondary">FAQs</a></li>
                        <li className="nav-item mb-2"><a href="#"
                                                         className="nav-link p-0 text-body-secondary">About</a></li>
                    </ul>
                </div>

                <div className="col mb-3">
                    <h5>Section</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#"
                                                         className="nav-link p-0 text-body-secondary">Home</a></li>
                        <li className="nav-item mb-2"><a href="#"
                                                         className="nav-link p-0 text-body-secondary">Features</a>
                        </li>
                        <li className="nav-item mb-2"><a href="#"
                                                         className="nav-link p-0 text-body-secondary">Pricing</a>
                        </li>
                        <li className="nav-item mb-2"><a href="#"
                                                         className="nav-link p-0 text-body-secondary">FAQs</a></li>
                        <li className="nav-item mb-2"><a href="#"
                                                         className="nav-link p-0 text-body-secondary">About</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};