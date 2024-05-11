import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export default function Bioform() {
  return (
    <>
      <Container fluid={true} className="aboutContainer">
        <Row>
          <Col>
            <div>
              <h1 fluid={true} className="aboutHead">
                আমাদের সাথে যোগযোগ করুন
              </h1>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid={true} className="containerPara">
        <Row>
          <Col>
            <div>
               <h1 className="text-center mb-5">আমাদের যোগাযোগের ঠিকানা</h1>
              <p className="text-center contactPara">মোবাইনঃ১০৮২৩৫৮৯৯৫১৯</p>
              <p className="text-center contactPara">
                <a href="/">Email:asdnfajwhfuiahsfjka@gmail</a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid={true} className="containerPara">
        <Row>
          <Col>
            <div>
              <p className="aboutPara">
                আপনার যে কোন জিজ্ঞাসা নিম্নোক্ত ফর্মে পূরণ করে আমাদের কাছে
                পাঠিয়ে দিন। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করবো ইন শা আল্লাহ।
              </p>
              <hr/>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>আপনার নাম লিখুন</Form.Label>
                  <Form.Control type="name" placeholder="" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>আপনার ইমেল দিন</Form.Label>
                  <Form.Control type="email" placeholder="" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>আপনার সমস্যার বিষয় লিখুন</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>সমস্যার বিস্তারিত লিখুন</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>

       
    </>
  )
}
