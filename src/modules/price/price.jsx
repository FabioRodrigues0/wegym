// eslint-disable-next-line no-unused-vars
import React from "react";
import "./price.style.css";

export const Price = () => {


    return (
        
        <div>

        <div className="container">
            <div className="row">
                <div className="col">
                    
                    {/* COLUNA 1 */}
                    <div className="card border-warning mb-4 box-shadow">
                        <div className="card-header text-dark bg-warning">
                            <h4 claclassNamess="my-0 font-weight-normal">Plano Grátis</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">10€ <small className="text-muted">/ mês</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>Avaliação fisíca inicial</li>
                                <li>Horário restrito</li>
                                <li>Horário de aulas restrito</li>
                                <li>Banho pago</li>
                            </ul>
                            <button type="button" className="btn btn-lg btn-block btn-outline-warning">Regista-te grátis</button>
                        </div>
                    </div>

                </div>

                <div className="col">
                    
                    {/* COLUNA 2 */}
                    <div className="card border-warning mb-4 box-shadow">
                        <div className="card-header text-dark bg-warning">
                            <h4 className="my-0 font-weight-normal">Plano Normal</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">20€ <small className="text-muted">/ mês</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                            <li>Avaliação fisíca inicial c/ acompanhamento</li>
                            <li>Horário alargado</li>
                            <li>Horário de aulas alargado</li>
                            <li>Inclui consulta c/ nutricionista</li>
                            <li>Banho Incluido</li>
                            </ul>
                            <button type="button" className="btn btn-lg btn-block btn-outline-warning">Regista-te</button>
                        </div>

                        <div>

                        </div>
                    </div>

                </div>

                <div className="col">
                    
                    {/* COLUNA 3 */}
                    <div className="card border-warning mb-4 box-shadow">
                        <div className="card-header text-dark bg-warning">
                            <h4 className="my-0 font-weight-normal">Plano Premium</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">40€ <small className="text-muted">/ mês</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                            <li>Avaliação fisíca inicial c/ acompanhamento</li>
                            <li>Plano de treinos personalizado</li>
                            <li>Horário 24 horas</li>
                            <li>Avaliação nutricional semanalmente</li>
                            <li>Participação em vários eventos</li>   
                            </ul>
                            <button type="button" className="btn btn-lg btn-block btn-outline-warning">Torna-te um premium</button>
                        </div>
                        <div className="card-footer bg-warning">
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>


        </div>
    );
};

export default Price;