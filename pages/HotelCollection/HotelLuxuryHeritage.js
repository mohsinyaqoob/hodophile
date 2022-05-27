import React from "react";
import { Row, Col, Button } from "antd";
import { Carousel } from "react-responsive-carousel";
import FooterBottom from "../../component/Footer";

function HotelLuxuryHeritage() {
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
            <h1>Hotel Luxury Heritage</h1>
            <p>Srinagar Airport Road 3</p>
            <p>₹ 3,200/Night</p>
            <Button
              className="redbuttons"
              href=" https://api.whatsapp.com/send/?phone=917889319814&text&app_absent=0"
              target="_blank"
            >
              Send Inquiry on Whatsapp
            </Button>
            <h2> About Hotel </h2>
            <p>
              Hotel Luxury Heritage is a 3 Staar hotel near Srinagar Airport,
              with all luxury amenities as per the 3-star hotel standards, Hotel
              is having 2 categories of rooms Super Deluxe rooms and Premium
              rooms.
            </p>
            <h2> Where we are Located</h2>
            <p>
              Airport Road, Near J&K Police Hq's, Hyderpora Srinagar Kashmir
            </p>
            <h2> Where to Eat</h2>
            <p>The hotel is having an inhouse multi-cuisine restaurant</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.3837852709657!2d74.78177011455492!3d34.0340251261386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18ff66de4f445%3A0xd54b4ba719065abc!2sHotel%20Heritage%20Luxury!5e0!3m2!1sen!2sin!4v1652854694535!5m2!1sen!2sin"
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
                src="http://kashmirtravelport.com/images/hotel/hotel-35100.jpeg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-35101.jpeg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-35102.jpeg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-35107.jpeg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-35104.jpeg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-35106.jpeg"
              />
            </Carousel>
          </Col>
        </Row>
      </div>
      <FooterBottom />
    </div>
  );
}

export default HotelLuxuryHeritage;
