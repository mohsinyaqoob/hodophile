import React from "react";
import { Row, Col, Button } from "antd";
import { Carousel } from "react-responsive-carousel";
import FooterBottom from "../../component/Footer";

function HotelSolarResidency() {
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
            <h1>Hotel Solar Residency</h1>
            <p>Raj Bagh Srinagar Kashmir</p>
            <p>₹ 6,500/Night</p>
            <Button
              className="redbuttons"
              href=" https://api.whatsapp.com/send/?phone=917889319814&text&app_absent=0"
              target="_blank"
            >
              Send Inquiry on Whatsapp
            </Button>
            <h2> About Hotel </h2>
            <p>
              Hotel Solar Residency Srinagar is one of the best hotels in
              Srinagar Kashmir, with all modern facilities, Hotel Solar
              Residency is having 3 categories Deluxe, Premium, and Suite Rooms.
              They also have some twin-sharing rooms for corporate clients.
            </p>
            <h2> Where we are Located</h2>
            <p>Raj Bagh Srinagar Near Modern Hospital Srinagar Kashmir</p>
            <h2> Where to Eat</h2>
            <p>The hotel is having a multi-cuisine restaurant</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.0594547653477!2d74.83148701455595!3d34.06799012434882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18f0a843cc521%3A0x2cb042e4dd0c88e!2sHotel%20Solar%20Residency!5e0!3m2!1sen!2sin!4v1652855438737!5m2!1sen!2sin"
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
                src="http://kashmirtravelport.com/images/hotel/hotel-22040.jpg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-22041.jpg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-22042.jpg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-22043.jpg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-22044.jpg"
              />
            </Carousel>
          </Col>
        </Row>
      </div>
      <FooterBottom />
    </div>
  );
}

export default HotelSolarResidency;
