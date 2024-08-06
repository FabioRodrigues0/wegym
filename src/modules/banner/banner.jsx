// eslint-disable-next-line no-unused-vars
import React from "react";
import Carrocel from "../carrocel/carrocel.jsx";
import "./banner.style.css";
import BannerTitle from "../bannerTitle/bannerTitle.jsx";

export default function Banner(state) {

    const recebido = state.isWithCarrocel;
    const title = state.title;
    const description = state.description;

        return (
            <div className="">
                {/* CONTUEDO */}
                <div className={(recebido) ? "d-flex justify-content-center banner" : "d-flex justify-content-center banner-witout-car"}>
                    <div className="row">
                        <div className="col">
                            <div>{(recebido) ? <Carrocel/> : <BannerTitle />}</div>
                            <div className={(recebido) ? "imageText-with-carrossel" : "imageText-without-carrossel"}>
                                <div className="imageCardTextInner">
                                    <h1 className="text-center imgTextTitle display-1 fw-bold">{title}</h1>
                                    <p className="text-center imgText">{description}</p>
                                    {(recebido)
                                        ? <a href="/#about" id="botaoInicial" className="btn btn-outline-warning">Clique
                                            Aqui</a>
                                        : <span></span>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* CONTUEDO */}
            </div>
        );

};