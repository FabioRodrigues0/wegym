// eslint-disable-next-line no-unused-vars
import React from "react";
import "./header.style.css";
import logo from "../assets/Logo.png";
import "../assets/mjs/header/navbarShow.mjs"; //MODULO JS - FUNCAO DE APARECER E REAPARECER NAVBAR
import rodar from "../assets/mjs/header/hamburgoHover.mjs"; // MODULO JS - FUNCAO CONTROLO DE HAMBURGO BOTAO


export const Header = () =>{

    return (
        // BARRA NAVEGACAO
        <div>

            <nav id="barraDeNavegacao" className="navbar navbar-expand-lg bg-dark-neutral fixed-top">
                <div className="container-fluid">
                    <img src={logo} alt="Logo We Gym" />
                    
                    <button onClick={rodar} id="hamburgo" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"  aria-expanded="false" >
                    {/* <span class="navbar-toggler-icon"></span> */}
                        {/* <img src={navLogo} alt="Icon de Hamburgo" /> */}
                        <div id="b1" className="bar1"></div>
                        <div id="b2" className="bar2"></div>
                        <div id="b3" className="bar3"></div>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">

                                <li className="nav-item">
                                    <a className="nav-item nav-link links" href="/">Página Incial</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-item nav-link links" href="/">Página Incial</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-item nav-link links" href="#">Subscrições</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-item nav-link links" href="/training">Aulas</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-item nav-link links" href="#">Instrutores</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-item nav-link links" href="#">Contactos</a>
                                </li>

                        </ul>
                    </div>
                </div>
            </nav>


        </div>




    );
};