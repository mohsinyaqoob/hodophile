import React from "react";
import { Row, Col, Button } from "antd";
import { Carousel } from "react-responsive-carousel";
import FooterBottom from "../../component/Footer";

function KatraDarshan() {
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
            <h1>Katra Darshan</h1>
            <p>Jammu Katra patnitop jammu</p>
            <Button className="redbuttons">4 Days</Button>
            <Button className="redbuttons">3 Night</Button>
            <p>Per Person @ ₹ 6,759/-</p>
            <Button
              className="redbuttons"
              href=" https://api.whatsapp.com/send/?phone=917889319814&text&app_absent=0"
              target="_blank"
            >
              Send Inquiry on Whatsapp
            </Button>
            <h2>About Tour Package</h2>
            <p>
              Katra Vaishno Devi is a manifestation of the Hindu Mother Goddess,
              Devi.
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
                src="https://img.freepik.com/free-photo/beautiful-river-snow-covered-mountains-landscape-kashmir-state-india_1232-4324.jpg?size=626&ext=jpg&ga=GA1.2.540788866.1652378093"
              />
              <img
                alt="example"
                src="data:image/jpeg;base64,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"
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
            <h2>Arrival Jammu-Katra</h2>
            <p>
              Meet upon arrival and drive to Katra. . Evening at leisure.
              Overnight stay in Hotel at Katra.
            </p>
            <Button className="redbuttons">Dinner</Button>
            <Button className="redbuttons">Welcome Drink</Button>
            <Button className="redbuttons">Private Cab</Button>
          </Col>
          <Col xs={24} sm={24} xl={7} xxl={7} className="PackageDays">
            <h1>Day 2</h1>
            <h2>Darshan</h2>
            <p>
              After breakfast trek up for spiritual Darshan of Mata Vaishno
              Devi, after complete performance of the Darshan return to Hotel
              for overnight
            </p>
            <Button className="redbuttons">Dinner</Button>
            <Button className="redbuttons">Dinner</Button>
          </Col>
          <Col xs={24} sm={24} xl={7} xxl={7} className="PackageDays">
            <h1>Day 3</h1>
            <h2>Katra -Patnitop</h2>
            <p>
              After your breakfast, a 2-hour drive will take you to Patnitop (
              81Kms )a serene and peaceful hill station offering breathtaking
              views of the dense pine forest and snow-clad majestic mountains.
              Overnight at the hotel.
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
            <h2>Patnitop -Jammu Drop</h2>
            <p>
              After breakfast drive to Jammu to proceed for further destination.
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

export default KatraDarshan;
