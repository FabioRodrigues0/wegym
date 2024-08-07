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
                            <h5 className="card-title">Mariana Sousa</h5>
                            <p className="card-text">Mariana Sousa.</p>
                            <p className="card-text"><small className="text-muted">Professora de Dança
                            Licenciada em Dança – Menção Educação Física e Dança Escolar, pela Universidade de Coimbra; Professora de Dança e Group Trainer.</small></p>
                            <button className="btn btn-outline-warning">Mais detalhes</button>

                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="col-2">
                        <img src={inst1} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-4">
                        <div className="card-body">
                            <h5 className="card-title">João Martins</h5>
                            <p className="card-text">João Martins.</p>
                            <p className="card-text"><small className="text-muted">Instrutor 

                            
Licenciado em Ciências do Desporto – Menção Educação Física e Desporto Escolar, pela Universidade de Coimbra; Personal Trainer e Group Trainer.</small></p>
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
                            <p className="card-text"> Pedro Almeida </p>
                            <p className="card-text"><small className="text-muted">Instrutor 
                            Licenciado em Desporto na Escola Superior de Desporto de Rio Maior; Pós-graduação em Exercício e Saúde na Escola Superior de Desporto de Rio Maior – Instituto Politécnico de Santarém. Instrutor responsável pelas avaliações físicas e corporais. Personal Trainer e Group Trainer.</small></p>
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
                            <p className="card-text">Ana Costa</p>
                            <p className="card-text"><small className="text-muted">Professora de Yoga
                            Licenciada em Ciências do Desporto – Menção Educação Física e Desporto Escolar, pela Universidade de Coimbra. Professora de Yoga e Group Trainer.</small></p>
                            <button className="btn btn-outline-warning">Mais detalhes</button>

                        </div>
                    </div>
                    
                </div>
            </div>

            
            
        </div>
    );
};