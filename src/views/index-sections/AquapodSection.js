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


function AquapodSection() {

  return (
    <div>
      <Navbar className="bg-primary" expand="lg">
        <Container>
          <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
            The Aquapod: Water Resource Locator
          </NavbarBrand>
          <button
            aria-controls="navbarNav"
            aria-expanded={false}
            aria-label="Toggle navigation"
            className="navbar-toggler navbar-toggler-right burger-menu"
            data-target="#navbar-primary"
            data-toggle="collapse"
            id="navbar-primary"
            type="button"
          >
            <span className="navbar-toggler-bar" />
            <span className="navbar-toggler-bar" />
            <span className="navbar-toggler-bar" />
          </button>
          <UncontrolledCollapse navbar toggler="#navbar-primary">
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
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
          <img src='assets/img/aquanautsWebsite.png' />
        </Container>
      </div>





      <div className="section">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Completed with examples</h2>
              <p className="description">
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go. More importantly, looking at them will give you a picture of
                what you can built with this powerful kit.
              </p>
            </Col>
          </Row>
        </Container>
      </div>


    </div>
  );
}

export default AquapodSection;