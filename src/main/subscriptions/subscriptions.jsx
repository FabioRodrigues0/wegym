// eslint-disable-next-line no-unused-vars
import React from "react";
import "./subscriptions.style.css";
import Price from "../../modules/price/price.jsx";

export const Subscriptions = () => {
    return (
        <div className="">
            <div className="container px-4 py-5 mt-5 mb-5 p-0 rounded-3" id="featured-3">
                <div className="row">
                    <div className="col text-center">
                        <h1 className="text-light">Plano de Subscrições</h1>
                        <p className="text-light">Nesta página, poderá ver todos os planos de subscrição que temos ao seu dispor. Alguma questão, poderá usar a nossa aba de contactos para nos comunicarmos.</p>
                        <hr />
                    </div>
                </div>
                {/*<h2 id="subTitle" className="pb-2 border-bottom">Planos de Subscrição</h2>*/}
                <Price showPrice={true}/>
            </div>
        </div>
    );
};

export default Subscriptions;