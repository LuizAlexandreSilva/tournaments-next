import React from 'react'
import Head from 'next/head'
import Header from './components/Header'

import {
  Container,
  Col,
  InputGroup,
  FormControl,
  Button
} from 'react-bootstrap'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>TFT Tournaments</title>
      </Head>

      <main>
        <Header />
        <Container className="d-flex justify-content-center align-items-center ">
          <Col md={5} xs={10}>
            <label htmlFor="search-tournaments">Buscar torneio</label>
            <InputGroup className="mb-3">
              <FormControl
                id="search-tournaments"
                aria-label="Buscar torneios"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button variant="outline-secondary">Buscar</Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Container>
      </main>
    </>
  )
}

export default Home
