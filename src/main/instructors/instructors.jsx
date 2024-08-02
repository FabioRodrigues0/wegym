// eslint-disable-next-line no-unused-vars
import React from "react";
import "./instructors.style.css";
import InstructorCardList from "../../modules/instructorCardList/instructorCardList.jsx";

export const Instructors = () => {

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col instructTitle ">
                        <h1>Instrutores</h1>
                    </div>
                </div>

                <InstructorCardList />


            </div>
        </div>
    );
};