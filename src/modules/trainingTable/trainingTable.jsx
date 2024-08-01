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
        console.log(Date.now())
        for (let i = 1; i < 7; i++) {
            if (i < found){
                let dataTemp = new Date(Date.now());
                dataTemp.setDate(new Date().getDate() - (found - i))
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
        <Container className="mt-5 pt-4">
            <Table variant="dark" className="class-table">
                <thead className="table-info">
                    <tr>
                        <th scope="col"><span></span></th>
                        {finalArray.map(week =>
                            // eslint-disable-next-line react/jsx-key
                            <th scope="col" className="header-table"><span>{week}</span></th>
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