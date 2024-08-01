// eslint-disable-next-line no-unused-vars
import React from "react";
import "./about.style.css";
import imageOne from "../../assets/images/2.jpg";

export const About = () => {
    return (
        <div className="">
            <div className="container about-ajust rounded-3 mt-5 p-0" id="about">
                <div id="containerAbout" className="rounded-3 container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-7 p-5">
                            <h1 className="display-3 fw-bold">Sobre</h1>
                            <p className="col-md-11 fs-4">Using a series of utilities, you can create this jumbotron,
                                just
                                like
                                the one in previous versions of Bootstrap. Check out the examples below for how you can
                                remix
                                and restyle it to your liking.
                                Using a series of utilities, you can create this jumbotron,
                                just
                                like
                                the one in previous versions of Bootstrap. Check out the examples below for how you can
                                remix
                                and restyle it to your liking.
                                </p>
                            <button className="btn btn-outline-warning" type="button">Example button</button>
                        </div>
                        <div className="col-sm-6 col-lg-5 p-0">
                            <img className="rounded-3 imageAbout float-end" src={imageOne} alt="about image"/>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default About;