import React from "react";
import { Row, Col } from "antd";

function Section3() {
  return (
    <div>
      <div className="Homesection1Header">
        <h1>Popular Destinations</h1>
        <hr style={{ width: "10%" }} />
        <p>
          Best Ladakh Tour Packages | Best Kashmir Tour Packages | Manali Get
          Kargil Ladakh | Shimla Manali | Amritsar Chandigrah and Goa
        </p>
      </div>
      <Row className="Homesection3Row">
        <Col className="Homesection3Ladakh" xs={24} sm={24} xl={5} xxl={5}>
          <div style={{ marginTop: "84%" }}>
            <h1>Ladakh</h1>
            <p>
              Kashmir Honeymoon Packages| Ladakh Honeymoon Packages| Goa
              Honeymoon Packages
            </p>
          </div>
        </Col>
        <Col className="Homesection3Kashmir" xs={24} sm={24} xl={5} xxl={5}>
          <div style={{ marginTop: "84%" }}>
            <h1>Kashmir</h1>
            <p>
              Kashmir Honeymoon Packages| Ladakh Honeymoon Packages| Goa
              Honeymoon Packages
            </p>
          </div>
        </Col>
        <Col className="Homesection3Goa" xs={24} sm={24} xl={5} xxl={5}>
          <div style={{ marginTop: "84%" }}>
            <h1>Goa</h1>
            <p>
              Kashmir Honeymoon Packages| Ladakh Honeymoon Packages| Goa
              Honeymoon Packages
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Section3;
