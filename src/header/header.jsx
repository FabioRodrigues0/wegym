// eslint-disable-next-line no-unused-vars
import React from "react";
import "./header.style.css";
import logo from "../assets/Logo.png";


export const Header = () =>{

    document.addEventListener("DOMContentLoaded", () => {

        addEventListener("scroll",function(){
            if(this.window.scrollY > 100)
            {
                this.document.getElementById("barraDeNavegacao").classList.remove("bg-dark-neutral");
                this.document.getElementById("barraDeNavegacao").style.transition = "transition: all 0.2s";
                this.document.getElementById("barraDeNavegacao").classList.add("bg-dark");
            }
            else
            {
                this.document.getElementById("barraDeNavegacao").classList.remove("bg-dark");
                this.document.getElementById("barraDeNavegacao").classList.add("bg-dark-neutral");
            }

        });

      });

    //VARIAVEL CONTROLO DE FLUXO DO BOTAO
    // let run = true;

    /*function rodar()
    {
        var barraPrimeira = document.getElementById("b1");
        var barraSegunda = document.getElementById("b2");
        var barraTerceira = document.getElementById("b3");

        if(run)
        {
            if(barraPrimeira.classList.contains("barra1TransformFinal"))
            {
                barraPrimeira.classList.remove("barra1TransformFinal");
                barraSegunda.classList.remove("barra2TransformFinal");
                barraTerceira.classList.remove("barra3TransformFinal");
            }
            barraPrimeira.classList.add("barra1Transform");
            barraSegunda.classList.add("barra2Transform");
            barraTerceira.classList.add("barra3Transform");
            run = false;
        }
        else
        {
            // REAPARECER BARRA1
            barraPrimeira.classList.remove("barra1Transform");
            barraPrimeira.classList.add("barra1TransformFinal");

            // REAPARECER BARRA2
            barraSegunda.classList.remove("barra2Transform");
            barraSegunda.classList.add("barra2TransformFinal");

            // REAPARECER BARRA3
            barraTerceira.classList.remove("barra3Transform");
            barraTerceira.classList.add("barra3TransformFinal");
            run = true;
        }
*/



    //}




    return (
        // BARRA NAVEGACAO
        <div>
           <nav id="barraDeNavegacao" className="navbar navbar-expand-lg bg-dark-neutral navbar-light fixed-top">
                <img src={logo} alt="Logo We Gym" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-item nav-link links" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-item nav-link links" href="#">Subscription</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-item nav-link links" href="/training">Training</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-item nav-link links" href="#">Instructors</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-item nav-link links" href="#">Contacts</a>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </div>
    );
};