import React from "react";
import {Container,Col,Row} from "react-bootstrap";
import "./instructorCardList.style.css";
import NewCard from "../newCard/newCard";
import fotoMariana from "../../assets/images/instrutorMariana.png";
import fotoJoao from "../../assets/images/instrutorJoao.png";
import fotoPedro from "../../assets/images/instrutorPedro.png";
import fotoAna from "../../assets/images/instrutorAna.png";

let MarianaCard = {
    title: "Mariana Sousa",
    image: fotoMariana,
    content: "This is a Maria card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
};

let JoaoCard = {
    title: "João Martins",
    image: fotoJoao,
    content: "This is a Maria card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
};

let PedroCard = {
    title: "Pedro Almeida",
    image: fotoPedro,
    content: "This is a Maria card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
};

let AnaCard = {
    title: "Ana Costa",
    image: fotoAna,
    content: "This is a Maria card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
};


export default function InstructorCardList() {
    return (
        <div>

            <Container className="instructorCards">
                <Row className="ajusteCartao">
                    <Col>
                        <NewCard card={MarianaCard}/>
                    </Col>
                    <Col>
                        <NewCard card={JoaoCard}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <NewCard card={PedroCard}/>
                    </Col>
                    <Col>
                        <NewCard card={AnaCard}/>
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
};