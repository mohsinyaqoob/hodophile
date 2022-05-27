import React from "react";
import { Row, Col, Button } from "antd";
import { Carousel } from "react-responsive-carousel";
import FooterBottom from "../../component/Footer";

function KolahoiGreenHeightsGulmarg() {
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
            <h1>Kolahoi Green Heights Gulmarg</h1>
            <p>Main Gulmarg, Kashmir</p>
            <p>₹ 12,500/Night</p>
            <Button
              className="redbuttons"
              href=" https://api.whatsapp.com/send/?phone=917889319814&text&app_absent=0"
              target="_blank"
            >
              Send Inquiry on Whatsapp
            </Button>
            <h2> About Hotel </h2>
            <p>
              Kolahoi Green Heights Hotel is one of the best luxury hotels in
              Gulmarg near Gondola Cabale car, hotels are having all modern
              amenities and are having the best views around the famous Gulmarg
              the best Ski resort in Asia. The hotel is having 2 room categories
              Deluxe View and Club Rooms
            </p>
            <h2> Where we are Located</h2>
            <p>Gulmarg Near Gondola Cable Car Kashmir</p>
            <h2> Where to Eat</h2>
            <p>The hotel is having the multi-cuisine restaurant</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.9076474442727!2d74.38547851455526!3d34.04624002549529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1afe8d6ae6761%3A0x9f70e140130f5563!2sKOLAHOI%20GREEN%20HEIGHTS!5e0!3m2!1sen!2sin!4v1652855176830!5m2!1sen!2sin"
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
                src="http://kashmirtravelport.com/images/hotel/hotel-38410.gif"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-38411.gif"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-39160.gif"
              />
            </Carousel>
          </Col>
        </Row>
      </div>
      <FooterBottom />
    </div>
  );
}

export default KolahoiGreenHeightsGulmarg;
