// eslint-disable-next-line no-unused-vars
import React from "react";
import "./trainingTable.style.css";
import {Container, Table} from "react-bootstrap";
import { format } from "date-fns";
import {pt} from "date-fns/locale";
import {db} from "../../data/data.js";

function formatDate(oldDate) {
    return format(oldDate, "EEE dd MMMM", {locale:pt});
}

export const TrainingTable = () => {
    const daysWeek = [' ', 'seg', "ter", 'qua', 'qui', 'sex', 'sab', 'dom']
    const dateFormat = formatDate(Date.now());
    const daysSplit = dateFormat.split(" ");
    let found= daysWeek.findIndex(e => e.includes(daysSplit[0]));
    console.log(db)

    const finalArray = []
    function writeObject (){
        for (let i = 1; i < 7; i++) {
            if (i < found){
                let dataTemp = new Date(Date.now());
                dataTemp.setDate(new Date().getDate() - (i))
                finalArray.push(formatDate(dataTemp));
            }else if (i > found) {
                let dataTemp = new Date(Date.now());
                dataTemp.setDate(new Date().getDate() + (i - found))
                finalArray.push(formatDate(dataTemp));
            }else{
                finalArray.push(formatDate(Date.now()));
            }
        }
    }
    writeObject();
    return (
        <Container className="table-bordered mt-5 pt-4">
            <Table striped bordered hover className="class-table">
                <thead>
                <tr>
                    {finalArray.map(week =>
                        // eslint-disable-next-line react/jsx-key
                        <td className="header-table"><span>{week}</span></td>
                    )}
                </tr>
                </thead>
                <tbody>
                <tr>
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
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </Table>
        </Container>
    );
};