import React from "react";
import { Row, Col, Button } from "antd";
import { Carousel } from "react-responsive-carousel";
import FooterBottom from "../../component/Footer";

function HotelZojilaResidency() {
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
            <h1>Hotel Zojila Residency</h1>
            <p>Bemathang, Baroo, Kargil</p>
            <p>₹ 4,200/Night</p>
            <Button
              className="redbuttons"
              href=" https://api.whatsapp.com/send/?phone=917889319814&text&app_absent=0"
              target="_blank"
            >
              Send Inquiry on Whatsapp
            </Button>
            <h2> About Hotel </h2>
            <p>
              Hotel Zojila Residency is one of the best hotels in Kargil with a
              Suru river view, Hotel Zojila Residency has 3 categories of rooms
              and is equipped with all modern facilities
            </p>
            <h2> Where we are Located</h2>
            <p>Near Suru River Bemathang, Baroo, Kargil</p>
            <h2> Where to Eat</h2>
            <p>The hotel is having an inhouse multi-cuisine restaurant</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.1330821100464!2d76.13202011457044!3d34.550185698773525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e323aa8e5725f1%3A0x321254d1e336e1e7!2sHotel%20Zojila%20Residency%20Kargil!5e0!3m2!1sen!2sin!4v1652854517214!5m2!1sen!2sin"
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
                src="http://kashmirtravelport.com/images/hotel/hotel-46001.jpg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-46002.jpeg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-46006.jpeg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-46007.jpg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-46004.jpeg"
              />
            </Carousel>
          </Col>
        </Row>
      </div>
      <FooterBottom />
    </div>
  );
}

export default HotelZojilaResidency;
