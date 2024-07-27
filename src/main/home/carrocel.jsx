import React from "react";
import imageOne from "./img/1.jpg";
import imageTwo from "./img/2.jpg";
import imageThree from "./img/3.jpg";
import "./carrocel.css";

export default function Carrocel() {
    return (
        <div>
            {/* CONTUEDO */}
            <div className="container d-flex justify-content-center">
                <div className="row">
                    <div className="col">
                        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src={imageOne} className="d-block imageCarr" alt="..." />
                            </div>
                            <div className="carousel-item">
                            <img src={imageTwo} className="d-block imageCarr" alt="..." />
                            </div>
                            <div className="carousel-item">
                            <img src={imageThree} className="d-block imageCarr" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>
                    </div>
                </div>

            </div>

            <div>
                <div className="imageCardText">
                    <div className="imageCardTextInner">
                        <h5 className="text-center imgTextTitle">Bem-vindo ao WeGYM!</h5>
                        <p className="text-center imgText">Veja alguns dos nossos planos disponíveis embaixo</p>
                        <button id="botaoInicial" className="btn btn-outline-warning">Clique Aqui</button>
                    </div>
                </div>
            </div>
            {/* CONTUEDO */}




            <div className="container d-flex justify-content-center">
                <div className="row">
                    <div className="col">
                        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src={imageOne} className="d-block imageCarr" alt="..." />
                            </div>
                            <div className="carousel-item">
                            <img src={imageTwo} className="d-block imageCarr" alt="..." />
                            </div>
                            <div className="carousel-item">
                            <img src={imageThree} className="d-block imageCarr" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>
                    </div>
                </div>

            </div>

            <div>
                <div className="imageCardText">
                    <div className="imageCardTextInner">
                        <h5 className="text-center imgTextTitle">Bem-vindo ao WeGYM!</h5>
                        <p className="text-center imgText">Veja alguns dos nossos planos disponíveis embaixo</p>
                        <button id="botaoInicial" className="btn btn-outline-warning">Clique Aqui</button>
                    </div>
                </div>
            </div>

            <div className="container d-flex justify-content-center">
                <div className="row">
                    <div className="col">
                        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src={imageOne} className="d-block imageCarr" alt="..." />
                            </div>
                            <div className="carousel-item">
                            <img src={imageTwo} className="d-block imageCarr" alt="..." />
                            </div>
                            <div className="carousel-item">
                            <img src={imageThree} className="d-block imageCarr" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>
                    </div>
                </div>

            </div>

            <div>
                <div className="imageCardText">
                    <div className="imageCardTextInner">
                        <h5 className="text-center imgTextTitle">Bem-vindo ao WeGYM!</h5>
                        <p className="text-center imgText">Veja alguns dos nossos planos disponíveis embaixo</p>
                        <button id="botaoInicial" className="btn btn-outline-warning">Clique Aqui</button>
                    </div>
                </div>
            </div>

            

        </div>
    );
};
