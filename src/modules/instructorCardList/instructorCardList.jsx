import React from "react";
import "./instructorCardList.style.css";
import inst1 from "../../assets/images/instrutores1.png";
import modalShow from "../../assets/mjs/main/modal.mjs";

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
                                <button className="btn btn-outline-warning">Reveja as suas aulas</button>
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
                        <img src={inst1} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-4">
                        <div id="cardOneText" className="card-body">
                            <h5 className="card-title">Maria</h5>
                            <p className="card-text">This is a Maria card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <button onClick={() => modalShow("cardOneImage","cardOneText")} className="btn btn-outline-warning">Mais detalhes</button>

                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div id="cardTwo" className="col-2">
                        <img src={inst1} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div id="cardTwoText" className="col-4">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <button className="btn btn-outline-warning">Mais detalhes</button>

                        </div>
                    </div>
                    
                </div>
            </div>

             {/* LINHA 2 */}
            <div id="cardLineTwo" className="card mb-3 mt-3">
                <div className="row ">
                    
                     {/* CARD 3 */}
                    <div id="cardThree" className="col-2">
                        <img src={inst1} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div id="cardThreeText" className="col-4">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <button className="btn btn-outline-warning">Mais detalhes</button>

                        </div>
                    </div>

                    {/* CARD 4 */}
                    <div id="cardFour" className="col-2">
                        <img src={inst1} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div id="cardFourText" className="col-4">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <button className="btn btn-outline-warning">Mais detalhes</button>

                        </div>
                    </div>
                    
                </div>
            </div>

            
            
        </div>
    );
};