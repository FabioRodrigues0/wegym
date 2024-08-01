// eslint-disable-next-line no-unused-vars
import React from "react";
import "./subscriptions.style.css";
import Price from "../../modules/price/price.jsx";

export const Subscriptions = () => {
    return (
        <div>
                <div className="container px-4 py-5" id="featured-3">
                    <h2 id="subTitle" className="pb-2 border-bottom">Planos de Subscrição</h2>
                    <Price />
                </div>

        </div>
    );
};

export default Subscriptions;