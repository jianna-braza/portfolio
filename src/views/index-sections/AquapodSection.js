import React from 'react';

import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";


function AquapodSection() {

  return (
    <div>
      <Navbar className="bg-primary" expand="lg">
        <Container>
          <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
            Current Projects
          </NavbarBrand>
        </Container>
      </Navbar>
      <div className='section section-buttons' >
        <Container>
          <div className='title' >
            <h2>
              hi
            </h2>
          </div>
        </Container>
      </div>


    </div>
  );
}

export default AquapodSection;