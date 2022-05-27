import React from "react";
import { Col, Row, Input, Button } from "antd";
import { Icon } from "@blueprintjs/core";
import {
  InstagramOutlined,
  FacebookOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import emailjs from "emailjs-com";

function Section1() {
  function sendEmail(e) {
    console.log("Sent");
    e.preventDefault();
    emailjs
      .sendForm(
        "service_eex1d79",
        "template_ks5fgko",
        e.target,
        "4YCZB9kNEslDO_Q_0"
      )
      .then((res) => {
        alert("Hoodphile Kashmir will connect you soon");
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <Row>
        <Col className="GallerySection1Col" xs={24} sm={24} xl={12} xxl={12}>
          <h1>Contact Us</h1>
          <p>
            Hodophile Kashmir has been present for over 8 years. We make the
            best for all our customers.
          </p>
        </Col>
      </Row>

      <Row
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
        className="ContactUsSection1"
      >
        <Col xs={24} sm={24} xl={13} xxl={13}>
          <Row>
            <Col xs={24} sm={24} xl={24} xxl={24}>
              <h2>Get in Touch</h2>
              <p>If you have any questions or Query.</p>
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={24} xl={2} xxl={2}>
              <Icon className="redText" icon="area-of-interest" />
            </Col>
            <Col xs={24} sm={24} xl={12} xxl={12}>
              <h3>Head Office</h3>
              <p>
                Near Water Tank, Bagh-i-Mehtab, Srinagar, Jammu and Kashmir
                190019
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={24} xl={2} xxl={2}>
              <Icon className="redText" icon="office" />
            </Col>
            <Col xs={24} sm={24} xl={12} xxl={12}>
              <h3>Branch Office</h3>
              <p>
                Near Water Tank, Bagh-i-Mehtab, Srinagar, Jammu and Kashmir
                190019
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={24} xl={2} xxl={2}>
              <Icon className="redText" icon="envelope" />
            </Col>

            <Col xs={24} sm={24} xl={2} xxl={2}>
              <p>hodophilekashmir@gmail.com</p>
            </Col>
          </Row>

          <Row>
            <Col xs={24} sm={24} xl={2} xxl={2}>
              <Icon className="redText" icon="phone" />
            </Col>
            <Col xs={24} sm={24} xl={12} xxl={12}>
              <p>
                <span>+917889319814 </span>
                <span>+917780863629</span>
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={24} xl={24} xxl={24}>
              <Row>
                <Col style={{ marginRight: "12%" }}>
                  <a
                    className="redText"
                    href=" https://www.instagram.com/hodophilekashmir/?igshid=YmMyMTA2M2Y="
                    target="_blank"
                  >
                    <InstagramOutlined />
                  </a>
                </Col>

                <Col style={{ marginRight: "12%" }}>
                  <a
                    className="redText"
                    href="      https://www.facebook.com/bhatt.nargz/"
                    target="_blank"
                  >
                    <FacebookOutlined />
                  </a>
                </Col>
                <Col style={{ marginRight: "12%" }}>
                  <a
                    className="redText"
                    href="   https://www.youtube.com/channel/UCdR91QK9PZBo4DR9bfp_-Bw"
                    target="_blank"
                  >
                    <YoutubeOutlined />
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} xl={10} xxl={10} className="ContactusMessageBox">
          <form className="contactForm" action="#" onSubmit={sendEmail}>
            <Row>
              <h2> Send Us Your Query</h2>
            </Row>
            <input name="name" placeholder="Enter Your Name" />
            <input name="email" placeholder="Enter Your Email" />
            <input name="phone" placeholder="Enter Your Mobile" />
            <input
              style={{ height: "180px", width: "100%" }}
              placeholder="Enter Your Message"
              name="message"
            />
            <Row>
              <button className="contactbutton" type="submit">
                Send
              </button>
            </Row>
          </form>
        </Col>
      </Row>
      <Row>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.017851341305!2d74.80904401455439!3d34.01775272699571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18f58dfbc850b%3A0xced0d23c784e211!2sHODOPHILE%20KASHMIR!5e0!3m2!1sen!2sin!4v1653066310589!5m2!1sen!2sin"
          width="100%"
          height="300"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Row>
    </div>
  );
}

export default Section1;
