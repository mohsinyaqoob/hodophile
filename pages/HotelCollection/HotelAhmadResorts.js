import React from "react";
import { Row, Col, Button } from "antd";
import { Carousel } from "react-responsive-carousel";
import FooterBottom from "../../component/Footer";

function HotelAhmadResorts() {
  return (
    <div>
      <h1>Hotels</h1>
      <div>
        <Row>
          <Col className="GallerySection1Col" xs={24} sm={24} xl={12} xxl={12}>
            <h1>Hotel Details</h1>
            <p>
              Just the right place to halt and relax. A charming complex which
              promises a comfortable stay and an experience to remember.
            </p>
          </Col>
        </Row>
        <Row className="HotelDetailCard">
          <Col xs={24} sm={24} xl={12} xxl={12}>
            <h1>Hotel Ahmad Resorts</h1>
            <p>Rafting Point Pahalgam</p>
            <p>₹ 4,900/Night</p>
            <Button
              className="redbuttons"
              href=" https://api.whatsapp.com/send/?phone=917889319814&text&app_absent=0"
              target="_blank"
            >
              Send Inquiry on Whatsapp
            </Button>
            <h2> About Hotel </h2>
            <p>
              Hotel Ahmad Resorts is located in Pahalgam at Rafting point, it's
              a wonderful property with magnificent mountain view fo and Lidder
              river is near the hotel, Ahmad Resort is having good luxury rooms
              with all modern amenities
            </p>
            <h2> Where we are Located</h2>
            <p>Rafting point movera Pahalgam, Pahalgam, Jammu, and Kashmir</p>
            <h2> Where to Eat</h2>
            <p>
              The hotel is having in house restaurant where you can have
              multi-cuisine
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.79089995827!2d75.28304791455155!3d33.92078083209514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e23fa1aaaaaac9%3A0x7378e7a3be4e6158!2sAhmed%20Resorts!5e0!3m2!1sen!2sin!4v1652854972693!5m2!1sen!2sin"
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
                src="http://kashmirtravelport.com/images/hotel/hotel-02230.jpeg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-02231.jpeg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-02232.jpeg"
              />
            </Carousel>
          </Col>
        </Row>
      </div>
      <FooterBottom />
    </div>
  );
}

export default HotelAhmadResorts;
