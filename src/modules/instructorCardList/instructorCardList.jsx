import React from "react";
import {Container, Col, Row} from "react-bootstrap";
import "./instructorCardList.style.css";
import NewCard from "../newCard/newCard";
import fotoMariana from "../../assets/images/instrutorMariana.png";
import fotoJoao from "../../assets/images/instrutorJoao.png";
import fotoPedro from "../../assets/images/instrutorPedro.png";
import fotoAna from "../../assets/images/instrutorAna.png";

let MarianaCard = {
    title: "Mariana Sousa",
    image: fotoMariana,
    content: "Licenciada em Dança – Menção Educação Física e Dança Escolar, pela Universidade de Coimbra; Professora de Dança e Group Trainer."
};

let JoaoCard = {
    title: "João Martins",
    image: fotoJoao,
    content: "Licenciado em Ciências do Desporto – Menção Educação Física e Desporto Escolar, pela Universidade de Coimbra; Personal Trainer e Group Trainer."
};

let PedroCard = {
    title: "Pedro Almeida",
    image: fotoPedro,
    content: "Licenciado em Desporto na Escola Superior de Desporto de Rio Maior; Pós-graduação em Exercício e Saúde na Escola Superior de Desporto de Rio Maior – Instituto Politécnico de Santarém. Instrutor responsável pelas avaliações físicas e corporais. Personal Trainer e Group Trainer."
};

let AnaCard = {
    title: "Ana Costa",
    image: fotoAna,
    content: "Licenciada em Ciências do Desporto – Menção Educação Física e Desporto Escolar, pela Universidade de Coimbra. Professora de Yoga e Group Trainer."
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