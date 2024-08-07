// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import "./modalLogin.style.css";
import {Button, Form, Modal, Tab, Nav, Row, Col} from "react-bootstrap";

export const ModalLogin = (props) => {
    const handleClose = props.onHide
    const [currentTab, setCurrentTab] = useState("login");

    const changeToLogin = () => setCurrentTab('login');
    const changeToRegiste = () => setCurrentTab('register');

    return (
        <Modal{...props} centered aria-labelledby="contained-modal-title-vcenter" className="align-middle" id="modalLogin">
            <Tab.Container className="bg-dark text-warning tab-login-register card-no-border" defaultActiveKey={currentTab} justify>
                <Modal.Header closeButton className='bg-dark border-0 justify-content-center align-items-start'>
                    <Modal.Title>
                        <Nav variant="tabs" className="bg-dark text-warning tab-login-register">
                            <Col sm={5} className="">
                                <Nav.Item>
                                    <Nav.Link eventKey="login" onClick={changeToLogin}>Login</Nav.Link>
                                </Nav.Item>
                            </Col>
                            <Col sm={5}>
                                <Nav.Item>
                                    <Nav.Link eventKey="registe">Registo</Nav.Link>
                                </Nav.Item>
                            </Col>
                        </Nav>
                    </Modal.Title>
                </Modal.Header>
                <Row>
                    <Col sm={12}>
                        <Tab.Content>
                            <Tab.Pane eventKey="login">
                                <Form>
                                    <Modal.Body className='bg-dark px-5'>
                                        <Form.Group className="mb-2" controlId="formLoginEmail">
                                            <Form.Label className='text-light'>Email address</Form.Label>
                                            <Form.Control className='border-warning text-warning bg-dark input-email-place'
                                                          type="email" placeholder="Enter email"/>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formLoginPassword">
                                            <Form.Label className='text-light'>Password</Form.Label>
                                            <Form.Control className='border-warning text-warning bg-dark input-email-place'
                                                          type="password" placeholder="Password"/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                            <Form.Check className='border-warning text-light ckeck-color' type="checkbox"
                                                        label="Remember me"/>
                                        </Form.Group>
                                    </Modal.Body>
                                    <Modal.Footer className='bg-dark border-0 px-5'>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Cancel
                                        </Button>
                                        <Button variant="warning" type="submit">
                                            Submit
                                        </Button>
                                    </Modal.Footer>
                                </Form>
                            </Tab.Pane>
                            <Tab.Pane eventKey="registe">
                                <Form>
                                    <Modal.Body className='bg-dark px-5'>
                                        <Form.Group className="mb-2" controlId="formRegisterEmail">
                                            <Form.Label className='text-light'>Email address</Form.Label>
                                            <Form.Control className='border-warning text-warning bg-dark input-email-place'
                                                          type="email" placeholder="Enter email"/>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formRegisterPassword">
                                            <Form.Label className='text-light'>Password</Form.Label>
                                            <Form.Control className='border-warning text-light bg-dark input-email-place'
                                                          type="password" placeholder="Password"/>
                                        </Form.Group>
                                    </Modal.Body>
                                    <Modal.Footer className='bg-dark border-0 px-5'>
                                        <Button variant="secondary" onClick={changeToLogin}>
                                            Cancel
                                        </Button>
                                        <Button variant="warning" type="submit">
                                            Submit
                                        </Button>
                                    </Modal.Footer>
                                </Form>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Modal>
    );
};

export default ModalLogin;