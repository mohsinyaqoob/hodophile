import React from "react";
import { Row, Col, Button } from "antd";
import { Carousel } from "react-responsive-carousel";
import FooterBottom from "../../component/Footer";

function GoaBikeTour() {
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
            <h1>Goa Bike Tour</h1>
            <p>Goa Budget Tour Package</p>
            <Button className="redbuttons">4 Days</Button>
            <Button className="redbuttons">3 Night</Button>
            <p>Per Person @ ₹ 6,200/-</p>
            <Button
              className="redbuttons"
              href=" https://api.whatsapp.com/send/?phone=917889319814&text&app_absent=0"
              target="_blank"
            >
              Send Inquiry on Whatsapp
            </Button>
            <h2>About Tour Package</h2>
            <p>
              Goa Bike/Scooty Tour package in the package you will get
              Airport/Railway station pick up and Drop and for Sightseeing, you
              will get scooty in which you can ride by your own and visit North
              Goa and South Goa.
            </p>
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
                src="https://images.pexels.com/photos/4430306/pexels-photo-4430306.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
              <img
                alt="example"
                src="https://images.pexels.com/photos/4429332/pexels-photo-4429332.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
              <img
                alt="example"
                src="https://images.pexels.com/photos/4427658/pexels-photo-4427658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />

              <img
                alt="example"
                src="https://images.pexels.com/photos/7242464/pexels-photo-7242464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <img
                alt="example"
                src="https://images.pexels.com/photos/11438923/pexels-photo-11438923.jpeg?auto=compress&cs=tinysrgb&w=600"
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
            <h2>Arrival Airport / Railway Station</h2>
            <p>
              After reaching Goa meet our driver who will assist you and take
              you to the hotel, On completing check in formalities then take
              rest and after that day at leisure Overnight stay in Hotel.
            </p>
            <Button className="redbuttons">Dinner</Button>
            <Button className="redbuttons">Welcome Drink</Button>
            <Button className="redbuttons">Private Cab</Button>
          </Col>
          <Col xs={24} sm={24} xl={7} xxl={7} className="PackageDays">
            <h1>Day 2</h1>
            <h2>North Goa Sightseeing</h2>
            <p>
              This day after Breakfast you can proceed to Northgoa by your own
              self then do vist these places: ● Fort Aguada (Portuguese
              Architecture) ● Sinquerim Beach (Extend Of Sand) ● Calangute Beach
              (Queen Of Beach) ● Baga Beach (Dazzling Nightlife) ● Anjuna Beach
              (Palm Shaded Beach) ● Vagator Beach (Hippie Beach) ● Chapora Fort
              (DilChahta Hai Spot)
            </p>

            <Button className="redbuttons">Breakfast</Button>
            <Button className="redbuttons">Rental Scooty</Button>
          </Col>
          <Col xs={24} sm={24} xl={7} xxl={7} className="PackageDays">
            <h1>Day 3</h1>
            <h2>South Goa</h2>
            <p>
              This day again proceed to SouthGoa by your own , Then do visit
              theses, after that return back to hotel for overnight stay ●
              Mangeshi Temple (Spiritual Head) ● Old Goa Churches ● Old Goa
              Museum ● Dona Paula Beach (Lover’s Paradise) ● Miramar Beach
              (Arabian Sea) ● Mandovi Boat Cruise
            </p>
            <Button className="redbuttons">Breakfast</Button>
            <Button className="redbuttons">Rental Scooty</Button>
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
            <h2>Drop at Airport / Railway Station</h2>
            <p>
              After breakfast in check out from Hotel and our Representative
              will drop you at Goa Airport with sweet memories of Goa
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

export default GoaBikeTour;
