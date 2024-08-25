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
import { walkUpBindingElementsAndPatterns } from 'typescript';


function BetterTomorrowSection() {

  return (
    <div>
      <Navbar className="bg-primary" expand="lg">
        <Container>
          <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
            A Better Tomorrow
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
                <NavLink
                  href="https://github.com/info340-au22/project-makenzieedwards8"
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
              <h2 className="title">Forum to personally connect people in need with those that can help</h2>
              <p>

              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default BetterTomorrowSection;