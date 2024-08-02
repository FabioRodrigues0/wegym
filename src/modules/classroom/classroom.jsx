import React from "react";
import "./classroom.style.css";

export default function Classroom(props) {
    const tem_aula = props.state;
    const name = props.name;
    const instrutor = props.instrutor;
    const date = props.date;
    console.log(tem_aula);
    return (
        <div className="">
                {(tem_aula)
                    ? <div className="classroom col-2">
                        <span className="classname">{name}</span>
                        <span className="instrutor">{instrutor}</span>
                    </div>
                    : <div className="no-classroom"></div>}
        </div>
    );
};