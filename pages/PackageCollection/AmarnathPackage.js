import React from "react";
import { Row, Col, Button } from "antd";
import { Carousel } from "react-responsive-carousel";
import FooterBottom from "../../component/Footer";

function AmarnathPackage() {
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
            <h1>Amarnath Package</h1>
            <p>Yatra</p>
            <Button className="redbuttons">3 Days</Button>
            <Button className="redbuttons">2 Night</Button>
            <p>Per Person @ ₹ 19,400/-</p>
            <Button
              className="redbuttons"
              href=" https://api.whatsapp.com/send/?phone=917889319814&text&app_absent=0"
              target="_blank"
            >
              Send Inquiry on Whatsapp
            </Button>
            <h2>About Tour Package</h2>
            <p>
              Shri Amarnath yatra is organized in the month of Shravan( July-
              August ) to Shri Amarnathji Cave shrine
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
                src="https://img.freepik.com/free-photo/alpine-landscape-with-lake_159805-588.jpg?size=626&ext=jpg&ga=GA1.2.540788866.1652378093"
              />
              <img
                alt="example"
                src="https://img.freepik.com/free-photo/aerial-view-landscape-with-himalaya-range-mountains-from-airbus-flying-from-new-delhi-go-kushok-bakula-rimpochee-airport-leh-ladakh-village-jammu-kashmir-india_258052-1307.jpg?size=626&ext=jpg&ga=GA1.2.540788866.1652378093"
              />

              <img
                alt="example"
                src="http://kashmirtravelport.com/images/packages/packagedesc/pkg_desc-1123.jpg"
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
            <h2>Arrival Srinagar- Transfer to Sonmarg</h2>
            <p>
              This day we will receive you from Srinagar airport and transfer to
              Sonmarg , Overnight stay at Sonmarg hotel.
            </p>
            <Button className="redbuttons">Dinner</Button>
            <Button className="redbuttons">Welcome Drink</Button>
            <Button className="redbuttons">Private Cab</Button>
          </Col>
          <Col xs={24} sm={24} xl={7} xxl={7} className="PackageDays">
            <h1>Day 2</h1>
            <h2>Sonmarg - Amarnath Darshan</h2>
            <p>
              This day after breakfast go for Amarnath Darshan by Chopper, after
              darshan return back to Srinagar, Upon arrival go for Shikara ride
              in famous Dal lake, Overnight stay at Srinagar
            </p>
            <Button className="redbuttons">Break4</Button>
            <Button className="redbuttons">Dinner</Button>
            <Button className="redbuttons">Private Cab</Button>
          </Col>
          <Col xs={24} sm={24} xl={7} xxl={7} className="PackageDays">
            <h1>Day 3</h1>
            <h2>Airport Drop</h2>
            <p>
              After breakfast transfer by car to Srinagar Airport with lots of
              memories.
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

export default AmarnathPackage;
