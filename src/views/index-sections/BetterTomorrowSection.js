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
              <img className='betterTomorrowImg projectImages' src='https://github.com/jianna-braza/portfolio/blob/main/src/assets/img/betterTomorrowSmall.png?raw=true' />
            </Col>
            <Col lg="6" md="12">
              <h2 className="title">Forum to personally connect people in need with those that can help</h2>
              <p>
                The first project I've worked on. Aimed to create an online community by allowing
                people to connect based on the things they need and/or the resources they have to help.
                Consists of a homepage describing our mission and our team with a login feature, a
                profile creation page, and a profile viewing page with filter options to help users
                find profiles that fir under the criteria they are looking for.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default BetterTomorrowSection;