import { useState } from "react";
import { render } from "@testing-library/react";
import {Button, Form, Modal} from 'react-bootstrap';

function LoginModal() {
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

return (
    <>
    <Button variant="none" className='login_modal' onClick={handleShow}>
        로그인/회원가입
    </Button>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
            <Form.Label></Form.Label>
            <Form.Control
                type="email"
                placeholder="아이디를 입력하세요"
                autoFocus
            />
            </Form.Group>
            <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
            >
            <Form.Control
                type="email"
                placeholder="아이디를 입력하세요"
                autoFocus
            />
            </Form.Group>
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
    </>
);
}



export default LoginModal;