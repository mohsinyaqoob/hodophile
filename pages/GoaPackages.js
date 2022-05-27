import React from "react";
import { Row, Col, Card, Button } from "antd";
import Link from "next/link";
import Footer from "../component/Footer";
function GoaPackages() {
  return (
    <div>
      <Row>
        <Col className="GallerySection1Col" xs={24} sm={24} xl={12} xxl={12}>
          <h1>Goa Packages</h1>
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
                  src="https://images.pexels.com/photos/4429333/pexels-photo-4429333.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
              }
            >
              <h3>Goa Bike Tour</h3>
              <p> No of Days: 4 | People: 2</p>
              <p>₹6,200</p>
              <Button>
                <Link icon="home" href="./PackageCollection/GoaBikeTour">
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
                  src="https://images.pexels.com/photos/358457/pexels-photo-358457.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
              }
            >
              <h3>Goa with Dudhsagar</h3>
              <p> No of Days: 5 | People: 6</p>
              <p>₹7,499</p>
              <Button>
                <Link icon="home" href="./PackageCollection/GoawithDudhsagar">
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

export default GoaPackages;
