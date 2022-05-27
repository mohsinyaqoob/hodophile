import React from "react";
import { Row, Col, Button } from "antd";
import { Carousel } from "react-responsive-carousel";
import FooterBottom from "../../component/Footer";

function VivantaTajSrinagar() {
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
            <h1>Vivanta Taj Srinagar</h1>
            <p>Vivanta Dal View, Srinagar KashmirGulmarg, Baramullah Kashmir</p>
            <p>₹ 17,500/Night</p>
            <Button
              className="redbuttons"
              href=" https://api.whatsapp.com/send/?phone=917889319814&text&app_absent=0"
              target="_blank"
            >
              Send Inquiry on Whatsapp
            </Button>
            <h2> About Hotel </h2>
            <p>
              Vivanta Taj Srinagar is one of the luxury 5 Star Hotel in Srinagar
              Kashmir, which is having a magnificent view of Dal Lake, Vivant
              Taj is having 4 types of rooms, Deluxe Delight, Premium Indulgence
              Garden Sit out, Premium Indulgence Balcony Sit out.
            </p>
            <h2> Where we are Located</h2>
            <p>
              Vivanta Dal View, Srinagar, Kralsangri, Brein, Srinagar, Jammu,
              and Kashmir
            </p>
            <h2> Where to Eat</h2>
            <p>The Hotel is having an in-house multi-cuisine restaurant</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.7099398866394!2d74.87925331455695!3d34.10257042252501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18f93de728669%3A0xc99e16c638e9497!2sVivanta%20Dal%20View%2C%20Srinagar!5e0!3m2!1sen!2sin!4v1652853751795!5m2!1sen!2sin"
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
                src="http://kashmirtravelport.com/images/hotel/hotel-46421.jpeg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-46422.jpeg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-46423.jpeg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-46424.jpeg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-46425.jpeg"
              />
            </Carousel>
          </Col>
        </Row>
      </div>
      <FooterBottom />
    </div>
  );
}

export default VivantaTajSrinagar;
