import React from "react";
import { Row, Col } from "antd";

function Section1() {
  return (
    <div>
      <Row>
        <Col className="GallerySection1Col" xs={24} sm={24} xl={12} xxl={12}>
          <h1>About Us</h1>
          <p>
            Kashmir Travelport has been present for over 8 years. We make the
            best for all our customers.
          </p>
        </Col>
      </Row>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Row className="aboutUsSection1Cards ">
          <Col xs={24} sm={24} xl={8} xxl={8}>
            <Row className="aboutUsSection1Card">
              <Col>
                <h2>Life is either a great adventure or nothing.</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </Col>
            </Row>
            <Row className="aboutUsSection1Card">
              <Col>
                <img
                  className="AboutImages"
                  width="100%"
                  height="250px"
                  alt="example"
                  src="https://images.pexels.com/photos/7562495/pexels-photo-7562495.jpeg?auto=compress&cs=tinysrgb&w=600"
                />

                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and.
                </p>
              </Col>
            </Row>
            <Row className="aboutUsSection1Card">
              <Col>
                <h2>Life is either a great adventure or nothing.</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </Col>
            </Row>
          </Col>
          <Col xs={24} sm={24} xl={15} xxl={15}>
            <Row className="aboutUsSection1Card">
              <Col xs={24} sm={24} xl={24} xxl={24}>
                <img
                  className="AboutImages"
                  width="100%"
                  height="344px"
                  alt="example"
                  src="https://images.pexels.com/photos/6487368/pexels-photo-6487368.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
              </Col>
            </Row>
            <Row className="aboutUsSection1Card">
              <Col xs={24} sm={24} xl={12} xxl={12}>
                <h2>Life is either a great adventure or nothing.</h2>
                <p>
                  Kashmir Great Lakes Tour ₹ 16,800 8 nights Discount 10-30% Off
                  Kashmir Great Lakes Tours for 8 Nights | Kashmir Trekking
                  Tours.
                </p>
                <p>
                  Kashmir Great Lakes Tour ₹ 16,800 8 nights Discount 10-30% Off
                  Kashmir Great Lakes Tours for 8 Nights | Kashmir Trekking
                  Tours
                </p>
              </Col>
              <Col xs={24} sm={24} xl={12} xxl={12}>
                <img
                  className="AboutImages"
                  width="100%"
                  height="250px"
                  alt="example"
                  src="https://images.pexels.com/photos/6811947/pexels-photo-6811947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
              </Col>
            </Row>
            <Row className="aboutUsSection1Card">
              <Col>
                <h2>Life is either a great adventure or nothing.</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Section1;
