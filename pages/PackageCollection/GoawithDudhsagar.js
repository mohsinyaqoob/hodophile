import React from "react";
import { Row, Col, Button } from "antd";
import { Carousel } from "react-responsive-carousel";
import FooterBottom from "../../component/Footer";

function GoawithDudhsagar() {
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
            <h1>Goa with Dudhsagar</h1>
            <p>Goa Budget Tour Package</p>
            <Button className="redbuttons">5 Days</Button>
            <Button className="redbuttons">4 Night</Button>
            <p>Per Person @ ₹ 7,499/-</p>
            <Button
              className="redbuttons"
              href=" https://api.whatsapp.com/send/?phone=917889319814&text&app_absent=0"
              target="_blank"
            >
              Send Inquiry on Whatsapp
            </Button>
            <h2>About Tour Package</h2>
            <p>
              Goa With Dudhsagar Holiday Package in this package you will see
              North Goa, South Goa, and Dudhsagar Waterfall. This package is
              best for family or group who are planning for Goa Trip
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
                src="https://images.pexels.com/photos/6871823/pexels-photo-6871823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
            <h2>Arrival Goa</h2>
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
              After breakfast in hotel drive to North Goa Sightseeing visit
              Aguada Fort, Calangute / Baga Beach, Anjuna Beach, Vagator Beach
              overnight stay in Hotel
            </p>

            <Button className="redbuttons">Breakfast</Button>
            <Button className="redbuttons">Private Cab</Button>
          </Col>
          <Col xs={24} sm={24} xl={7} xxl={7} className="PackageDays">
            <h1>Day 3</h1>
            <h2>South Goa</h2>
            <p>
              After breakfast in the Hotel visit South Se Cathedral church,
              Basilica of Bom Jesus, Panjim bazaar, Miramar beach, Dona Paula
              bay, drop at Hotel
            </p>
            <Button className="redbuttons">Breakfast</Button>
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
            <h2>Dudhsagar Waterfall</h2>
            <p>
              After breakfast, drive to visit Dudhsagar Waterfall which is
              80-90km from North Goa, and then reach Dudh Sagar waterfall. Then
              back to North Goa Stay in Hotel
            </p>
            <Button className="redbuttons">Breakfast</Button>
            <Button className="redbuttons">Private Cab</Button>
          </Col>
          <Col xs={24} sm={24} xl={7} xxl={7} className="PackageDays">
            <h1>Day 5</h1>
            <h2>Dudhsagar Waterfall</h2>
            <p>
              After breakfast in check out from Hotel and drop Goa Airport with
              sweet memories of Goa
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

export default GoawithDudhsagar;
