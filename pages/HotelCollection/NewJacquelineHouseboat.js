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
            <h1>New Jacqueline Houseboat</h1>
            <p>Nigeen Lake</p>
            <p>₹ 6,100/Night</p>
            <Button
              className="redbuttons"
              href=" https://api.whatsapp.com/send/?phone=917889319814&text&app_absent=0"
              target="_blank"
            >
              Send Inquiry on Whatsapp
            </Button>
            <h2> About Hotel </h2>
            <p>
              New Jacqueline Houseboats is one of the luxury group of houseboats
              in Nigeen Lake Srinagar, with all modern facilities, New Jacquline
              Houseboats is having 4 categories of rooms, Traditional Deluxe
              Room, Heritage Deluxe Room, Royal Traditional Suite Room, and
              Royal Heritage Suite Room
            </p>
            <h2> Where we are Located</h2>
            <p>
              New Jacquline Houseboat is located in Nigeen Lake, Opposite Of
              Nigeen Club, Ghat No. 1, Srinagar, Jammu and Kashmir
            </p>
            <h2> Where to Eat</h2>
            <p>The houseboat is having a house restaurant.</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.0442715955946!2d74.82510571455741!3d34.11961632162546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e185a787f43a6b%3A0x79480f8fdf690f56!2sNew%20Jacquline%20Heritage%20Houseboats!5e0!3m2!1sen!2sin!4v1652855712239!5m2!1sen!2sin"
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
                src="http://kashmirtravelport.com/images/hotel/hotel-12230.jpg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-12232.jpg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-12233.jpg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-21280.jpeg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-12236.jpg"
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
