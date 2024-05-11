import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <Container fluid={true} className="footerContainer text-center p-5">
        <Row>
        <Col className="footerCol" lg={4} md={4} sm={12}>
            <div>
              <a className="footerColspan" href="/">Phone:018824898429892</a><br/><br/>
              <a className="footerColspan" href="/">Email:sunnah-marraige2121@gmail.com</a>
            </div>
          </Col>
          <Col className="footerCol" lg={4} md={4} sm={12}>
            <p className="footerColspan">© 2021 - 2022 sunnah-marriage.com.</p>
            <div>
              <a className="footerColspan" href="/">Our Facebook Page</a><br/>
              <a className="footerColspan" href="/">Our Facebook Group</a>
            </div>
          </Col>
          <Col className="footerCol" lg={4} md={4} sm={12}>
            <div class="cusom-footer-legal">
              <ul>
                <li>
                  <a className="footerColspan" href="/privacy-policy/">Privacy Policy</a>
                </li><br/>
                <li>
                  <a className="footerColspan" href="/terms-and-conditions">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
