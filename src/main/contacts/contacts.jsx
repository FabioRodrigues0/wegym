// eslint-disable-next-line no-unused-vars
import React from "react";
import "./contacts.style.css";

export const Contacts = () => {
    return (
        <div>
            <div id="darMargem"></div>
            {/* <!-- CONTAINER INICIO --> */}
            <div className="container px-4 py-5 mt-5 mb-5 p-0 rounded-3" id="featured-3">

                <div className="row">
                    <div className="col">
                        <div className="jumbotron">
                            <h1 className="display-4 text-white">Contactos</h1>
                            <p className="lead text-white">Qualquer dúvida pode nos contactar através do formulário apresentado ou através dos contactos disponíveis.</p>
                            <hr className="my-4" />
                            <p className="text-white">Para mais informações, não hesite em questionar.</p>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-5">
                        <form>
                            <div className="form-group">
                                <label for="exampleInputEmail1"></label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite Nome" />
                            </div>
                            <div className="form-group mt-3">
                                <label for="exampleFormControlTextarea1"></label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Digite a sua questão"></textarea>
                            </div>
                            <button type="submit" className="btn btn-outline-light mt-3 btn-lg">Enviar</button>
                        </form>
                    </div>
                    <div className="col-4">
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1200.2660537711774!2d-9.303093362789841!3d38.71539404652945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ecececdda7707%3A0xcbde4fc961295c08!2sEstrada%20de%20Porto%20Salvo%2C%20Porto%20Salvo!5e0!3m2!1spt-PT!2spt!4v1722847753590!5m2!1spt-PT!2spt" width="400" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>

                    <div className="col-3 text-center">
                        <div id="lista" className="text-light">
                            <ul>
                                <li>CONTACTO GERAL</li>
                                <li>+351 226 195 200</li>
                                <br />
                                <li>EMAIL</li>
                                <li>academy@wegym.pt</li>
                                <br />
                                <li>Rua de Ciríaco Cardoso, 186</li>
                                <li>2770-192 Porto Salvo</li>
                                <li>Telf: +351 226 195 200</li>
                            </ul>

                        </div>
                    </div>
                    
                </div>
            </div>
            {/* <!-- CONTAINER FIM --> */}

        </div>
    );
};
