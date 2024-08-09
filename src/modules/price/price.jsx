// eslint-disable-next-line no-unused-vars
import React from "react";
import "./price.style.css";
import focuSub from "../../assets/mjs/main/subscriptionsHoverAnim.mjs"
import unFocuSub from "../../assets/mjs/main/subscriptionsOutAnim.mjs"
import ButtonSubscription from "../buttonSubcription/buttonSubscription.jsx";

export const Price = (show) => {
    const price = show.showPrice;

    return (
        <div className="">
            <div className="container">
                <div className="row">
                    <div className="col">
                        {/* COLUNA 1 */}
                        <div onMouseEnter={() => focuSub("One")} onMouseLeave={() => unFocuSub("One")} id="cardOne"
                             className="card mb-4 box-shadow">
                            <div id="cardOneHeader" className="card-header text-dark">
                                <h4 className="my-0 font-weight-normal">Plano Grátis</h4>
                            </div>
                            <div className="card-body">
                                {(price) ?
                                    <h1 className="card-title pricing-card-title">10€ <small className="text-muted">/
                                        mês</small></h1> : <span></span>}
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Avaliação fisíca inicial</li>
                                    <li>Horário restrito</li>
                                    <li>Horário de aulas restrito</li>
                                    <li>Banho pago</li>
                                </ul>
                                {(price)
                                    ? <button className="btn btn-lg btn-block btn-outline-warning">Compra</button>
                                    : <ButtonSubscription typeButton={"free"}/> }
                            </div>
                            <div id="cardOneFooter" className="card-footer">

                            </div>
                        </div>

                    </div>

                    <div className="col">

                        {/* COLUNA 2 */}
                        <div onMouseEnter={() => focuSub("Two")} onMouseLeave={() => unFocuSub("Two")} id="cardTwo"
                             className="card mb-4 box-shadow">
                            <div id="cardTwoHeader" className="card-header text-dark">
                                <h4 className="my-0 font-weight-normal">Plano Normal</h4>
                            </div>
                            <div className="card-body">
                                {(price) ?
                                    <h1 className="card-title pricing-card-title">20€ <small className="text-muted">/
                                        mês</small></h1> : <span></span>}
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Avaliação fisíca inicial c/ acompanhamento</li>
                                    <li>Horário alargado</li>
                                    <li>Horário de aulas alargado</li>
                                    <li>Inclui consulta c/ nutricionaista</li>
                                    <li>Banho incuido</li>
                                </ul>
                                {(price)
                                    ? <button className="btn btn-lg btn-block btn-outline-warning">Compra</button>
                                    : <ButtonSubscription typeButton={"normal"}/> }
                            </div>
                            <div id="cardTwoFooter" className="card-footer">

                            </div>
                        </div>

                    </div>

                    <div className="col">

                        {/* COLUNA 1 */}
                        <div onMouseEnter={() => focuSub("Three")} onMouseLeave={() => unFocuSub("Three")}
                             id="cardThree" className="card mb-4 box-shadow">
                            <div id="cardThreeHeader" className="card-header text-dark">
                                <h4 className="my-0 font-weight-normal">Plano Premium</h4>
                            </div>
                            <div className="card-body">
                                {(price) ?
                                    <h1 className="card-title pricing-card-title">40€ <small className="text-muted">/
                                        mês</small></h1> : <span></span>}
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Avaliação fisíca inicial c/ acompanhamento</li>
                                    <li>Plano de treinos personalizado</li>
                                    <li>Horário 24 horas</li>
                                    <li>Avaliação nutricional semanalmente</li>
                                    <li>Participação em vários eventos</li>
                                </ul>
                                {(price)
                                    ? <button className="btn btn-lg btn-block btn-outline-warning">Compra</button>
                                    : <ButtonSubscription typeButton={"premium"}/> }
                            </div>
                            <div id="cardThreeFooter" className="card-footer">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Price;