import React from "react";
import "./badgeUser.style.css";

const BadgeUser = (props) => {
    const nameEmail = props.email.split("@");
    const emailInitial = nameEmail[0] ? nameEmail[0][0] : "";

    return (
        <div className="avatar">
            <span className="avatar-circle d-none rounded-circle bg-info float-end text-end btn-login">
                {emailInitial.toLocaleUpperCase()}
            </span>
        </div>
    );
};

export default BadgeUser;