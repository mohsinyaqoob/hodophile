import React from "react";
import { Row, Col, Card, Button } from "antd";
import Link from "next/link";
import Footer from "../component/Footer";
function LadakhPackages() {
  return (
    <div>
      <Row>
        <Col className="GallerySection1Col" xs={24} sm={24} xl={12} xxl={12}>
          <h1>Ladakh Packages</h1>
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
            xl={8}
            xxl={8}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              className="HotelCardsinner"
              style={{ width: 350 }}
              cover={
                <img
                  height="350px"
                  alt="example"
                  src="https://img.freepik.com/free-photo/confluence-indus-zanskar-rivers-leh-ladakh-india_1150-11112.jpg?size=626&ext=jpg&ga=GA1.2.540788866.1652378093"
                />
              }
            >
              <h3>Best Tour For Leh Ladakh</h3>
              <p> No of Days: 6 | People: 4</p>
              <p>₹15,800</p>
              <Button>
                <Link
                  icon="home"
                  href="./PackageCollection/BestTourForLehLadakh"
                >
                  More Details
                </Link>
              </Button>
            </Card>
          </Col>
          <Col
            xs={24}
            sm={24}
            xl={8}
            xxl={8}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              className="HotelCardsinner"
              style={{ width: 350 }}
              cover={
                <img
                  height="350px"
                  alt="example"
                  src="https://img.freepik.com/free-photo/view-landscape-namgyal-tsemo-gompa-leh-ladakh-india_45041-91.jpg?size=626&ext=jpg&ga=GA1.2.540788866.1652378093"
                />
              }
            >
              <h3>Leh Ladakh with Panamic & Turtuk</h3>
              <p> No of Days: 9 | People: 6</p>
              <p>₹17,800</p>
              <Button>
                <Link
                  icon="home"
                  href="./PackageCollection/LehLadakhwithPanamicandTurtuk"
                >
                  More Details
                </Link>
              </Button>
            </Card>
          </Col>
          <Col
            xs={24}
            sm={24}
            xl={8}
            xxl={8}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              className="HotelCardsinner"
              style={{ width: 350 }}
              cover={
                <img
                  height="350px"
                  alt="example"
                  src="https://img.freepik.com/free-photo/mountain-river-blue-sky-leh-ladakh-india_1150-11118.jpg?size=626&ext=jpg&ga=GA1.2.540788866.1652378093"
                />
              }
            >
              <h3>Ladakh Dekho</h3>
              <p> No of Days: 5 | People: 6</p>
              <p>₹11,000</p>
              <Button>
                <Link icon="home" href="./PackageCollection/LadakhDekho">
                  More Details
                </Link>
              </Button>
            </Card>
          </Col>
        </Row>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}
      >
        <Row className="HotelsSectionImages">
          <Col
            xs={24}
            sm={24}
            xl={8}
            xxl={8}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              className="HotelCardsinner"
              style={{ width: 350 }}
              cover={
                <img
                  height="350px"
                  alt="example"
                  src="https://images.pexels.com/photos/6650465/pexels-photo-6650465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
              }
            >
              <h3>Kashmir Leh Ladakh Group Tour</h3>
              <p> No of Days: 11 | People: 12</p>
              <p>₹23,600</p>
              <Button>
                <Link
                  icon="home"
                  href="./PackageCollection/KashmirLehLadakhGroup"
                >
                  More Details
                </Link>
              </Button>
            </Card>
          </Col>
          <Col
            xs={24}
            sm={24}
            xl={8}
            xxl={8}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              className="HotelCardsinner"
              style={{ width: 350 }}
              cover={
                <img
                  height="350px"
                  alt="example"
                  src="https://images.pexels.com/photos/5015217/pexels-photo-5015217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
              }
            >
              <h3>Ladakh Family Tour Package</h3>
              <p> No of Days: 7 | People: 6</p>
              <p>₹15,900</p>
              <Button>
                <Link
                  icon="home"
                  href="./PackageCollection/LadakhFamilyTourPackage"
                >
                  More Details
                </Link>
              </Button>
            </Card>
          </Col>
          <Col
            xs={24}
            sm={24}
            xl={8}
            xxl={8}
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
        </Row>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}
      >
        <Row className="HotelsSectionImages">
          <Col
            xs={24}
            sm={24}
            xl={8}
            xxl={8}
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
          <Col
            xs={24}
            sm={24}
            xl={8}
            xxl={8}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              className="HotelCardsinner"
              style={{ width: 350 }}
              cover={
                <img
                  height="350px"
                  alt="example"
                  src="https://images.pexels.com/photos/12141330/pexels-photo-12141330.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
              }
            >
              <h3>Discover leh & Kashmir</h3>
              <p> No of Days: 7 | People: 4</p>
              <p>₹23,999</p>
              <Button>
                <Link
                  icon="home"
                  href="./PackageCollection/DiscoverLehandKashmir"
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

export default LadakhPackages;
