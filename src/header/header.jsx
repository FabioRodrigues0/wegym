// eslint-disable-next-line no-unused-vars
import React from "react";
import "./header.style.css";
import logo from "../assets/Logo.png";
import navLogo from "../assets/navbar/hamburgo.png"


export const Header = () =>{

    document.addEventListener("DOMContentLoaded", (event) => {
    
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
    let run = true;
    
    function rodar()
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



        
    }

   

      
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
                                    <a className="nav-item nav-link links" href="#">Página Incial</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-item nav-link links" href="#">Subscrições</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-item nav-link links" href="#">Aulas</a>
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