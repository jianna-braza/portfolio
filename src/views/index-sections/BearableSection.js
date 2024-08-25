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
              <h2 className="title">Task Manager Designed for people with ADHD</h2>
              <p>
                This capstone project is a continuation of a previous group's work. In a team of 5,
                we worked towards creating an all-encompassing task manager that addresses issues
                people with ADHD often encounter such as time blindness, overstimulation, and indecision.
                This application uses a minimalist design with the intention of later iterations
                 integrating customization in the background that users would earn through
                continued use of our application (which also adds as an insentive for our ADHD users
                to feel engaged with our app).
              </p>
            </Col>
            <Col lg="6" md="12">
              <img className='imageSizing projectImages' src='https://github.com/jianna-braza/portfolio/blob/main/src/assets/img/bearable.png?raw=true' />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default BearableSection;