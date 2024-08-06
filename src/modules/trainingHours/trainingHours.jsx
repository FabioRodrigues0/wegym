import React from "react";
import "./traininigHours.style.css";
import Classroom from "../classroom/classroom.jsx";

export default function TrainingHours(props) {
    const row_key = props.index;
    const data = props.classes;
    const data_filter = data.map((day) => (day.infoClass.filter(classroom => classroom.hour === row_key)))

    return (
        <tr key={row_key}>
            <th scope="col" className='hour-cell'><span>{row_key}</span></th>
            {data_filter.map((filter_classroom) => (
                <td scope="col" className="" key={row_key}>
                    {(filter_classroom.length > 0)
                        ? <Classroom state={true} classroom={filter_classroom}/>
                        : <Classroom state={false}></Classroom>}
                </td>
            ))}
        </tr>
    );
};
