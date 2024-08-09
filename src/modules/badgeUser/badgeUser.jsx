import React from "react";
import "./badgeUser.style.css";

const BadgeUser = (props) => {
    const showState = props.show;
    const nameEmail = props.email.split("@");
    const emailInitial = nameEmail[0] ? nameEmail[0][0] : "";
    const classNames = "avatar-circle rounded-circle bg-info float-end text-end btn-login "

    return (
        <div className="avatar" id="logoUser">
            <span className={(showState) ? classNames : classNames+ "d-none"}>
                {emailInitial.toLocaleUpperCase()}
            </span>
        </div>
    );
};

export default BadgeUser;