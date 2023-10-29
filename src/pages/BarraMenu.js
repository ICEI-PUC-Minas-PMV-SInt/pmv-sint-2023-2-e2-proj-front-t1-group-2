import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaHome, FaInfoCircle, FaSignInAlt, FaSearch, FaUser } from 'react-icons/fa';
import InputGroup from 'react-bootstrap/InputGroup';
import React, { useContext, useState } from 'react';
import LoginContext from './Context';
import Logout from './Logout';

function BarraMenu() {
    const context = useContext(LoginContext);
    const [showLogout, setShowLogout] = useState(false);

    function displayLogoutModal(event) {
        setShowLogout(true);
    }

    function handleLogout(event) {
        setShowLogout(false);
    }

    function handleCancel(event) {
        setShowLogout(false);
    }

    return (
        <>
            {['sm'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
                    <Container fluid>
                        <Navbar.Brand href="#">Currículos</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="/Home"><FaHome /> Home</Nav.Link>
                                    <Nav.Link href="/about"><FaInfoCircle /> About</Nav.Link>
                                    <Nav.Link href="/Cadastro"><FaUser /> Cadastrar</Nav.Link>
                                    {context.logado
                                        ? <Nav.Link onClick={displayLogoutModal}><FaSignInAlt /> Logout</Nav.Link>
                                        : <Nav.Link href="/login"><FaSignInAlt /> Login</Nav.Link>
                                    }
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
            ))}
            {showLogout ? ( < Logout onCancel={handleCancel} onLogout={handleLogout} onHide={handleCancel} show={showLogout} />) : null}
        </>
    );
}

export default BarraMenu;