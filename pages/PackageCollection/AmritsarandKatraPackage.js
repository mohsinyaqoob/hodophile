import React from "react";
import { Row, Col, Button } from "antd";
import { Carousel } from "react-responsive-carousel";
import FooterBottom from "../../component/Footer";

function AmritsarandKatraPackage() {
  return (
    <div>
      <h1>Package</h1>
      <div>
        <Row>
          <Col className="GallerySection1Col" xs={24} sm={24} xl={12} xxl={12}>
            <h1>Packages Details</h1>
            <p>
              Just the right place to halt and relax. A charming complex which
              promises a comfortable stay and an experience to remember.
            </p>
          </Col>
        </Row>
        <Row className="HotelDetailCard">
          <Col xs={24} sm={24} xl={12} xxl={12}>
            <h1>Amritsar & Katra Package</h1>
            <p>Amritsar - Golden Temple- Wagaborder- Katrar</p>
            <Button className="redbuttons">5 Days</Button>
            <Button className="redbuttons">4 Night</Button>
            <p>Per Person @ ₹ 4,777/-</p>
            <Button
              className="redbuttons"
              href=" https://api.whatsapp.com/send/?phone=917889319814&text&app_absent=0"
              target="_blank"
            >
              Send Inquiry on Whatsapp
            </Button>
            <h2>About Tour Package</h2>
            <p>Amritsar</p>
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
                src="https://images.pexels.com/photos/574313/pexels-photo-574313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <img
                alt="example"
                src="https://images.pexels.com/photos/5458388/pexels-photo-5458388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <img
                alt="example"
                src="https://images.pexels.com/photos/5499905/pexels-photo-5499905.jpeg?auto=compress&cs=tinysrgb&w=600"
              />

              <img
                alt="example"
                src="https://images.pexels.com/photos/10172966/pexels-photo-10172966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <img
                alt="example"
                src="https://images.pexels.com/photos/5927795/pexels-photo-5927795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </Carousel>
          </Col>
        </Row>
        <div style={{ width: "90%" }}></div>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Col xs={24} sm={24} xl={7} xxl={7} className="PackageDays">
            <h1>Day 1</h1>
            <h2>Arrival Amritsar</h2>
            <p>
              This day we will pick you from airport/ Railway Station , then
              proceed to you booked hotel check inn take rest , Overnight stay
              at Amritsar.
            </p>
            <Button className="redbuttons">Dinner</Button>
            <Button className="redbuttons">Airport Pickup</Button>
            <Button className="redbuttons">Private Cab</Button>
          </Col>
          <Col xs={24} sm={24} xl={7} xxl={7} className="PackageDays">
            <h1>Day 2</h1>
            <h2>Amritsar Darshan</h2>
            <p>
              This day after breakfast visit Golden temple & Waga Border, then
              in evening return back to Amritsar hotel for overnight stary.
            </p>
            <Button className="redbuttons">Breakfast</Button>
            <Button className="redbuttons">Dinner</Button>
            <Button className="redbuttons">Private Cab</Button>
          </Col>
          <Col xs={24} sm={24} xl={7} xxl={7} className="PackageDays">
            <h1>Day 3</h1>
            <h2>Amritsar- Katra</h2>
            <p>
              This day proceed to Katra via pathankot and Jammu upon arrival at
              Katra check in the hotel, overnight at Hotel in Katra
            </p>
            <Button className="redbuttons">Breakfast</Button>
            <Button className="redbuttons">Dinner</Button>
            <Button className="redbuttons">Private Cab</Button>
          </Col>
        </Row>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Col xs={24} sm={24} xl={7} xxl={7} className="PackageDays">
            <h1>Day 4</h1>
            <h2>Katra Darshan</h2>
            <p>
              This day go for darshan by walk then after darshan return back to
              katra, overnight stay at katra
            </p>
            <Button className="redbuttons">Breakfast</Button>
            <Button className="redbuttons">Dinner</Button>
            <Button className="redbuttons">Private Cab</Button>
          </Col>
          <Col xs={24} sm={24} xl={7} xxl={7} className="PackageDays">
            <h1>Day 5</h1>
            <h2>Drop</h2>
            <p>
              After breakfast transfer you to Jammu Airport/Railway station for
              your onward/Return Journey.
            </p>
            <Button className="redbuttons">Breakfast</Button>
            <Button className="redbuttons">Private Cab</Button>
          </Col>
        </Row>
      </div>
      <FooterBottom />
    </div>
  );
}

export default AmritsarandKatraPackage;
