// eslint-disable-next-line no-unused-vars
import React from "react";
import Banner from "../../modules/banner/banner.jsx";
import About from "../../modules/about/about.jsx";
import Subscriptions from "../subscriptions/subscriptions.jsx";
import "./home.style.css";


export const Home = () => {
    return (
        <div>
            <Banner estado={true}/>
            <About />
            <Subscriptions />
        </div>
     );
};