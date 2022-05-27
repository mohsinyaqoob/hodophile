import React from "react";
import { Row, Col, Button } from "antd";
import { Carousel } from "react-responsive-carousel";
import FooterBottom from "../../component/Footer";

function HotelSnowLandSonmarg() {
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
            <h1>Hotel Snow Land Sonmarg</h1>
            <p>Sonmarg, Ganderbal, Jammu and Kashmir</p>
            <p>₹ 9,300/Night</p>
            <Button
              className="redbuttons"
              href=" https://api.whatsapp.com/send/?phone=917889319814&text&app_absent=0"
              target="_blank"
            >
              Send Inquiry on Whatsapp
            </Button>
            <h2> About Hotel </h2>
            <p>
              Hotel Snow Land is one of the luxury hotel in Sonamarg Kashmir,
              With all amenities, the hotel is surrounded by mountains and near
              the Sind River. Snow Land is having 4 categories of Rooms Super
              Deluxe, Super Delight, Couple Suite, and Family Suite rooms come
              and enjoy your memorable holiday with us
            </p>
            <h2> Where we are Located</h2>
            <p>Main Road Sonamarg, Ganderbal Jammu and Kashmir</p>
            <h2> Where to Eat</h2>
            <p>
              The hotel is having the best inhouse multi-cuisine restaurant with
              varieties of options
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3295.702696888395!2d75.27455481456312!3d34.30711971170404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e234c6083d1a4b%3A0xa53129a338dc5556!2sHotel%20Snowland%20Sonamarg!5e0!3m2!1sen!2sin!4v1652856072358!5m2!1sen!2sin"
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
                src="http://kashmirtravelport.com/images/hotel/hotel-11130.jpg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-11131.jpg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-11132.jpg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-11133.jpg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-11134.jpg"
              />
            </Carousel>
          </Col>
        </Row>
      </div>
      <FooterBottom />
    </div>
  );
}

export default HotelSnowLandSonmarg;
