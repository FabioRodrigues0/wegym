// eslint-disable-next-line no-unused-vars
import React from "react";
import "./contacts.style.css";
import Banner from "../../modules/banner/banner.jsx";

export const Contacts = () => {
    return (
        <div>
            <Banner isWithCarrocel={false} title={"Contactos"} description={"Qualquer dúvida pode nos contactar através do formulário apresentado ou através dos contactos disponíveis."}/>
            <div id="darMargem"></div>
            {/* <!-- CONTAINER INICIO --> */}
            <div className="container px-4 py-5 mt-5 mb-5 p-0 rounded-3" id="featured-3">
                <div className="row">
                    <div className="col">
                        <div className="jumbotron">
                            <p className="text-white">Para mais informações, não hesite em questionar.</p>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-5">
                        <form>
                            <div className="form-group">
                                <label for="exampleInputEmail1"></label>
                                <input type="email" className="form-control border-warning text-warning bg-dark input-place" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite Nome" />
                            </div>
                            <div className="form-group mt-3">
                                <label for="exampleFormControlTextarea1"></label>
                                <textarea className="form-control border-warning text-warning bg-dark input-place" id="exampleFormControlTextarea1" rows="3" placeholder="Digite a sua questão"></textarea>
                            </div>
                            <button type="submit" className="btn btn-outline-warning mt-3 btn-lg">Enviar</button>
                        </form>
                    </div>
                    <div className="col-4">
                        <div>
                            <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2004.8668922708189!2d-8.651832249076932!3d41.15839781814434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd246582ddd59001%3A0x9ee3f032e812e1fd!2sR.%20de%20Cir%C3%ADaco%20Cardoso%20186%2C%204150-212%20Porto!5e0!3m2!1spt-PT!2spt!4v1722870253504!5m2!1spt-PT!2spt" width="400" height="250" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>

                    <div className="col-3 text-center">
                        <div id="lista" className="text-light">
                            <ul>
                                <li><strong className='text-warning'>Contacto Geral</strong></li>
                                <li>+351 226 195 200</li>
                                <br />
                                <li><strong className='text-warning'>Email</strong></li>
                                <li>academy@wegym.pt</li>
                                <br />
                                <li>Rua de Ciríaco Cardoso, 186</li>
                                <li>4150-212 Porto</li>
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
