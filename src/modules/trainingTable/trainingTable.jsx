// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from "react";
import "./trainingTable.style.css";
import {Container, Table} from "react-bootstrap";
import formatDate from '../../assets/mjs/date/formatDate.mjs'
import {ProductService} from '../../data/data.jsx';
/*import Classroom from "../classroom/classroom.jsx";*/

export const TrainingTable = () => {
    const daysWeek = [' ', 'seg', "ter", 'qua', 'qui', 'sex', 'sab', 'dom']
    const dateFormat = formatDate(Date.now());
    const daysSplit = dateFormat.split(" ");
    let found = daysWeek.findIndex(e => e.includes(daysSplit[0]));

    const finalArray = []

    function writeObject() {
        for (let i = 1; i < 8; i++) {
            if (i < found) {
                let dataTemp = new Date(Date.now());
                dataTemp.setDate(new Date().getDate() - (found - i))
                finalArray.push(formatDate(dataTemp));
            } else if (i > found) {
                let dataTemp = new Date(Date.now());
                dataTemp.setDate(new Date().getDate() + (i - found))
                finalArray.push(formatDate(dataTemp));
            } else {
                finalArray.push(formatDate(Date.now()));
            }
        }
    }

    writeObject();
    /*const [aulas, setAulas] = useState([]);*/

   /* useEffect(() => {
        ProductService.getProducts().then(data => setAulas(data));
    }, []);*/
    /*console.log(aulas)*/
    return (
        <Container className="parent mt-5 pt-4">
            <Table variant="dark" className="class-table">
                <thead className="table-warning">
                <tr>
                    <th scope="col"><span></span></th>
                    {finalArray.map(week =>
                        // eslint-disable-next-line react/jsx-key
                        <th scope="col" key={week} className="header-table"><span>{week}</span></th>
                    )}
                </tr>
                </thead>
                <tbody>
                <tr >
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </Table>
        </Container>
    );
};

/*<div className="row row-cols-7">
    {finalArray.map(week =>
        // eslint-disable-next-line react/jsx-key
        <div className="col header-table"><span>{week}</span></div>
    )}
</div>

<div className="row">
    <div className="col-1">1</div>
    {aulas.map(aula =>
        <div className="col-1">
            (finalArray[0] === aula.date)
            ? <Classroom state={true} name={aula.name} instrutor={aula.instrutor} date={aula.date}/>
            : <Classroom state={false}></Classroom>
        </div>
    )}
</div>*/


/*
{finalArray.map(dayWeek =>
    (dayWeek === aula.date)
        ? <Classroom state={true} name={aula.name} instrutor={aula.instrutor} date={aula.date}/>
        : <Classroom state={false}
                )}*/
