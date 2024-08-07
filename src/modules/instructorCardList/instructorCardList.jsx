import React from "react";
import {Container,Col,Row} from "react-bootstrap";
import "./instructorCardList.style.css";
import NewCard from "../newCard/newCard";

let MarianaCard = {
    title: "Mariana Sousa",
    image: "./src/assets/images/instrutorMariana.png",
    content: "This is a Maria card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
};

let JoaoCard = {
    title: "João Martins",
    image: "./src/assets/images/instrutorJoao.png",
    content: "This is a Maria card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
};

let PedroCard = {
    title: "Pedro Almeida",
    image: "./src/assets/images/instrutorPedro.png",
    content: "This is a Maria card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
};

let AnaCard = {
    title: "Ana Costa",
    image: "./src/assets/images/instrutorAna.png",
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