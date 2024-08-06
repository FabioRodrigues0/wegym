// eslint-disable-next-line no-unused-vars
import React from "react";
import "./instructors.style.css";
import InstructorCardList from "../../modules/instructorCardList/instructorCardList.jsx";
import Banner from "../../modules/banner/banner.jsx";

export const Instructors = () => {

    return (
        <div>
            <Banner isWithCarrocel={false} title={"Instrutores"} />
            <div className="container mt-5">
                <InstructorCardList />
            </div>
        </div>
    );
};