import React from "react";
import "./instructorCardList.style.css";
import inst1 from "../../assets/images/instrutores1.png";

export default function InstructorCardList() {
    return (
        <div>

            {/* LINHA 1 */}
            <div className="card mb-3 mt-3">
                <div className="row ">

                    {/* CARD 1 */}
                    <div className="col-2">
                        <img src={inst1} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-4">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            <button className="btn btn-outline-warning">Mais detalhes</button>

                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="col-2">
                        <img src={inst1} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-4">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            <button className="btn btn-outline-warning">Mais detalhes</button>

                        </div>
                    </div>
                    
                </div>
            </div>

            {/* LINHA 2 */}
            <div className="card mb-3 mt-3">
                <div className="row ">
                    
                    {/* CARD 3 */}
                    <div className="col-2">
                        <img src={inst1} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-4">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            <button className="btn btn-outline-warning">Mais detalhes</button>

                        </div>
                    </div>

                    {/* CARD 4 */}
                    <div className="col-2">
                        <img src={inst1} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-4">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            <button className="btn btn-outline-warning">Mais detalhes</button>

                        </div>
                    </div>
                    
                </div>
            </div>

            
            
        </div>
    );
};