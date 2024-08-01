// eslint-disable-next-line no-unused-vars
import React from "react";
import "./subscriptions.style.css";

export const Subscriptions = () => {
    return (
        <div className="row g-4 pt-2 pt-sm-3 pt-md-4 pt-xl-5 mt-sm-2 mt-md-3 mt-xl-0">
            <div className="container my-4 about-ajust">
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
                            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with
                                another
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
                            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with
                                another
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
                            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with
                                another
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
        </div>
    );
};

export default Subscriptions;