import { Card, Row, Col, Button } from "antd";
import React from "react";
const { Meta } = Card;

function Section2() {
  return (
    <div>
      <div style={{ marginTop: "5%" }}>
        <Row>
          <Col xs={24} sm={24} xl={12} xxl={12}>
            <div className="Section2Side1"></div>
          </Col>
          <Col xs={24} sm={24} xl={12} xxl={12}>
            <div>
              <p>Ladakh Bike Tour ₹ 15,500 for person 6 D</p>
              <h1 className="redText">Discount 10-30% Off</h1>
              <p>
                If you’re looking for a truly memorable Leh Ladakh Bike Tour
                this the right option for you.
              </p>
              <Button className="redbuttons">Resolve Your Enquiry</Button>
            </div>
            <div>
              <Row>
                <Col xs={24} sm={24} xl={18} xxl={18}>
                  <img
                    alt="example"
                    style={{ width: "100%" }}
                    src="https://img.freepik.com/free-photo/group-motorcycle-riders-mountain-road_346278-13.jpg?size=626&ext=jpg&ga=GA1.2.540788866.1652378093"
                  />
                </Col>
                <Col xs={24} sm={24} xl={4} xxl={4}>
                  <h1>Discount 10-30% Off</h1>
                  <Button className="redbuttons">Cheap Ldakh Tour</Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Section2;
