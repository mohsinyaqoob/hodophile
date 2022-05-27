import React from "react";
import { Row, Col, Card, Button } from "antd";
import Link from "next/link";
import Footer from "../component/Footer";
function HimachalPradeshPackages() {
  return (
    <div>
      <Row>
        <Col className="GallerySection1Col" xs={24} sm={24} xl={12} xxl={12}>
          <h1>Himachal Pradesh Packages</h1>
          <p>
            HodophileKashmir provides number of packages for couples, family,
            friends and business. We provide you the best experience. Travellers
            can customize their packages according to their time availibility,
            budget and number of people.
          </p>
          <p>Choose HodophileKashmir to make your trip memorable.</p>
          <Button
            className="redbuttons"
            href=" https://api.whatsapp.com/send/?phone=917889319814&text&app_absent=0"
            target="_blank"
          >
            Send Inquiry on Whatsapp
          </Button>
        </Col>
      </Row>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Row className="HotelsSectionImages">
          <Col
            xs={24}
            sm={24}
            xl={12}
            xxl={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              className="HotelCardsinner"
              style={{ width: 350 }}
              cover={
                <img
                  height="350px"
                  alt="example"
                  src="https://images.pexels.com/photos/3276841/pexels-photo-3276841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
              }
            >
              <h3>Manali with Leh Ladakh Tour Package</h3>
              <p> No of Days: 8 | People: 6</p>
              <p>₹26,000</p>
              <Button>
                <Link
                  icon="home"
                  href="./PackageCollection/ManaliwithLehLadakhTourPackage"
                >
                  More Details
                </Link>
              </Button>
            </Card>
          </Col>
          <Col
            xs={24}
            sm={24}
            xl={12}
            xxl={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              className="HotelCardsinner"
              style={{ width: 350 }}
              cover={
                <img
                  height="350px"
                  alt="example"
                  src="https://images.pexels.com/photos/5205636/pexels-photo-5205636.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
              }
            >
              <h3>Chandigarh Manali with Leh Ladakh and Kashmir</h3>
              <p> No of Days: 11 | People: 6</p>
              <p>₹31,500</p>
              <Button>
                <Link
                  icon="home"
                  href="./PackageCollection/ChandigarhManaliwithLehLadakhandKashmir"
                >
                  More Details
                </Link>
              </Button>
            </Card>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default HimachalPradeshPackages;
