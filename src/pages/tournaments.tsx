import React from 'react'
import Header from './components/Header'

import {
  Container,
  Col,
  InputGroup,
  FormControl,
  Button,
  Row,
  Card,
  Pagination,
  CardGroup
} from 'react-bootstrap'
import '../styles/pages/tournaments.css'

const TournamentsList: React.FC = () => {
  return (
    <main>
      <Header />
      <Container>
        <h3>Torneios</h3>
        <Row>
          <Col lg={6} md={8} sm={12} xs={12}>
            <InputGroup className="mb-3">
              <FormControl
                id="search-tournaments"
                aria-label="Buscar torneios"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button variant="outline-secondary">Buscar torneio</Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col md={6} sm={8} xs={12}>
            <span>Resultados para a busca:</span>
          </Col>
        </Row>
        <Row>
          <CardGroup>
            <Col lg={4} md={6} sm={12} className="mb-3">
              <Card bg="dark" text="light">
                <Card.Body>
                  <Card.Title>Tournament Name</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Tournament Owner</small>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12} className="mb-2">
              <Card>
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{' '}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12} className="mb-2">
              <Card>
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12} className="mb-2">
              <Card>
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </Col>
          </CardGroup>
        </Row>
        <Row className="mt-3 d-flex justify-content-center align-items-center">
          <Pagination>
            <Pagination.Item>1</Pagination.Item>
          </Pagination>
        </Row>
      </Container>
    </main>
  )
}

export default TournamentsList
