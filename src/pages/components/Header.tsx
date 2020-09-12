import React from 'react'

import { Navbar, Nav, Container } from 'react-bootstrap'
import Logo from '../../assets/logo.svg'

const Header: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <Logo /> TFTournaments
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="tournaments">Torneios</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Deseja gerar chaves para seu torneio? <a href="signin">Entrar</a> ou{' '}
            {''}
            <a href="signup">Cadastre-se</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
