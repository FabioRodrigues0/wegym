import React from "react";
import "./galley.style.css";

export default function Gallery() {
    return (
        <div className="row">
            {/* CONTUEDO */}
            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt="Boat on Calm Water"
                />

                <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt="Wintry Mountain Landscape"
                />
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
                <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt="Mountains in the Clouds"
                />

                <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt="Boat on Calm Water"
                />
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
                <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt="Waves at Sea"
                />

                <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt="Yosemite National Park"
                />
            </div>
            {/* CONTUEDO */}
        </div>
    );
};