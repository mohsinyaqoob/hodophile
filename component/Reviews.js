import React from "react";
import { Row, Col } from "antd";

function Reviews() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "80%" }}>
          <div className="Homesection1Header">
            <h1>What Our Customers Say</h1>
            <hr style={{ width: "10%" }} />
          </div>
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <Col>
              <div>
                <script
                  src="https://apps.elfsight.com/p/platform.js"
                  defer
                ></script>
                <div className="elfsight-app-fde2ea40-fe73-4e46-8800-660c1134b558"></div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
