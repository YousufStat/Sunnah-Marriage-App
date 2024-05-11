import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Condition() {
  return (
    <>
      <Container fluid={true} className="aboutContainer">
        <Row>
          <Col>
            <div>
              <h1 fluid={true} className="aboutHead">ওয়েবসাইট</h1>
            </div>
          </Col>
        </Row>
      </Container>


      <Container fluid={true} className="containerPara text-center">
        <Row>
          <Col lg={6} md={6} sm={12}>
            <div>
              <p className="aboutPara">
                ১.পাত্র-পাত্রী নির্বাচন খুব গুরুত্বপূর্ণ একটি বিষয়।
              </p>
              <p className="aboutPara">
              ২.পাত্র-পাত্রী নির্বাচন খুব গুরুত্বপূর্ণ একটি বিষয়।
              </p> <p className="aboutPara">
              ৩.পাত্র-পাত্রী নির্বাচন খুব গুরুত্বপূর্ণ একটি বিষয়।
              </p> <p className="aboutPara">
              ৪.পাত্র-পাত্রী নির্বাচন খুব গুরুত্বপূর্ণ একটি বিষয়।
              </p>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <div>
              <p className="aboutPara">
              ৫.পাত্র-পাত্রী নির্বাচন খুব গুরুত্বপূর্ণ একটি বিষয়।
              </p>
              <p className="aboutPara">
              ৬.পাত্র-পাত্রী নির্বাচন খুব গুরুত্বপূর্ণ একটি বিষয়।
              </p> <p className="aboutPara">
              ৭.পাত্র-পাত্রী নির্বাচন খুব গুরুত্বপূর্ণ একটি বিষয়।
              </p> <p className="aboutPara">
              ৮.পাত্র-পাত্রী নির্বাচন খুব গুরুত্বপূর্ণ একটি বিষয়।
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
