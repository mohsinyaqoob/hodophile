import React from "react";
import { Row, Col, Button, Card } from "antd";
import Link from "next/link";
import "aos/dist/aos.css";

function Section1() {
  return (
    <div>
      <div className="Homesection1Header">
        <div>
          <h1>Best Holiday Packages</h1>
          <hr style={{ width: "10%" }} />
          <p>
            Get Best Customised Tour Package for Jammu & Kashmir | Kargil Ladakh
            | Shimla Manali | Amritsar Chandigrah and Goa
          </p>
        </div>
      </div>

      <div>
        <Row className="section1CardRow">
          <Col xs={24} sm={24} xl={6} xxl={6} className="section1Card">
            <Card
              className="HotelCardsinner"
              style={{ width: 350 }}
              cover={
                <img
                  height="350px"
                  alt="example"
                  src="https://img.freepik.com/free-photo/aerial-view-landscape-with-himalaya-range-mountains-from-airbus-flying-from-new-delhi-go-kushok-bakula-rimpochee-airport-leh-ladakh-village-jammu-kashmir-india_258052-1306.jpg?size=626&ext=jpg&ga=GA1.2.540788866.1652378093"
                />
              }
            >
              <h3>Kashmir Winter Wonderland</h3>
              <p> No of Days: 6 | People: 6</p>
              <p>₹10,400</p>
              <Button>
                <Link
                  icon="home"
                  href="./PackageCollection/KashmirWinterWonderland"
                >
                  More Details
                </Link>
              </Button>
            </Card>
          </Col>
          <Col xs={24} sm={24} xl={6} xxl={6} className="section1Card">
            <Card
              className="HotelCardsinner"
              style={{ width: 350 }}
              cover={
                <img
                  height="350px"
                  alt="example"
                  src="https://img.freepik.com/free-photo/beautiful-river-snow-covered-mountains-landscape-kashmir-state-india_1232-4324.jpg?size=626&ext=jpg&ga=GA1.2.540788866.1652378093"
                />
              }
            >
              <h3>Gurez and Lolab With Bangus Tour</h3>
              <p>No of Days: 9 | People: 4</p>
              <p>₹20,700</p>
              <Button>
                <Link
                  icon="home"
                  href="./PackageCollection/GurezandLolabWithBangusTour"
                >
                  More Details
                </Link>
              </Button>
            </Card>
          </Col>
          <Col xs={24} sm={24} xl={6} xxl={6} className="section1Card">
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
        </Row>
        <Row className="section1CardRow">
          <Col xs={24} sm={24} xl={8} xxl={8} className="section1Card">
            <Card
              className="HotelCardsinner"
              style={{ width: 450 }}
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
        </Row>
      </div>
    </div>
  );
}

export default Section1;
