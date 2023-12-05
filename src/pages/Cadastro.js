import React, { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Cadastro() {
   const navigate = useNavigate();
   const [nome, setNome] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [repeatPassword, setRepeatPassword] = useState("");

   function Cadastrar(event) {
      event.preventDefault();

      const user = {
         nome,
         email,
         password,
      };

      if (email !== "" && password !== "" && password === repeatPassword) {
         localStorage.setItem("user", JSON.stringify(user));
         navigate("/");
      } else {
         alert("Por favor, preencha todos os campos corretamente!");
      }
   }

   return (
      <Container style={{ marginTop: 80 + "px" }}>
         <Row>
            <Col></Col>
            <Col xs={6}>
               <Form onSubmit={Cadastrar}>
                  <Form.Group className="mb-3" controlId="formBasicNome">
                     <Form.Label>Nome*</Form.Label>
                     <Form.Control
                        type="text"
                        placeholder="Digite seu nome completo"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                     />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                     <Form.Label>Email*</Form.Label>
                     <Form.Control
                        type="email"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                     />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                     <Form.Label>Senha*</Form.Label>
                     <Form.Control
                        type="password"
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                     />
                  </Form.Group>

                  <Form.Group
                     className="mb-3"
                     controlId="formBasicRepeatPassword"
                  >
                     <Form.Label>Repetir Senha*</Form.Label>
                     <Form.Control
                        type="password"
                        placeholder="Repita sua senha"
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                     />
                  </Form.Group>
                  <Button
                     variant="primary"
                     type="submit"
                     style={{ marginTop: 10 + "px" }}
                  >
                     Cadastrar
                  </Button>
               </Form>
            </Col>
            <Col></Col>
         </Row>
      </Container>
   );
}

export default Cadastro;
