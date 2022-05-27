import React from "react";
import { Row, Col, Button } from "antd";
import { Carousel } from "react-responsive-carousel";
import FooterBottom from "../../component/Footer";

function MystiqueMeadowsEarthHomes() {
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
            <h1>Mystique Meadows Earth Homes</h1>
            <p>Hunder Nubra Ladakh</p>
            <p>₹ 7,000/Night</p>
            <Button
              className="redbuttons"
              href=" https://api.whatsapp.com/send/?phone=917889319814&text&app_absent=0"
              target="_blank"
            >
              Send Inquiry on Whatsapp
            </Button>
            <h2> About Hotel </h2>
            <p>
              Mystique Meadows Earth Homes is a round hut cum tent accommodation
              in Hunder Nubra.
            </p>
            <h2> Where we are Located</h2>
            <p>Hunder Nubra Ladakh just 400 meters from Hunder Sand Dunes</p>
            <h2> Where to Eat</h2>
            <p>The Hotel is having in house restaurant</p>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13138.363865177465!2d77.4634335!3d34.589215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1eb77a1fdc187ac7!2sMystique%20Meadows%20Earth%20Homes!5e0!3m2!1sen!2sin!4v1652853215721!5m2!1sen!2sin"
                width="100%"
                height="250"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
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
                src="http://kashmirtravelport.com/images/hotel/hotel-01421.jpg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-01424.jpg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-01425.jpg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-01426.jpg"
              />
            </Carousel>
          </Col>
        </Row>
      </div>
      <FooterBottom />
    </div>
  );
}

export default MystiqueMeadowsEarthHomes;
