import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import {useNavigate} from "react-router-dom";

export default function Biodata() {
  const Navigate=useNavigate();

  function goBiodetails(){
    Navigate("/biodetails");
  }
  return (
    <>
      {/* <Container fluid={true} className="homeContainer">
        <Row className="m-5">
          <Col className="homeCol1 mt-4" lg={12} md={12} sm={12}>
            <div className="mt-4 homeCol1Div">
              <Form.Label className="homeCol1FormLable">আমি খুঁজছি</Form.Label>
              <Form.Select
                className="homeCol1Form"
                aria-label="Default select example"
              >
                <option>সকল বায়োডাটা</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <Form.Label className="homeCol1FormLable">আমি খুঁজছি</Form.Label>

              <Form.Select
                className="homeCol1Form"
                aria-label="Default select example"
              >
                <option>সকল</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <Form.Label className="homeCol1FormLable">আমি খুঁজছি</Form.Label>

              <Form.Select
                className="homeCol1Form"
                aria-label="Default select example"
              >
                <option>সকল জেলা</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <Form.Label className="homeCol1FormLable">আমি খুঁজছি</Form.Label>

              <Form.Control
                className="homeCol1Form"
                type="text"
                placeholder=""
              />
              <Button onClick={goBiodetails} className="homeColButton" variant="primary" type="submit">
                <span>0</span> বায়োডাটা খুঁজুন
              </Button>
            </div>
          </Col>
        </Row>
      </Container> */}
      <Container fluid={true} className="m-5 text-center">
        <Row>
          <h1 className="mb-5">বায়োডাটা সমূহ</h1>
          <Col lg={4} md={6} sm={12} className="mb-4">
            <Card style={{ width: "22rem" }}>
              <div className="bioCarsDiv">
                <Card.Img style={{ width: "22rem",height:"10rem" }} variant="top" src="holder.js/100px180" />
                <Card.Title style={{ color:"white" }}>বায়োডাটা নম্বর</Card.Title>
                <p style={{ color:"white" }}>12123</p>
              </div>
              <Card.Body>
                <Card.Text className="text-center BioCard">
                  <table>
                    <tr>
                      <th>বৈবাহিক অবস্তা</th>
                      <td>অবিবাহিত</td>
                    </tr>
                    <tr>
                      <th>জন্মসন</th>
                      <td>২০০১</td>
                    </tr>
                    <tr>
                      <th>পেশা</th>
                      <td>ছাত্র</td>
                    </tr>
                  </table>
                </Card.Text>
                <Button onClick={goBiodetails}>সম্পূর্ন বায়োডাটা</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12} className="mb-4">
            <Card style={{ width: "22rem" }}>
              <div className="bioCarsDiv">
                <Card.Img style={{ width: "22rem",height:"10rem" }} variant="top" src="holder.js/100px180" />
                <Card.Title style={{ color:"white" }}>বায়োডাটা নম্বর</Card.Title>
                <p style={{ color:"white" }}>12123</p>
              </div>
              <Card.Body>
                <Card.Text className="text-center BioCard">
                  <table>
                    <tr>
                      <th>বৈবাহিক অবস্তা</th>
                      <td>অবিবাহিত</td>
                    </tr>
                    <tr>
                      <th>জন্মসন</th>
                      <td>২০০১</td>
                    </tr>
                    <tr>
                      <th>পেশা</th>
                      <td>ছাত্র</td>
                    </tr>
                  </table>
                </Card.Text>
                <Button onClick={goBiodetails}>সম্পূর্ন বায়োডাটা</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12} className="mb-4">
            <Card style={{ width: "22rem" }}>
              <div className="bioCarsDiv">
                <Card.Img style={{ width: "22rem",height:"10rem" }} variant="top" src="holder.js/100px180" />
                <Card.Title style={{ color:"white" }}>বায়োডাটা নম্বর</Card.Title>
                <p style={{ color:"white" }}>12123</p>
              </div>
              <Card.Body>
                <Card.Text className="text-center BioCard">
                  <table>
                    <tr>
                      <th>বৈবাহিক অবস্তা</th>
                      <td>অবিবাহিত</td>
                    </tr>
                    <tr>
                      <th>জন্মসন</th>
                      <td>২০০১</td>
                    </tr>
                    <tr>
                      <th>পেশা</th>
                      <td>ছাত্র</td>
                    </tr>
                  </table>
                </Card.Text>
                <Button onClick={goBiodetails}>সম্পূর্ন বায়োডাটা</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
