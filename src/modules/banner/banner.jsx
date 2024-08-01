// eslint-disable-next-line no-unused-vars
import React from "react";
import Carrocel from "../carrocel/carrocel.jsx";
import "./banner.style.css";

export default function Banner(state) {

    const recebido = state.estado;

        return (
            <div className="">
                {/* CONTUEDO */}
                <div className="d-flex justify-content-center banner">
                    <div className="row">
                        <div className="col">
                                <div>{(recebido) ? <Carrocel /> : "" }</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="imageCardText">
                        <div className="imageCardTextInner">
                            <h1 className="text-center imgTextTitle display-1 fw-bold">Bem-vindo ao WeGYM!</h1>
                            <p className="text-center imgText">Veja alguns dos nossos planos disponíveis embaixo</p>
                            <button id="botaoInicial" className="btn btn-outline-warning">Clique Aqui</button>
                        </div>
                    </div>
                </div>
                {/* CONTUEDO */}
            </div>
        );

};