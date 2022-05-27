import React from "react";
import { Row, Col, Button } from "antd";
import { Carousel } from "react-responsive-carousel";
import FooterBottom from "../../component/Footer";

function HotelGrandDragonLadakh() {
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
            <h1>Hotel Grand Dragon Ladakh</h1>
            <p>Old Leh Rd, Sheynam, Leh Ladakh</p>
            <p>₹ 11,800/Night</p>
            <Button
              className="redbuttons"
              href=" https://api.whatsapp.com/send/?phone=917889319814&text&app_absent=0"
              target="_blank"
            >
              Send Inquiry on Whatsapp
            </Button>
            <h2> About Hotel </h2>
            <p>
              Hotel Grand Dragon Ladakh, is one of the luxurious hotels in
              Ladakh, having a magnificent mountain view. Hotel Grand Dragon is
              having 4 categories of rooms, Deluxe, Premium Heritage, Heritage
              Suite, and Luxury Suite rooms.
            </p>
            <h2> Where we are Located</h2>
            <p>Old Leh Road, Sheynam, Leh Ladakh</p>
            <h2> Where to Eat</h2>
            <p>
              The Hotel is having 3 inhouse restaurants which offer varieties of
              food option
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.5999389823755!2d77.57833711455862!3d34.1565759196734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38fdeb43c1fc9bb9%3A0x863d867e3c906f70!2sThe%20Grand%20Dragon%20Ladakh!5e0!3m2!1sen!2sin!4v1652855889713!5m2!1sen!2sin"
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgkqT10MFfpNSo9IBFIkIkDwjFAdcP31JcMA&usqp=CAU"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-28461.jpg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-28462.jpg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-28463.jpg"
              />
              <img
                alt="example"
                src="http://kashmirtravelport.com/images/hotel/hotel-28464.jpg"
              />
            </Carousel>
          </Col>
        </Row>
      </div>
      <FooterBottom />
    </div>
  );
}

export default HotelGrandDragonLadakh;
