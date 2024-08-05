// eslint-disable-next-line no-unused-vars
import React from "react";
import "./gallery.style.css";

//IMAGENS IMPORTADAS ATRAVES DE CSS

export const Gallery = () => {
    return (
        <div>
            <div id="listaFotos" className="container">

                <div id="linhaUm" className="row">
                    <div id="imageOne" class="col-4"> </div>

                    <div id="imageTwo" class="col-4"> </div>

                    <div id="imageThree" class="col-4"> </div>
                </div>

                <div id="linhaDois" className="row">
                    <div id="imageFour" class="col-6"> </div>

                    <div id="imageFive" class="col-6"> </div>
                </div>

                <div id="linhaTres" className="row">
                    <div id="imageSix" class="col-6"> </div>

                    <div id="imageSeven" class="col-6"> </div>
                </div>

                <div id="linhaQuatro" className="row">
                    <div id="imageEight" class="col"> </div>
                </div>

                <div id="linhaCinco" className="row">
                    <div id="imageNine" class="col"> </div>

                    <div id="imageTen" class="col"> </div>

                    <div id="imageEleven" class="col"> </div>
                </div>

                <div id="linhaSeis" className="row">
                    <div id="imageTwelve" class="col-6"> </div>

                    <div id="imageThirteen" class="col-6"> </div>
                </div>

            </div>

            

        </div>
    );
};
