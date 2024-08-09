// eslint-disable-next-line no-unused-vars
import React from "react";
import "./buttonSubscription.style.css";

export const ButtonSubscription = (type) => {

    const button = type.typeButton;
    let presentValue;

    if(button == "free")
    {
        presentValue = "Regista-te grátis";
    }
    else if(button == "normal")
    {
        presentValue = "Regista-te";
    }
    else if(button == "premium")
    {
        presentValue = "Torna-te um premium"
    }

    return (
        <div className="">
            <a className="nav-item nav-link links" href="/subcriptions">
                <button type="button"
                        className="btn btn-lg btn-block btn-outline-warning">{presentValue}
                </button>
            </a>
        </div>
    );
};

export default ButtonSubscription;