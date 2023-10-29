import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

function Login() {
  let navigate = useNavigate();

  function logar(event) {
    event.preventDefault();

    var email = document.getElementById("formBasicEmail").value;
    var password = document.getElementById("formBasicPassword").value;
    const user = {
      email,
      password,
    }

    if (email !== "" && password !== "") {
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } else {
      alert("Por favor,preencha todos os campos!");
    }
  }

  return (
    <Container style={{ marginTop: 80 + 'px' }}>
      <Row>
        <Col></Col>
        <Col xs={6}>
          <Form onSubmit={logar}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Digite seu email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="Digite sua senha" />
            </Form.Group>
            <Nav.Link href="/Esqueci" >Esqueci minha senha</Nav.Link>
            <Button variant="primary" type="submit" style={{ marginTop: 10 + 'px' }}>
              Logar
            </Button>

          </Form>
        </Col>
        <Col></Col>
      </Row>

    </Container>

  );
}

export default Login;
