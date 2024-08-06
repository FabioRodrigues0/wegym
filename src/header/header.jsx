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
                    className="fixed-top">
                <nav className="d-flex  py-3 mb-4 flex-wrap navbar navbar-expand-lg navbar-dark bg-dark-neutral align-items-center justify-content-center justify-content-md-between">
                    <div className='container-fluid'>
                        <a href="/"
                           className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                            <img src={logo} alt="Logo We Gym"/>
                        </a>
                        <button onClick={rodar} id="hamburgo" className="navbar-toggler" type="button"
                                data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-expanded="false">
                            <div id="b1" className="bar1"></div>
                            <div id="b2" className="bar2"></div>
                            <div id="b3" className="bar3"></div>
                        </button>

                        <div className="collapse navbar-collapse text-align-center" id="navbarNavDropdown">
                            <ul id='list-nav' className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 w-75">
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

                            <div className="float-end text-end btn-login">
                                <button type="button" className="btn btn-outline-warning me-2"
                                        onClick={handleShow}>Login
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
                <Modal show={show} onHide={handleClose}>
                    <Form>
                        <Modal.Header closeButton className='bg-dark border-0'>
                            <Modal.Title className='text-warning'>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className='bg-dark px-5'>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label className='text-warning'>Email address</Form.Label>
                                <Form.Control className='border-warning text-warning bg-dark input-email-place'
                                              type="email" placeholder="Enter email"/>
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className='text-warning'>Password</Form.Label>
                                <Form.Control className='border-warning text-warning bg-dark input-email-place'
                                              type="password" placeholder="Password"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check className='border-warning text-warning ckeck-color' type="checkbox"
                                            label="Check me out"/>
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
                </Modal>
            </header>
        </div>
    );
};