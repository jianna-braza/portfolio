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


function ClimateClosetSection() {

  return (
    <div>
      <Navbar className="climateClosetSection" expand="lg">
        <Container>
          <NavbarBrand className='textColor' href="#pablo" onClick={(e) => e.preventDefault()}>
            Climate Closet (INFO 441)
          </NavbarBrand>
          <button
            className="navbar-toggler navbar-toggler-right burger-menu"
            data-target="#navbar-primary"
            id="navbar-primary"
            type="button"
          >
          </button>
          <UncontrolledCollapse navbar toggler="#navbar-primary">
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className='textColor'
                  href="https://github.com/jianna-braza/ClimateCloset"
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
              <img className='projectImages' src='https://github.com/jianna-braza/portfolio/blob/main/src/assets/img/aquanautsWebsite.png?raw=true' />
            </Col>
            <Col lg="6" md="12">
              <h2 className="title">Suggesting clothes based on Seattle's weather</h2>
              <p>
              ClimateCloset is a web application designed to help users organize
              their wardrobes based on temperature. The application allows users
              to upload images of their clothing items and tag them with temperature
              categories such as hot, warm, cool, and cold. Users can then retrieve their
              clothing items based on these temperature tags.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default ClimateClosetSection;