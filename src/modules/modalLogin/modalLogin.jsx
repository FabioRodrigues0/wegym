// eslint-disable-next-line no-unused-vars
import React from "react";
import "./modalLogin.style.css";
import {Button, Form, Modal} from "react-bootstrap";

export const ModalLogin = (props) => {
    const handleClose = props.onHide
    return (
        <Modal{...props} centered aria-labelledby="contained-modal-title-vcenter" className="align-middle">
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
    );
};

export default ModalLogin;