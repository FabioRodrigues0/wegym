// eslint-disable-next-line no-unused-vars
import React from "react";
import "./gallery.style.css";
import Banner from "../../modules/banner/banner.jsx";

//IMAGENS IMPORTADAS ATRAVES DE CSS

export const Gallery = () => {
    return (
        <div>
            <Banner isWithCarrocel={false} title={"Galeria"} />
            <div id="listaFotos" className="container">

                <div id="linhaUm" className="row">
                    <div id="imageOne" className="col-4"> </div>

                    <div id="imageTwo" className="col-4"> </div>

                    <div id="imageThree" className="col-4"> </div>
                </div>

                <div id="linhaDois" className="row">
                    <div id="imageFour" className="col-6"> </div>

                    <div id="imageFive" className="col-6"> </div>
                </div>

                <div id="linhaTres" className="row">
                    <div id="imageSix" className="col-6"> </div>

                    <div id="imageSeven" className="col-6"> </div>
                </div>

                <div id="linhaQuatro" className="row">
                    <div id="imageEight" className="col"> </div>
                </div>

                <div id="linhaCinco" className="row">
                    <div id="imageNine" className="col"> </div>

                    <div id="imageTen" className="col"> </div>

                    <div id="imageEleven" className="col"> </div>
                </div>

                <div id="linhaSeis" className="row">
                    <div id="imageTwelve" className="col-6"> </div>

                    <div id="imageThirteen" className="col-6"> </div>
                </div>

            </div>

            

        </div>
    );
};
