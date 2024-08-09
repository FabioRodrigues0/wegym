// eslint-disable-next-line no-unused-vars
import React from "react";
import "./subscriptions.style.css";
import Price from "../../modules/price/price.jsx";
import Banner from "../../modules/banner/banner.jsx";

export const Subscriptions = () => {
    return (
        <div className="">
            <Banner isWithCarrocel={false} title={"Plano de Subscrições"} description={"Nesta página, poderá ver todos os planos de subscrição que temos ao seu dispor. Alguma questão, poderá usar a nossa aba de contactos para nos comunicarmos."} />
            <div className="container px-4 py-5 mt-5 mb-5 p-0 rounded-3" id="featured-3">
                <Price showPrice={true}/>
            </div>
        </div>
    );
};

export default Subscriptions;