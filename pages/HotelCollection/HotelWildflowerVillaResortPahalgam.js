import React from "react";
import { Row, Col, Button } from "antd";
import { Carousel } from "react-responsive-carousel";
import FooterBottom from "../../component/Footer";

function HotelWildflowerVillaResortPahalgam() {
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
            <h1>Hotel Wildflower Villa Resort, Pahalgam</h1>
            <p>Rafting Point, Pahalgam, Kashmir</p>
            <p>₹ 5,500/Night</p>
            <Button
              className="redbuttons"
              href=" https://api.whatsapp.com/send/?phone=917889319814&text&app_absent=0"
              target="_blank"
            >
              Send Inquiry on Whatsapp
            </Button>
            <h2> About Hotel </h2>
            <p>
              Hotel Wild Flower is located near Lidder River Pahalgam, the hotel
              is having all the modern amenities, Hotel is having 3 categories
              of Rooms Super Deluxe Rooms, Super Deluxe Suites, and Super Deluxe
              Family Rooms
            </p>
            <h2> Where we are Located</h2>
            <p>Yainer, Movera, Rafting Point, Pahalgam, Kashmir</p>
            <h2> Where to Eat</h2>
            <p>
              Hotel is having in House restaurant where you can have Breakfast,
              Lunch, and DInner
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.7630100206366!2d75.28283331455154!3d33.92149853205752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e215f50ef3d945%3A0x71bbdc18c83cf36d!2sWildflower%20Villa%20Resort%2C%20Pahalgam!5e0!3m2!1sen!2sin!4v1652856239597!5m2!1sen!2sin"
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
                src="http://kashmirtravelport.com/images/hotel/hotel-44001.jpg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-44002.jpg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-44003.jpg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-44004.jpg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-47141.jpg"
              />
            </Carousel>
          </Col>
        </Row>
      </div>
      <FooterBottom />
    </div>
  );
}

export default HotelWildflowerVillaResortPahalgam;
