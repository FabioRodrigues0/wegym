import React from "react";
import "./badgeUser.style.css";
import {logOff} from "../../assets/mjs/loginAndSign/login.mjs";

const BadgeUser = (props) => {
    const showState = props.show;
    const nameEmail = props.email.split("@");
    const emailInitial = nameEmail[0] ? nameEmail[0][0] : "";
    const colors = ["bg-primary", "bg-success", "bg-info", "bg-info", "bg-warning", "bg-danger"];
    const randomIndex = Math.floor(Math.random() * colors.length);

    const classNames = ("avatar-circle rounded-circle text-end " + colors[randomIndex])
    console.log(classNames);
    return (
        <div className="avatar" id="logoUser">
            {/*{(showState) ? classNames : classNames + " d-none"}*/}
            <span id="spanBadge" className={(showState) ? classNames : classNames + " d-none"}>
                {emailInitial.toLocaleUpperCase()}
            </span>
            <div id="dropdownBadge"  class="dropdown d-none">
                <button class="btn btn-secondary dropdown-toggle bg-dark card-no-border" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                </button>
                <ul class="dropdown-menu bg-dark">
                    <li><a onClick={logOff} className="btn btn-warning-outline m-0 text-warning">Log out</a></li>
                </ul>
            </div>
        </div>
    );
};

export default BadgeUser;