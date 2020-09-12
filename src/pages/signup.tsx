import React from 'react'

import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap'

const SignUp: React.FC = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center">
        <Col md={5} xs={10}>
          <Card className="bg-dark text-white">
            <Card.Body>
              <Card.Title>Cadastrar em TFTournaments</Card.Title>
              <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control type="text" placeholder="Seu Nome" />
                  <Form.Text className="text-danger"></Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="email@exemplo.com" />
                  <Form.Text className="text-danger"></Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control type="password" placeholder="********" />
                </Form.Group>

                <Form.Group
                  controlId="formBasicRepeatPassword"
                  className="mb-4"
                >
                  <Form.Label>Repita a senha</Form.Label>
                  <Form.Control type="password" placeholder="********" />
                </Form.Group>

                <Button variant="primary" type="submit" block>
                  Cadastrar
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default SignUp
