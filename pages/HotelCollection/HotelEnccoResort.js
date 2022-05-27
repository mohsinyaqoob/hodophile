import React from "react";
import { Row, Col, Button } from "antd";
import { Carousel } from "react-responsive-carousel";
import FooterBottom from "../../component/Footer";

function HotelEnccoResort() {
  return (
    <div>
      <h1>Hotels</h1>
      <div>
        <Row>
          <Col className="GallerySection1Col" xs={24} sm={24} xl={12} xxl={12}>
            <h1>Hotel Details</h1>
            <p>
              Kashmir Travelport has been present for over 8 years. We make the
              best for all our customers.
            </p>
          </Col>
        </Row>
        <Row className="HotelDetailCard">
          <Col xs={24} sm={24} xl={12} xxl={12}>
            <h1>Hotel Encco Resort</h1>
            <p>Near Town Square Mall, Wazir Bagh, Srinagar, Jammu</p>
            <p>₹ 4,500/Night</p>
            <Button
              className="redbuttons"
              href=" https://api.whatsapp.com/send/?phone=917889319814&text&app_absent=0"
              target="_blank"
            >
              Send Inquiry on Whatsapp
            </Button>
            <h2> About Hotel </h2>
            <p>
              Best 4 Star Luxury hotel with all modern facilities and centrally
              located in Srinagar
            </p>
            <h2> Where we are Located</h2>
            <p>Srinagar Jammu and Kashmir</p>
            <h2> Where to Eat</h2>
            <p>The have multi-cuisine in-house restaurant</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211552.1292745366!2d74.45479002608778!3d34.05664300548979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18fb76f33b78d%3A0x2633e39a27006e1e!2sEnnco%20Resorts!5e0!3m2!1sen!2sin!4v1652856517316!5m2!1sen!2sin"
              width="100%"
              height="250"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
          <Col
            xs={24}
            sm={24}
            xl={15}
            xxl={15}
            className="homeSection4Carousel "
          >
            <Carousel xs={24} sm={24} xl={16} xxl={16}>
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-54032.jpeg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-54033.jpeg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-54034.jpeg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-54031.jpeg"
              />
            </Carousel>
          </Col>
        </Row>
      </div>
      <FooterBottom />
    </div>
  );
}

export default HotelEnccoResort;
