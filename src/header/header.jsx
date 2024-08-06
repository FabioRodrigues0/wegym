// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import "./header.style.css";
import logo from "../assets/icons/Logo.png";
import "../assets/mjs/header/navbarShow.mjs"; //MODULO JS - FUNCAO DE APARECER E REAPARECER NAVBAR
import rodar from "../assets/mjs/header/hamburgoHover.mjs";
import {Button, Form, Modal} from "react-bootstrap"; // MODULO JS - FUNCAO CONTROLO DE HAMBURGO BOTAO

export const Header = () =>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        // BARRA NAVEGACAO
        <div>
            <header id='barraDeNavegacao'
                    className="bg-dark-neutral fixed-top d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
                <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <img src={logo} alt="Logo We Gym"/>
                </a>
                <button onClick={rodar} id="hamburgo" className="navbar-toggler" type="button"
                        data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-expanded="false">
                    <div id="b1" className="bar1"></div>
                    <div id="b2" className="bar2"></div>
                    <div id="b3" className="bar3"></div>
                </button>

                <div className="collapse navbar-collapse text-align-center" id="navbarNavDropdown">

                </div>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li className="nav-item">
                        <a className="nav-item nav-link links" href="/">Página Incial</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-item nav-link links" href="/#about">Sobre nós</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-item nav-link links" href="/subcriptions">Subscrições</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-item nav-link links" href="/training">Aulas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-item nav-link links" href="/instructors">Instrutores</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-item nav-link links" href="/gallery">Galeria</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-item nav-link links" href="/contacts">Contactos</a>
                    </li>
                </ul>

                <div className="text-end">
                    <button type="button" className="btn btn-outline-warning me-2" onClick={handleShow}>Login</button>
                    <button type="button" className="btn btn-warning">Sign-up</button>
                </div>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </header>
        </div>
    );
};