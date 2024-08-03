import React from "react";
import "./instructorCardList.style.css";
import instMariana from "../../assets/images/instrutorMariana.png";
import instAna from "../../assets/images/instrutorAna.png";
import instPedro from "../../assets/images/instrutorPedro.png";
import instJoao from "../../assets/images/instrutorJoao.png";
import modalShow from "../../assets/mjs/main/modalShow.mjs";
import modalHide from "../../assets/mjs/main/modalHide.mjs";

export default function InstructorCardList() {
    return (
        <div>

                <div className="d-flex justify-content-center">
                    <div className="row" >
                        <div className="col" id="retrieveModal">
                            
                        <div id="divModal" className="divModalHide">
                            <div id="modalDivText">
                                <h2></h2>
                                <img alt="" />
                                <p></p>
                                <button className="btn btn-outline-warning mr-5 rever">Reveja as suas aulas</button>
                                <button onClick={modalHide} className="btn btn-outline-warning">Voltar</button>
                            </div>
                        </div>

                        </div>
                    </div>
                </div>

            {/* LINHA 1 */}
            <div id="cardLineOne" className="card mb-3 mt-3">
                <div className="row">

                    {/* CARD 1 */}
                    <div id="cardOneImage" className="col-2">
                        <img src={instMariana} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-4">
                        <div id="cardOneText" className="card-body">
                            <h5 className="card-title">Mariana Sousa</h5>
                            <p className="card-text">This is a Maria card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <button onClick={() => modalShow("cardOneImage","cardOneText")} className="btn btn-outline-warning">Mais detalhes</button>

                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div id="cardTwoImage" className="col-2">
                        <img src={instJoao} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div id="cardTwoText" className="col-4">
                        <div className="card-body">
                            <h5 className="card-title">João Martins</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <button onClick={() => modalShow("cardTwoImage","cardTwoText")} className="btn btn-outline-warning">Mais detalhes</button>

                        </div>
                    </div>
                    
                </div>
            </div>

             {/* LINHA 2 */}
            <div id="cardLineTwo" className="card mb-3 mt-3">
                <div className="row ">
                    
                     {/* CARD 3 */}
                    <div id="cardThreeImage" className="col-2">
                        <img src={instPedro} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div id="cardThreeText" className="col-4">
                        <div className="card-body">
                            <h5 className="card-title">Pedro Almeida</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <button onClick={() => modalShow("cardThreeImage","cardThreeText")} className="btn btn-outline-warning">Mais detalhes</button>

                        </div>
                    </div>

                    {/* CARD 4 */}
                    <div id="cardFourImage" className="col-2">
                        <img src={instAna} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div id="cardFourText" className="col-4">
                        <div className="card-body">
                            <h5 className="card-title">Ana Costa</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <button onClick={() => modalShow("cardFourImage","cardFourText")} className="btn btn-outline-warning">Mais detalhes</button>

                        </div>
                    </div>
                    
                </div>
            </div>

            
            
        </div>
    );
};