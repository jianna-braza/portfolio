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
            The AquaPod (INFO 442)
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
                  href="https://github.com/UW-INFO442-AU23/aquanauts"
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
              <h2 className="title">King County Water Resource Locator</h2>
              <p>
                This project focuses on Goal 6 from the UN SDGS: Clean Water and Sanitation.
                This issue arises due to water resources, specifically sanitized and clean drinking
                water, are not easily accessible to the majority of people.
                Although access to water is a basic human right, the resources and supplies may not
                be publicly known, which can be a major barrier for those in need of them. Likewise,
                there are many capable people who could help donate these supplies or uncover
                services. However, many people are unaware of how they can assist in this issue.
                The app aims to serve three purposes for the people of King County, WA:
              </p>
              <ul>
                <li>Be a resource that people can use to help find clean water resources: water bottle refilling stations, water fountains, public restrooms, etc.</li>
                <li>Serve as a hub to help promote charities that people can donate to or learn more</li>
                <li>Educate users of the current state of King County and how water availability affects the community</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default AquapodSection;