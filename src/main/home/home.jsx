// eslint-disable-next-line no-unused-vars
import React from "react";
import Banner from "../../modules/banner/banner.jsx";
import About from "../../modules/about/about.jsx";
import "./home.style.css";
import Price from "../../modules/price/price.jsx";


export const Home = () => {
    return (
        <div>
            <Banner isWithCarrocel={true} title={"Bem-vindo ao WeGYM!"} description={"Veja alguns dos nossos planos disponíveis embaixo"} />
            <About />
            <div className="container px-4 py-5 mt-5 mb-1 p-0 rounded-3" id="featured-3">
                <h2 id="subTitle" className="pb-2 border-bottom">Planos de Subscrição</h2>
                <Price showPrice={false}/>
            </div>
        </div>
    );
};