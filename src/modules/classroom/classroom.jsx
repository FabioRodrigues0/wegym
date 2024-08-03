import React from "react";
import "./classroom.style.css";

export default function Classroom(props) {
    const tem_aula = props.state;
    const classroom = props.classroom;
    console.log(tem_aula);
    console.log(classroom);
    console.log("entrou aqui");
    return (tem_aula)
            ?   <div className="classroom col-2">
                    <span className="classname">{classroom[0].name}</span>
                    <span className="instructor">{classroom[0].instrutor}</span>
                </div>
            : <div className="no-classroom"></div>

};