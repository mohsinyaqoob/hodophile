import React from "react";
import Link from "next/link";
import { Layout, Row, Col, Space } from "antd";
import { Icon } from "@blueprintjs/core";

import {
  InstagramOutlined,
  FacebookOutlined,
  YoutubeOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;

function FooterBottom() {
  return (
    <div className="Footer">
      <Footer>
        <Row className="footerRow1">
          <Col xs={24} sm={24} xl={9} xxl={9}>
            <Row>
              <h1>Reach US</h1>
            </Row>

            <Row>
              <Col>
                <Icon style={{ marginRight: "10%" }} icon="area-of-interest" />
              </Col>
              <Col>
                <p>
                  Near Water Tank, Bagh-i-Mehtab, Srinagar, Jammu and Kashmir,
                  190019
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Icon icon="headset" />
              </Col>
              <Col>
                <p>+917889319814 </p>
                <p>+917780863629</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Icon icon="envelope" />
              </Col>
              <Col>
                <p>hodophilekashmir@gmail.com</p>
              </Col>
            </Row>
          </Col>
          <Col xs={24} sm={24} xl={10} xxl={10}>
            <Row>
              <h1>Socialize with Social</h1>
            </Row>
            <Row>
              <Col style={{ marginRight: "12%" }}>
                <a
                  href=" https://www.instagram.com/hodophilekashmir/?igshid=YmMyMTA2M2Y="
                  target="_blank"
                >
                  <InstagramOutlined />
                </a>
              </Col>
              <Col style={{ marginRight: "12%" }}>
                <a
                  href="      https://www.facebook.com/bhatt.nargz/"
                  target="_blank"
                >
                  <FacebookOutlined />
                </a>
              </Col>
              <Col style={{ marginRight: "12%" }}>
                <a
                  href="   https://www.youtube.com/channel/UCdR91QK9PZBo4DR9bfp_-Bw"
                  target="_blank"
                >
                  <YoutubeOutlined />
                </a>
              </Col>
            </Row>
            <Row>
              <h1>Useful Links</h1>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Link icon="home" href="/">
                    Home
                  </Link>
                </Row>
                <Row>
                  <Link icon="home" href="/Packages">
                    Packages
                  </Link>
                </Row>

                <Row>
                  <Link icon="home" href="/Gallery">
                    Gallery
                  </Link>
                </Row>
                <Row>
                  <Link icon="home" href="/Hotels">
                    Hotels
                  </Link>
                </Row>
                <Row>
                  <Link icon="home" href="/Places">
                    Places
                  </Link>
                </Row>
                <Row>
                  <Link icon="home" href="/Contact">
                    Contact
                  </Link>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Footer>

      <Footer>
        <Row className="footerRow2">
          <Col>
            <Row>
              <Col>
                <p>Copyright © 2021 | Hodophile Kashmir</p>
              </Col>
            </Row>
            <Row style={{ display: "flex", justifyContent: "center" }}>
              <Col>
                <a
                  href=" https://www.linkedin.com/in/bisma-nazir-2119201a5/"
                  target="_blank"
                >
                  <p>Degined by Bisma Nazir </p>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Footer>
    </div>
  );
}

export default FooterBottom;
