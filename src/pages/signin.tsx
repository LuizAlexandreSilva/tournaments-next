import React from 'react'

import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap'

const SignIn: React.FC = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center">
        <Col md={5} xs={10}>
          <Card className="bg-dark text-white">
            <Card.Body>
              <Card.Title>Entrar em TFTournaments</Card.Title>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="email@exemplo.com" />
                  <Form.Text className="text-danger"></Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mb-4">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control type="password" placeholder="********" />
                </Form.Group>

                <Button variant="primary" type="submit" block>
                  Entrar
                </Button>
                <a href="#" className="d-block text-center mt-2">
                  Esqueci minha senha
                </a>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default SignIn
