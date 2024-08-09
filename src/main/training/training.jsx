// eslint-disable-next-line no-unused-vars
import React from "react";
import "./training.style.css";
import {TrainingTable} from "../../modules/trainingTable/trainingTable.jsx";
import Banner from "../../modules/banner/banner.jsx";


export const Training = () => {
    return (
        <div>
            <Banner isWithCarrocel={false} title={"Aulas"} />
            <TrainingTable />
        </div>
    );
};