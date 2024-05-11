import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

export default function Question() {
  return (
    <>
      <Container fluid={true} className="aboutContainer">
        <Row>
          <Col>
            <h1 className="aboutHead">প্রশ্ন ও উত্তর</h1>
          </Col>
        </Row>
      </Container>
      <Container fluid={true} className="containerPara">
        <Row>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                 <p className="questionHead">বায়োডাটা জমা দিতে কত টাকা লাগে?</p>
                </Accordion.Header>
                <Accordion.Body>
                  আমরা এখন পর্যন্ত কারো কাছ থেকে টাকা নিচ্ছি না।
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  এই ওয়েবসাইট কি সবার জন্য উন্মুক্ত?
                </Accordion.Header>
                <Accordion.Body>
                  না, এই ওয়েবসাইট সবার জন্য নয়, এই ওয়েবসাইট শুধুমাত্র দ্বীনদার
                  মুসলিমদের জন্য।
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  বায়োডাটা তৈরি করার কোনো বিশেষ শর্ত আছে?
                </Accordion.Header>
                <Accordion.Body>
                  আমাদের ওয়েবসাইটে বায়োডাটা তৈরি করতে হলে নূন্যতম আবশ্যকতা
                  নিম্নরূপ- পুরুষ- ১/ ৫ ওয়াক্ত নামাযী হতে হবে। ২/ ওয়াজিব দাড়ি
                  সুন্নতি পদ্ধতিতে বড় থাকতে হবে। ৩/ টাখনুর উপর কাপড় পরতে হবে।
                  নারী- ১/ ৫ ওয়াক্ত নামাযী হতে হবে। ২/ “নিকাব” সহ ফরজ পর্দানশীন
                  হতে হবে।
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  আমার বায়োডাটা এপ্রুভ হয় নি কেন?
                </Accordion.Header>
                <Accordion.Body>
                  আমরা বিভিন্ন কারণে বায়োডাটা এপ্রুভ করি না। তার মাঝে কয়েকটি
                  কারণ উল্লেখ করা হলো। ১/ আপনি যদি অভিভাবককে না জানিয়ে আমাদের
                  ওয়েবসাইটে বায়োডাটা জমা দেন। ২/ অভিভাবকের নাম্বারের ঘরে নিজের
                  নাম্বার লিখে রাখেন। ৩/ ৫ ওয়াক্ত নামাযী না হোন। ৪/ ওয়াজিব দাঁড়ি
                  সুন্নতি পদ্ধতীতে বড় না থাকে। (পুরুষদের জন্য) ৫/ টাখনুর উপর
                  কাপড় না পরেন। (পুরুষদের জন্য) ৬/ নিকাব সহ ফরজ পর্দা/বোরকা না
                  পরেন। (নারীদের জন্য) ৭/ হিজাব পরেন কিন্ত নিকাব পরেন না।
                  (নারীদের জন্য) ৮/ বায়োডাটাতে কোনো মিথ্যা তথ্য দিয়ে থাকলে। ৯/
                  প্রশ্নের উত্তর স্পষ্ট ভাবে না দিয়ে অন্য ভাবে দিলে। যেমনঃ শুধু
                  “আলহামদুলিল্লাহ” বা “হুম” ইত্যাদি লিখেন অনেকেই, অথচ এটি দ্বারা
                  হ্যাঁ/না স্পষ্টভাবে বোঝা যায় না । ১০/ দ্বীনদার মুসলিম না হয়ে
                  থাকলে। ১১/ কোনো গুরুত্বপূর্ণ প্রশ্নের উত্তর না দিয়ে ফাঁকা রেখে
                  দিলে। যেমনঃ অনেকেই “কতৃপক্ষের জিজ্ঞাসা” উত্তর না দিয়েই পাবলিশ
                  করেন। ১২/ আলিয়া মাদ্রাসা শিক্ষিতদের জেনারেল সিলেক্ট করতে বলার
                  পরেও কেউ যদি মাদ্রাসা সিলেক্ট করেন তাহলেও এপ্রুভ হয় না।
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  এই ওয়েবসাইট কি সবার জন্য উন্মুক্ত?
                </Accordion.Header>
                <Accordion.Body>
                  না, এই ওয়েবসাইট সবার জন্য নয়, এই ওয়েবসাইট শুধুমাত্র দ্বীনদার
                  মুসলিমদের জন্য।
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  এই ওয়েবসাইট কি সবার জন্য উন্মুক্ত?
                </Accordion.Header>
                <Accordion.Body>
                  না, এই ওয়েবসাইট সবার জন্য নয়, এই ওয়েবসাইট শুধুমাত্র দ্বীনদার
                  মুসলিমদের জন্য।
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  এই ওয়েবসাইট কি সবার জন্য উন্মুক্ত?
                </Accordion.Header>
                <Accordion.Body>
                  না, এই ওয়েবসাইট সবার জন্য নয়, এই ওয়েবসাইট শুধুমাত্র দ্বীনদার
                  মুসলিমদের জন্য।
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  এই ওয়েবসাইট কি সবার জন্য উন্মুক্ত?
                </Accordion.Header>
                <Accordion.Body>
                  না, এই ওয়েবসাইট সবার জন্য নয়, এই ওয়েবসাইট শুধুমাত্র দ্বীনদার
                  মুসলিমদের জন্য।
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  এই ওয়েবসাইট কি সবার জন্য উন্মুক্ত?
                </Accordion.Header>
                <Accordion.Body>
                  না, এই ওয়েবসাইট সবার জন্য নয়, এই ওয়েবসাইট শুধুমাত্র দ্বীনদার
                  মুসলিমদের জন্য।
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  এই ওয়েবসাইট কি সবার জন্য উন্মুক্ত?
                </Accordion.Header>
                <Accordion.Body>
                  না, এই ওয়েবসাইট সবার জন্য নয়, এই ওয়েবসাইট শুধুমাত্র দ্বীনদার
                  মুসলিমদের জন্য।
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  এই ওয়েবসাইট কি সবার জন্য উন্মুক্ত?
                </Accordion.Header>
                <Accordion.Body>
                  না, এই ওয়েবসাইট সবার জন্য নয়, এই ওয়েবসাইট শুধুমাত্র দ্বীনদার
                  মুসলিমদের জন্য।
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  এই ওয়েবসাইট কি সবার জন্য উন্মুক্ত?
                </Accordion.Header>
                <Accordion.Body>
                  না, এই ওয়েবসাইট সবার জন্য নয়, এই ওয়েবসাইট শুধুমাত্র দ্বীনদার
                  মুসলিমদের জন্য।
                </Accordion.Body>
              </Accordion.Item> 
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  );
}
