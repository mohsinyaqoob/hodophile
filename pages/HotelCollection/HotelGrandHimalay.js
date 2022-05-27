import React from "react";
import { Row, Col, Button } from "antd";
import { Carousel } from "react-responsive-carousel";
import FooterBottom from "../../component/Footer";

function HotelGrandHimalay() {
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
            <h1>Hotel Grand Himalay</h1>
            <p>Sankar Road, Chubi, Leh, Ladakh</p>
            <p>₹8,000/Night</p>
            <Button
              className="redbuttons"
              href=" https://api.whatsapp.com/send/?phone=917889319814&text&app_absent=0"
              target="_blank"
            >
              Send Inquiry on Whatsapp
            </Button>
            <h2> About Hotel </h2>
            <p>
              Hotel Grand Himalaya Ladakh is one of the best luxury 4 Start
              Hotel in Ladakh near Leh market, the hotel is equipped with all
              modern amenities
            </p>
            <h2> Where we are Located</h2>
            <p>Sankar Road, Chubi, Leh, Ladakh Near Leh Market</p>
            <h2> Where to Eat</h2>
            <p>he Hotel is having an in-house multi-cuisine restaurant</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.172592629366!2d77.5841150145589!3d34.16750471909589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38fdeb1594e60ff7%3A0x27d598d2b70f51f6!2sGrand%20Himalaya%20-%20Luxury%20Hotel%20%7C%20Best%20Hotel%20%7C%20Leh%20%7C%20Ladakh!5e0!3m2!1sen!2sin!4v1652854339194!5m2!1sen!2sin"
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
                src="http://kashmirtravelport.com/images/hotel/hotel-09490.jpg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-09521.jpg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-09523.jpg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-09524.jpg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-09527.jpg"
              />
            </Carousel>
          </Col>
        </Row>
      </div>
      <FooterBottom />
    </div>
  );
}

export default HotelGrandHimalay;
