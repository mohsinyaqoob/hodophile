import React from "react";
import { Row, Col, Button } from "antd";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import FooterBottom from "../Footer";
import Reviews from "../Reviews";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), MoveIn(), Sticky(50, 50));

function HomePage() {
  return (
    <div className="bannerImage">
      <div className="bannerImageStyle">
        <Row className="bannerTextBox">
          <Col className="bannerText">
            <h1>Hodophile Kashmir</h1>
            <p>One who loves to travel.</p>
            <div>
              <Button
                className="redbuttons "
                href=" https://api.whatsapp.com/send/?phone=917889319814&text&app_absent=0"
                target="_blank"
              >
                Send Inquiry on Whatsapp
              </Button>
            </div>
          </Col>
        </Row>
      </div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Reviews />
      <FooterBottom />
    </div>
  );
}

export default HomePage;
