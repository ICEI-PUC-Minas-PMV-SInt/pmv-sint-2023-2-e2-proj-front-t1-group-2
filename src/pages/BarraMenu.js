import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaHome, FaInfoCircle, FaSignInAlt, FaSearch, FaUser } from 'react-icons/fa';
import InputGroup from 'react-bootstrap/InputGroup';
import React, { useState } from 'react';
import Logout from './Logout';
import { useNavigate } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

function BarraMenu({ logado, onLogout }) {
    const [showLogout, setShowLogout] = useState(false);
    let navigate = useNavigate();

    function displayLogoutModal(event) {
        setShowLogout(true);
    }

    function handleLogout(event) {
        setShowLogout(false);
        onLogout();
        navigate("/");
    }

    function handleCancel(event) {
        setShowLogout(false);
    }

    function showModal() {
        return showLogout;
    }

    return (
        <>
            <Navbar className="bg-body-tertiary mb-3">
                <Container fluid>
                    <Navbar.Brand href="#">Currículos</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-sm`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                                Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <LinkContainer to="/Home">
                                    <Nav.Link><FaHome /> Home</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/about">
                                    <Nav.Link><FaInfoCircle /> About</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/Cadastro">
                                    <Nav.Link><FaUser /> Cadastrar</Nav.Link>
                                </LinkContainer>
                                <Nav.Link onClick={displayLogoutModal} className={logado() ? '' : 'hidden'} ><FaSignInAlt /> Logout</Nav.Link>
                                <LinkContainer to="/login">
                                    <Nav.Link className={!logado() ? '' : 'hidden'}><FaSignInAlt /> Login</Nav.Link>
                                </LinkContainer>
                            </Nav>
                            <Form className="d-flex">
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        placeholder="Pesquisar"
                                        aria-label="Pesquisar"
                                        aria-describedby="basic-addon2"
                                    />
                                    <Button variant="outline-secondary" id="button-addon2">
                                        <FaSearch />
                                    </Button>
                                </InputGroup>
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <Logout onCancel={handleCancel} onLogout={handleLogout} onHide={handleCancel} show={showModal()} />
        </>
    );
}

export default BarraMenu;