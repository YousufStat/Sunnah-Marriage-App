import React from "react";
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";

export default function Biodetails() {
  return (
    <>
      <Container
        fluid={true}
        className="BiodetailsContainer text-center pt-5 pb-5"
      >
        <Row>
          <Col lg={4} md={4} sm={12} className="p-4">
            <Card style={{ width: "24rem" }}>
              <div className="bioCarsDiv pb-3">
                <Card.Img
                  style={{ width: "22rem", height: "10rem" }}
                  variant="top"
                  src="holder.js/100px180"
                />
                <Card.Title style={{ color: "white" }} className="mt-2">
                  বায়োডাটা নম্বর
                </Card.Title>
                <p style={{ color: "white" }}>12123</p>
              
              <Card.Body>
                <Card.Text className="text-center BioCard">
                  <table>
                  <tr>
                      <th>বৈবাহিক অবস্তা</th>
                      <td>অবিবাহিত</td>
                    </tr>
                    <tr>
                      <th>বৈবাহিক অবস্তা</th>
                      <td>অবিবাহিত</td>
                    </tr>
                    <tr>
                      <th>বৈবাহিক অবস্তা</th>
                      <td>অবিবাহিত</td>
                    </tr>
                    <tr>
                      <th>বৈবাহিক অবস্তা</th>
                      <td>অবিবাহিত</td>
                    </tr>
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
                    <tr>
                      <th>বৈবাহিক অবস্তা</th>
                      <td>অবিবাহিত</td>
                    </tr>
                    <tr>
                      <th>বৈবাহিক অবস্তা</th>
                      <td>অবিবাহিত</td>
                    </tr>
                    <tr>
                      <th>বৈবাহিক অবস্তা</th>
                      <td>অবিবাহিত</td>
                    </tr>
                    <tr>
                      <th>বৈবাহিক অবস্তা</th>
                      <td>অবিবাহিত</td>
                    </tr>
                    <tr>
                      <th>বৈবাহিক অবস্তা</th>
                      <td>অবিবাহিত</td>
                    </tr>

                  </table>
                </Card.Text>
              </Card.Body>
              <Button variant="primary">বায়োডাটা লিক কপি করুন</Button>
              </div>
            </Card>
          </Col>
          <Col lg={8} md={8} sm={12} className="p-4">
            <Row>
              <Col>
                <div className="bioDetailsCol2Div">
                  <h1>ঠিকানা</h1>
                  <Table striped bordered hover>
                    <thead>
                      {/* <tr>
                        <th>স্থায়ী ঠিকানা</th>
                        <th>বর্তমান ঠিকানা</th>
                      </tr> */}
                    </thead>
                    <tbody>
                    <tr>
                      <th>বৈবাহিক অবস্তা</th>
                      <td>অবিবাহিত</td>
                    </tr>
                    <tr>
                      <th>বৈবাহিক অবস্তা</th>
                      <td>অবিবাহিত</td>
                    </tr>
                    <tr>
                      <th>বৈবাহিক অবস্তা</th>
                      <td>অবিবাহিত</td>
                    </tr>
                    </tbody>
                  </Table>
                </div>
              </Col>
              
            </Row>
            <br/>
            <Row>
              <Col>
                <div className="bioDetailsCol2Div">
                  <h1>ঠিকানা</h1>
                  <Table striped bordered hover>
                    <thead>
                      {/* <tr>
                        <th>স্থায়ী ঠিকানা</th>
                        <th>বর্তমান ঠিকানা</th>
                      </tr> */}
                    </thead>
                    <tbody>
                    <tr>
                      <th>বৈবাহিক অবস্তা</th>
                      <td>অবিবাহিত</td>
                    </tr>
                    <tr>
                      <th>বৈবাহিক অবস্তা</th>
                      <td>অবিবাহিত</td>
                    </tr>
                    <tr>
                      <th>বৈবাহিক অবস্তা</th>
                      <td>অবিবাহিত</td>
                    </tr>
                    </tbody>
                  </Table>
                </div>
              </Col>
              
            </Row>
            <br/>
            <Row>
              <Col>
                <div className="bioDetailsCol2Div">
                  <h1>ঠিকানা</h1>
                  <Table striped bordered hover>
                    <thead>
                      {/* <tr>
                        <th>স্থায়ী ঠিকানা</th>
                        <th>বর্তমান ঠিকানা</th>
                      </tr> */}
                    </thead>
                    <tbody>
                    <tr>
                      <th>বৈবাহিক অবস্তা</th>
                      <td>অবিবাহিত</td>
                    </tr>
                    <tr>
                      <th>বৈবাহিক অবস্তা</th>
                      <td>অবিবাহিত</td>
                    </tr>
                    <tr>
                      <th>বৈবাহিক অবস্তা</th>
                      <td>অবিবাহিত</td>
                    </tr>
                    </tbody>
                  </Table>
                </div>
              </Col>
              
            </Row>
            <br/>
            <Row>
              <Col>
                <div className="bioDetailsCol2Div">
                  <h1>ঠিকানা</h1>
                  <Table striped bordered hover>
                    <thead>
                      {/* <tr>
                        <th>স্থায়ী ঠিকানা</th>
                        <th>বর্তমান ঠিকানা</th>
                      </tr> */}
                    </thead>
                    <tbody>
                    <tr>
                      <th>বৈবাহিক অবস্তা</th>
                      <td>অবিবাহিত</td>
                    </tr>
                    <tr>
                      <th>বৈবাহিক অবস্তা</th>
                      <td>অবিবাহিত</td>
                    </tr>
                    <tr>
                      <th>বৈবাহিক অবস্তা</th>
                      <td>অবিবাহিত</td>
                    </tr>
                    </tbody>
                  </Table>
                </div>
              </Col>
              
            </Row>
            <br/>
            <Row>
              <Col>
                <div className="bioDetailsCol2Div">
                  <h1>ঠিকানা</h1>
                  <Table striped bordered hover>
                    <thead>
                      {/* <tr>
                        <th>স্থায়ী ঠিকানা</th>
                        <th>বর্তমান ঠিকানা</th>
                      </tr> */}
                    </thead>
                    <tbody>
                    <tr>
                      <th>বৈবাহিক অবস্তা</th>
                      <td>অবিবাহিত</td>
                    </tr>
                    <tr>
                      <th>বৈবাহিক অবস্তা</th>
                      <td>অবিবাহিত</td>
                    </tr>
                    <tr>
                      <th>বৈবাহিক অবস্তা</th>
                      <td>অবিবাহিত</td>
                    </tr>
                    </tbody>
                  </Table>
                </div>
              </Col>
              
            </Row>
            <br/>
            <Row>
              <Col>
                <div className="bioDetailsCol2Div">
                  <h1>ঠিকানা</h1>
                  <Table striped bordered hover>
                    <thead>
                      {/* <tr>
                        <th>স্থায়ী ঠিকানা</th>
                        <th>বর্তমান ঠিকানা</th>
                      </tr> */}
                    </thead>
                    <tbody>
                    <tr>
                      <th>বৈবাহিক অবস্তা</th>
                      <td>অবিবাহিত</td>
                    </tr>
                    <tr>
                      <th>বৈবাহিক অবস্তা</th>
                      <td>অবিবাহিত</td>
                    </tr>
                    <tr>
                      <th>বৈবাহিক অবস্তা</th>
                      <td>অবিবাহিত</td>
                    </tr>
                    </tbody>
                  </Table>
                </div>
              </Col>
              
            </Row>
            <br/>
            <Row>
              <Col>
                <div className="bioDetailsCol2Div">
                  <h1>ঠিকানা</h1>
                  <Table striped bordered hover>
                    <thead>
                      {/* <tr>
                        <th>স্থায়ী ঠিকানা</th>
                        <th>বর্তমান ঠিকানা</th>
                      </tr> */}
                    </thead>
                    <tbody>
                    <tr>
                      <th>বৈবাহিক অবস্তা</th>
                      <td>অবিবাহিত</td>
                    </tr>
                    <tr>
                      <th>বৈবাহিক অবস্তা</th>
                      <td>অবিবাহিত</td>
                    </tr>
                    <tr>
                      <th>বৈবাহিক অবস্তা</th>
                      <td>অবিবাহিত</td>
                    </tr>
                    </tbody>
                  </Table>
                </div>
              </Col>
              
            </Row>
            <br/>
          </Col>
        </Row>
      </Container>
    </>
  );
}
