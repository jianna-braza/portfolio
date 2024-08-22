import React from 'react';

import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

function BearableSection() {
  return (
    <div>
      <Navbar className="bg-warning" expand="lg">
        <Container>
          <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
            Bearable (Capstone)
          </NavbarBrand>
          <button
            aria-controls="navbarNav"
            aria-expanded={false}
            aria-label="Toggle navigation"
            className="navbar-toggler navbar-toggler-right"
            data-target="#navbar-warning"
            data-toggle="collapse"
            id="navbar-warning"
            type="button"
          >
            <span className="navbar-toggler-bar" />
            <span className="navbar-toggler-bar" />
            <span className="navbar-toggler-bar" />
          </button>
          <UncontrolledCollapse navbar toggler="#navbar-warning">
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  href="https://github.com/jianna-braza/Bearable"
                >
                  <i
                    aria-hidden={true}
                    className="nc-icon nc-compass-05"
                  />
                  Repository
                </NavLink>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
      <div className='section' >
        <Container>
          <Row>
            <Col lg="6" md="12">

            </Col>
            <Col lg="6" md="12">
              <img src='https://github.com/jianna-braza/portfolio/blob/main/src/assets/img/aquanautsWebsite.png?raw=true' />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default BearableSection;