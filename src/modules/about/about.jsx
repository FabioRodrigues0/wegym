// eslint-disable-next-line no-unused-vars
import React from "react";
import "./about.style.css";

export const About = () => {
    return (
        <div className="container my-4 about-ajust" id="about">
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Custom jumbotron</h1>
                    <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like
                        the one in previous versions of Bootstrap. Check out the examples below for how you can remix
                        and restyle it to your liking.</p>
                    <button className="btn btn-primary btn-lg" type="button">Example button</button>
                </div>
            </div>
            <div className="container px-4 py-5" id="featured-3">
                <h2 className="pb-2 border-bottom">Subscrições</h2>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className="feature col">
                        <div className="feature-icon bg-primary bg-gradient">
                            <svg className="bi" width="1em" height="1em">
                                <use xlinkHref="#collection"></use>
                            </svg>
                        </div>
                        <h2>Featured title</h2>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another
                            sentence and probably just keep going until we run out of words.</p>
                        <a href="#" className="icon-link">
                            Call to action
                            <svg className="bi" width="1em" height="1em">
                                <use xlinkHref="#chevron-right"></use>
                            </svg>
                        </a>
                    </div>
                    <div className="feature col">
                        <div className="feature-icon bg-primary bg-gradient">
                            <svg className="bi" width="1em" height="1em">
                                <use xlinkHref="#people-circle"></use>
                            </svg>
                        </div>
                        <h2>Featured title</h2>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another
                            sentence and probably just keep going until we run out of words.</p>
                        <a href="#" className="icon-link">
                            Call to action
                            <svg className="bi" width="1em" height="1em">
                                <use xlinkHref="#chevron-right"></use>
                            </svg>
                        </a>
                    </div>
                    <div className="feature col">
                        <div className="feature-icon bg-primary bg-gradient">
                            <svg className="bi" width="1em" height="1em">
                                <use xlinkHref="#toggles2"></use>
                            </svg>
                        </div>
                        <h2>Featured title</h2>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another
                            sentence and probably just keep going until we run out of words.</p>
                        <a href="#" className="icon-link">
                            Call to action
                            <svg className="bi" width="1em" height="1em">
                                <use xlinkHref="#chevron-right"></use>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;