/*!

=========================================================
* Paper Kit React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/IMG_6854.png") + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Personal Website</h1>
            </div>
            <h2 className="presentation-subtitle text-center">
              Aspiring Front-End Developer
            </h2>
          </Container>
        </div>
        <h6 className="category category-absolute">
          Coded by{" "}
          <img className='pixel' src='https://github.com/jianna-braza/portfolio/blob/main/src/assets/img/pixelMe.png?raw=true' />
          Jianna Braza | | Template from
          <a href='https://www.creative-tim.com/product/paper-kit-react?tracking=first-time#'> Creative Tim</a>
        </h6>
      </div>
    </>
  );
}

export default IndexHeader;
