import React from "react";
import imageOne from "../../assets/images/1.jpg";
import imageTwo from "../../assets/images/2.jpg";
import imageThree from "../../assets/images/3.jpg";
import "./carrocel.css";

export default function Carrocel() {
    return (
        <div id="banner-carousel" className="carousel slide" data-bs-ride="carousel">
            {/* CONTUEDO */}
            <div className="carousel-inner">
                <div className="carousel-item active ">
                    <img src={imageOne} className="d-block imageCarr" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={imageTwo} className="d-block imageCarr" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={imageThree} className="d-block imageCarr" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button"
                    data-bs-target="#banner-carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button"
                    data-bs-target="#banner-carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            {/* CONTUEDO */}
        </div>
    );
};
