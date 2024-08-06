// eslint-disable-next-line no-unused-vars
import React from "react";
import "./newCard.style.css";
import {Container,Card, Col,Row} from "react-bootstrap";
import NewsCardModal from "../newCardModal/newCardModal.jsx";

export const NewCard = (card, index) => {

    console.log(card.card.title);
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <Row>
                <Col sm={4} key={index}>
                    {/*style={{width: '18rem'}}*/}
                    <Card className="card-ajust" onClick={() => setModalShow(true)}>
                        <Card.Img variant="bottom" src={card.card.image} width={200} height={200} className="cardImage"/>
                    </Card>
                </Col>
                <Col sm={8}>
                    <Card onClick={() => setModalShow(true)}>
                        <Card.Body>
                            <Card.Title className="cardTitle">{card.card.title}</Card.Title>
                            <Card.Text>
                                {card.card.content}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <NewsCardModal
                        modalTitle={card.card.title}
                        modalImage={card.card.image}
                        modalDescription={card.card.content}
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </Col>
        </Row>
        );
};

export default NewCard;