// eslint-disable-next-line no-unused-vars
import React from "react";
import "./about.style.css";
import Price from "../price/price.jsx";

export const About = () => {
    return (
        
        <div>

            <div className="container my-4 about-ajust" id="about">
                <div id="containerJumbo" className="p-5 mb-4 rounded-3">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">Custom jumbotron</h1>
                        <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like
                            the one in previous versions of Bootstrap. Check out the examples below for how you can remix
                            and restyle it to your liking.</p>
                        <button className="btn btn-primary btn-lg" type="button">Example button</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default About;