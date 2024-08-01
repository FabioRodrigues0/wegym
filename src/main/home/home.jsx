// eslint-disable-next-line no-unused-vars
import React from "react";
import Banner from "../../modules/banner/banner.jsx";
import About from "../../modules/about/about.jsx";
<<<<<<< HEAD
import Subscriptions from "../subscriptions/subscriptions.jsx";
=======
import Subscriptions from "../../modules/subscriptions/subscriptions.jsx";
>>>>>>> f9dbd9aa45b674ce918295dc9576b4f7c123d6c7
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