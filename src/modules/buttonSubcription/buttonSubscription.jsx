// eslint-disable-next-line no-unused-vars
import React from "react";
import "./buttonSubscription.style.css";

export const ButtonSubscription = () => {
    return (
        <div className="">
            <a className="nav-item nav-link links" href="/subcriptions">
                <button type="button"
                        className="btn btn-lg btn-block btn-outline-warning">Regista-te
                    grátis
                </button>
            </a>
        </div>
    );
};

export default ButtonSubscription;