import React from "react";
import "./badgeUser.style.css";
import {logOff} from "../../assets/mjs/loginAndSign/login.mjs";

const BadgeUser = (props) => {
    const showState = props.show;
    const nameEmail = props.email.split("@");
    const emailInitial = nameEmail[0] ? nameEmail[0][0] : "";
    const colors = ["bg-primary", "bg-success", "bg-info", "bg-info", "bg-warning", "bg-danger"];
    const randomIndex = Math.floor(Math.random() * colors.length);

    const classNames = ("btn btn-secondary card-no-border rounded-circle ") + colors[randomIndex]

    console.log(classNames);
    return (
        <div className="avatar" id="logoUser">

            {/*{(showState) ? classNames : classNames + " d-none"}*/}
            <div id="dropdownBadge"  className="dropdown d-none" >
                {/* <span id="spanBadge" className={(showState) ? classNames : `${classNames} d-none`}>
                    {emailInitial.toLocaleUpperCase()}
                </span> */}
               
                <button id="btnDrop" className={classNames} type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                {emailInitial.toLocaleUpperCase()}
                </button>
                <ul className="dropdown-menu bg-dark dropdown-menu-lg-end">
                    <li><a onClick={logOff} className="btn btn-warning-outline m-0 text-warning dropdown-item">Log out</a></li>
                </ul>
            </div>
        </div>
    );
};

export default BadgeUser;