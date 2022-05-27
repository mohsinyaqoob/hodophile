import React from "react";
import { Row, Col, Button } from "antd";
import { Carousel } from "react-responsive-carousel";
import FooterBottom from "../../component/Footer";

function MorningStarHouseboat() {
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
            <h1>Morning Star Houseboat</h1>
            <p>Dal Lake Srinagar Kashmir</p>
            <p>₹ 3,000/Night</p>
            <Button
              className="redbuttons"
              href=" https://api.whatsapp.com/send/?phone=917889319814&text&app_absent=0"
              target="_blank"
            >
              Send Inquiry on Whatsapp
            </Button>
            <h2> About Hotel </h2>
            <p>
              Morning Star Houseboat is a deluxe houseboat in dal lake, Srinagar
              Kashmir, morning star houseboat gives the best service
            </p>
            <h2> Where we are Located</h2>
            <p>
              Dal Lake Ghat No.13 Boulevard Road, Srinagar, Jammu, and Kashmir
            </p>
            <h2> Where to Eat</h2>
            <p>
              The houseboat is having inhouse food options where you can have
              food
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.2240091291674!2d74.83628431455656!3d34.089401423219655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18f7d491d982f%3A0x19e35f86af37d484!2sMorningstar%20Group%20Of%20Houseboats!5e0!3m2!1sen!2sin!4v1652854120191!5m2!1sen!2sin"
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
                src="http://kashmirtravelport.com/images/hotel/hotel-33520.jpg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-33521.jpg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-33522.jpg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-33523.jpg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-33524.jpg"
              />
            </Carousel>
          </Col>
        </Row>
      </div>
      <FooterBottom />
    </div>
  );
}

export default MorningStarHouseboat;
