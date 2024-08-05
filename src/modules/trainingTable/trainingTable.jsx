// eslint-disable-next-line no-unused-vars
import * as React from 'react'
import "./trainingTable.style.css";
import {Container, Table} from "react-bootstrap";
import {defaultTable} from '../../data/data.tsx';
import TrainingHours from "../trainingHours/trainingHours.jsx";

export const TrainingTable = () => {

    const [data, _setData] = React.useState(() => [...defaultTable])

    return (
        <Container className="parent mt-5 pt-4">
            <Table id="table-classrooms" variant="dark" className="class-table">
                <thead className="table-warning">
                <tr>
                    <th scope="col"><span></span></th>
                    {data.map((day, index) => (
                        <th scope="col" className="header-table" key={index}>
                            <span>{day.headerDay}</span>
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {Array(22).fill(0, 8, 22).map((_, i) =>
                    <TrainingHours index={i} classes={data}/>
                )}
                </tbody>
            </Table>
        </Container>
    );
};

