import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {useNavigate } from "react-router-dom";

export default function Home() {

  // const params=useParams();
  const Navigate=useNavigate();

  function goBioData(){
    Navigate("/biodata");
  }
  function goBioCondition(){
    Navigate("/condition");
  }
  function goBioForm(){
    Navigate("/bioform");
  }


  return (
    <>
      <Container fluid={true} className="homeContainer">
        <Row className="m-5">
          <Col className="homeCol1 mt-4" lg={6} md={6} sm={12}>
            <div className="mt-4 ">
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
              </div>
              <div>
              <Form.Label className="homeCol1FormLable">বৈবাহিক অবস্থা</Form.Label>
              <Form.Select
                className="homeCol1Form"
                aria-label="Default select example"
              >
                <option>সকল</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              </div>
              <div>
              <Form.Label className="homeCol1FormLable">জেলা</Form.Label>
              <Form.Select
                className="homeCol1Form"
                aria-label="Default select example"
              >
                <option>সকল জেলা</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              </div>
              <Button onClick={goBioData} className="homeColButton" variant="primary" type="submit">
                <span>0</span> বায়োডাটা খুঁজুন
              </Button>
            
          </Col>
          <Col className="mt-4 homeCol2" lg={6} md={6} sm={12}>
            <p>
              ‘হে যুবসমাজ! তোমাদের মধ্যে যারা বিবাহ করতে সক্ষম, সে যেন বিয়ে করে।
              কেননা এটি চক্ষু শীতল করে ও লজ্জাস্থানকে হেফাজত করে। আর যে অক্ষম,
              তার জন্য রোজা রাখা জরুরি। এই রোজা তার জন্য জৈবিক চাহিদা প্রতিরোধক।
              ’
            </p>
            <hr />
            <p>(বুখারি, হাদিস : ১৯০৫; মুসলিম, হাদিস : ১৪০০)</p>
          </Col>
        </Row>
      </Container>
      <Container fluid={true} className="mt-5 text-center">
        <Row>
          <Col lg={12} md={12} sm={12}>
            <Button onClick={goBioForm} className="bioAddButton" variant="danger">
              আপনার বায়োডাটা জমা দিন
            </Button>
            <Button onClick={goBioCondition} className="bioConditionButton" variant="warning">
              শর্ত সমূহ ও নির্দেশনা
            </Button>
          </Col>
        </Row>
      </Container>
      <Container fluid={true} className="mt-5 text-center mb-3">
        <Row className="homeislamicBioChose mt-5">
          <Col className="mt-5" lg={12} md={12} sm={12}>
            <h1>জীবনসঙ্গী নির্বাচনে ইসলামের নির্দেশনা</h1>
            <p className="mt-5">
              পাত্র-পাত্রী নির্বাচন খুব গুরুত্বপূর্ণ একটি বিষয়। যে মানুষটির
              সাথে সারা জীবন অতিবাহিত করতে হবে সেই মানুষটির চারিত্রিক ও নৈতিক
              বৈশিষ্ট্য তার জীবনসঙ্গীর উপর অনেক প্রভাব বিস্তার করে।
            </p>
            <p>এ ব্যাপারে কয়েকটি হাদিস উল্লেখযোগ্য –</p>
            <br/>
            <span>
              ‘যার দ্বীনদারী ও চরিত্রে তোমরা সন্তুষ্ট, এমন কেউ বিবাহের প্রস্তাব
              দিলে তার সাথে তোমরা বিবাহ সম্পন্ন কর। তা না করলে পৃথিবীতে ফিৎনা
              দেখা দেবে ও ব্যাপক ফ্যাসাদ ছড়িয়ে পড়বে।’ (তিরমিযী: ১০৮৪)
            </span>
           
            <p className="mt-5">
              ‘নারীকে বিবাহ করা হয় চারটি জিনিস দেখে। তার সম্পদ দেখে, বংশমর্যাদা
              দেখে, রূপ দেখে এবং দ্বীনদারী দেখে। হে মুমিন! তুমি দ্বীনদার নারী
              বিবাহ করে ধন্য হয়ে যাও।’ (বুখারী : ৫০৯০ ) “সমগ্র দুনিয়াটাই
              সম্পদ। এর মধ্যে সবচাইতে উত্তম সম্পদ হলাে পরহেযগার স্ত্রী। “(মুসলিম
              – ৩৭১৬) “তোমরা নারীদের (কেবল) রূপ দেখে বিবাহ করো না। হতে পারে রূপই
              তাদের বরবাদ করে দেবে। তাদের অর্থ-সম্পদ দেখেও বিবাহ করো না, হতে
              পারে অর্থ-সম্পদ তাকে উদ্ধত করে তুলবে। বরং দ্বীন দেখেই তাদের বিবাহ
              কর। একজন নাক-কান-কাটা অসুন্দর দাসীও (রূপসী ধনবতী স্বাধীন নারী
              অপেক্ষা) শ্রেয়, যদি সে দ্বীনদার হয়। “(ইবনে মাজাহ)
            </p>
            <br/>
            <p>
              উপরিউক্ত হাদিস সমূহের শিক্ষা হল, পাত্র-পাত্রী নির্বাচনে দ্বীনদারী
              ও সচ্চরিত্রকে সর্বাগ্রে রাখতে হবে। সৌন্দর্য, অর্থ-সম্পদ ও বংশীয়
              সমতাও বিচার্য বটে, কিন্তু সবই দ্বীনদারীর পরবর্তী স্তরে। দ্বীনদারী
              ও চরিত্র সন্তোষজনক হলে বাকিগুলোতে ছাড় দেওয়া যায়, কিন্তু
              বাকিগুলো যতই আকর্ষণীয় হোক, তার খাতিরে দ্বীনদারীতে ছাড় দেওয়ার
              অবকাশ নেই। আর যদি দ্বীনদারীর সাথে অন্যগুলোও মিলে যায়, সে অতি
              সুন্দর মিলন বটে, কিন্তু তা খুব সহজলভ্যও নয়। তাই সে রকম আশার
              ক্ষেত্রে মাত্রাজ্ঞানের পরিচয় দেওয়া জরুরি। একজন দ্বীনদার
              জীবনসঙ্গী আল্লাহর নৈকট্যে যেতে সহায়ক ভূমিকা পালন করে, অন্যথায়
              দ্বীনের উপর অবিচল থাকা অনেক কঠিন হয়ে যায়। তাই ইসলামে
              পাত্র-পাত্রী নির্বাচনে দ্বীনদারীকে প্রাধান্য দেয়ার নির্দেশনা পাওয়া
              যায়।{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
