import React from "react";
import { Row, Col, Card, Button } from "antd";
import Link from "next/link";
const { Meta } = Card;

function Section1() {
  return (
    <div>
      <Row>
        <Col className="GallerySection1Col" xs={24} sm={24} xl={12} xxl={12}>
          <h1>Hotels</h1>
          <p>
            The best destination of pictures Kashmir, Kashmir photoshoot
            locations for travelers. The best destination of pictures Kashmir,
            Kashmir photoshoot locations for travelers. The best destination of
            pictures Kashmir, Kashmir photoshoot locations for travelers
          </p>
        </Col>
      </Row>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Row className="HotelsSectionImages">
          <Col>
            <Row className="HotelCards">
              <Col>
                <Card
                  className="HotelCardsinner"
                  style={{ width: 300 }}
                  cover={
                    <img
                      height="350px"
                      alt="example"
                      src="https://lh5.googleusercontent.com/p/AF1QipP8nprH8-5cfj_W0klaP4dO-viRL6NQr7MKKLsY=w408-h306-k-no"
                    />
                  }
                >
                  <h3>Mystique Meadows Earth Homes</h3>
                  <p>1 Night Stay for 2 Adults</p>
                  <p>₹ 7,000</p>

                  <Button>
                    <Link
                      icon="home"
                      href="./HotelCollection/MystiqueMeadowsEarthHomes"
                    >
                      More Details
                    </Link>
                  </Button>
                </Card>
              </Col>
            </Row>
            <Row className="HotelCards">
              <Col>
                <Card
                  className="HotelCardsinner"
                  style={{ width: 300 }}
                  cover={
                    <img
                      height="350px"
                      alt="example"
                      src="http://kashmirtravelport.com/images/hotel/hotel-46426.jpeg"
                    />
                  }
                >
                  <h3>Vivanta Taj Srinagar</h3>
                  <p>1 Night Stay for 2 Adults</p>
                  <p>₹ 17,500</p>

                  <Button>
                    <Link
                      icon="home"
                      href="./HotelCollection/VivantaTajSrinagar"
                    >
                      More Details
                    </Link>
                  </Button>
                </Card>
              </Col>
            </Row>
            <Row className="HotelCards">
              <Col>
                <Card
                  className="HotelCardsinner"
                  style={{ width: 300 }}
                  cover={
                    <img
                      height="350px"
                      alt="example"
                      src="http://kashmirtravelport.com/images/hotel/hotel-3315.jpg"
                    />
                  }
                >
                  <h3>Morning Star Houseboat</h3>
                  <p>1 Night Stay for 2 Adults</p>
                  <p>₹ 3,000</p>

                  <Button>
                    <Link
                      icon="home"
                      href="./HotelCollection/MorningStarHouseboat"
                    >
                      More Details
                    </Link>
                  </Button>
                </Card>
              </Col>
            </Row>
            <Row className="HotelCards">
              <Col>
                <Card
                  className="HotelCardsinner"
                  style={{ width: 300 }}
                  cover={
                    <img
                      height="350px"
                      alt="example"
                      src="http://kashmirtravelport.com/images/hotel/hotel-0846.jpg"
                    />
                  }
                >
                  <h3>Hotel Grand Himalay</h3>
                  <p>1 Night Stay for 2 Adults</p>
                  <p>₹ 8,000</p>

                  <Button>
                    <Link
                      icon="home"
                      href="./HotelCollection/HotelGrandHimalay"
                    >
                      More Details
                    </Link>
                  </Button>
                </Card>
              </Col>
            </Row>
            <Row className="HotelCards">
              <Col>
                <Card
                  className="HotelCardsinner"
                  style={{ width: 300 }}
                  cover={
                    <img
                      height="350px"
                      alt="example"
                      src="http://kashmirtravelport.com/images/hotel/hotel-1128.jpg"
                    />
                  }
                >
                  <h3>Hotel Zojila Residency</h3>
                  <p>1 Night Stay for 2 Adults</p>
                  <p>₹ 4,200</p>

                  <Button>
                    <Link
                      icon="home"
                      href="./HotelCollection/HotelZojilaResidency"
                    >
                      More Details
                    </Link>
                  </Button>
                </Card>
              </Col>
            </Row>
            <Row className="HotelCards">
              <Col>
                <Card
                  className="HotelCardsinner"
                  style={{ width: 300 }}
                  cover={
                    <img
                      height="350px"
                      alt="example"
                      src="https://lh5.googleusercontent.com/proxy/c2siqYyFHsF1qjTtwhfjoUEuldTo18qvECc26nTG23WMuTMWNuqDV9D-3rwDSpG-NPmKehFoIC6lmjgywiGuHARFLc826D5Hsl3zfCrKlpwvbi9MI26XgKTBYzXfI_-XGXntGpxNrDkJd8Zq8Wx5EpQVYMe-2Y8=w408-h272-k-no"
                    />
                  }
                >
                  <h3>Hotel Luxury Heritage</h3>
                  <p>1 Night Stay for 2 Adults</p>
                  <p>₹ 3,200</p>

                  <Button>
                    <Link
                      icon="home"
                      href="./HotelCollection/HotelLuxuryHeritage"
                    >
                      More Details
                    </Link>
                  </Button>
                </Card>
              </Col>
            </Row>
          </Col>

          <Col>
            <Row className="HotelCards">
              <Col>
                <Card
                  className="HotelCardsinner"
                  style={{ width: 300 }}
                  cover={
                    <img
                      height="350px"
                      alt="example"
                      src="http://kashmirtravelport.com/images/hotel/hotel-0137.jpeg"
                    />
                  }
                >
                  <h3>Hotel Ahmad Resorts</h3>
                  <p>1 Night Stay for 2 Adults</p>
                  <p>₹ 4,900</p>

                  <Button>
                    <Link
                      icon="home"
                      href="./HotelCollection/HotelAhmadResorts"
                    >
                      More Details
                    </Link>
                  </Button>
                </Card>
              </Col>
            </Row>
            <Row className="HotelCards">
              <Col>
                <Card
                  style={{
                    width: 300,
                    height: 1670,
                    textAlign: "center",
                    paddingTop: "100%",
                  }}
                >
                  <div
                    style={{
                      fontSize: "36px",
                    }}
                  >
                    <h1 className="redText">Hotel Bucket List</h1>
                    <p>Amazing places you would like to stay</p>
                  </div>
                </Card>
              </Col>
            </Row>
            <Row className="HotelCards">
              <Col>
                <Card
                  className="HotelCardsinner"
                  style={{ width: 300 }}
                  cover={
                    <img
                      height="350px"
                      alt="example"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV8o8HlZZGstk5LvHLHAqaR3xk1C4ZqaxRmQ&usqp=CAU"
                    />
                  }
                >
                  <h3>Kolahoi Green Heights Gulmarg</h3>
                  <p>1 Night Stay for 2 Adults</p>
                  <p>₹ 12,500</p>

                  <Button>
                    <Link
                      icon="home"
                      href="./HotelCollection/KolahoiGreenHeightsGulmarg"
                    >
                      More Details
                    </Link>
                  </Button>
                </Card>
              </Col>
            </Row>
            <Row className="HotelCards">
              <Col>
                <Card
                  className="HotelCardsinner"
                  style={{ width: 300 }}
                  cover={
                    <img
                      height="350px"
                      alt="example"
                      src="https://lh5.googleusercontent.com/p/AF1QipOKBGYpWGSmFE7_CwBvRSbQud8IG-K8U_nsEQbB=w408-h257-k-no"
                    />
                  }
                >
                  <h3>Hotel Solar Residency</h3>
                  <p>1 Night Stay for 2 Adults</p>
                  <p>₹ 6,500</p>

                  <Button>
                    <Link
                      icon="home"
                      href="./HotelCollection/HotelSolarResidency"
                    >
                      More Details
                    </Link>
                  </Button>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row className="HotelCards">
              <Col>
                <Card
                  className="HotelCardsinner"
                  style={{ width: 300 }}
                  cover={
                    <img
                      height="350px"
                      alt="example"
                      src="https://lh5.googleusercontent.com/p/AF1QipPJp_V8OzSGWcQqhZBgyxCTzjbLMS6kSS8PQmbd=w408-h271-k-no"
                    />
                  }
                >
                  <h3>Hotel Grand Dragon Ladakh</h3>
                  <p>1 Night Stay for 2 Adults</p>
                  <p>₹ 6,500</p>

                  <Button>
                    <Link
                      icon="home"
                      href="./HotelCollection/HotelGrandDragonLadakh"
                    >
                      More Details
                    </Link>
                  </Button>
                </Card>
              </Col>
            </Row>
            <Row className="HotelCards">
              <Col>
                <Card
                  className="HotelCardsinner"
                  style={{ width: 300 }}
                  cover={
                    <img
                      height="350px"
                      alt="example"
                      src="https://lh5.googleusercontent.com/p/AF1QipPU3Hl_-zrot_yAKAlnwyqy3sABEt8Slz3W6-uZ=w408-h272-k-no"
                    />
                  }
                >
                  <h3>New Jacqueline Houseboat</h3>
                  <p>1 Night Stay for 2 Adults</p>
                  <p>₹ 6,100</p>

                  <Button>
                    <Link
                      icon="home"
                      href="./HotelCollection/NewJacquelineHouseboat"
                    >
                      More Details
                    </Link>
                  </Button>
                </Card>
              </Col>
            </Row>
            <Row className="HotelCards">
              <Col>
                <Card
                  className="HotelCardsinner"
                  style={{ width: 300 }}
                  cover={
                    <img
                      height="350px"
                      alt="example"
                      src="https://lh5.googleusercontent.com/p/AF1QipPd7C0vrSwOPwwu3RqG_yPtmz2BT3V21ILrXG7V=w408-h272-k-no"
                    />
                  }
                >
                  <h3>Hotel Snow Land Sonmarg</h3>
                  <p>1 Night Stay for 2 Adults</p>
                  <p>₹ 9,300</p>

                  <Button>
                    <Link
                      icon="home"
                      href="./HotelCollection/HotelSnowLandSonmarg"
                    >
                      More Details
                    </Link>
                  </Button>
                </Card>
              </Col>
            </Row>
            <Row className="HotelCards">
              <Col>
                <Card
                  className="HotelCardsinner"
                  style={{ width: 300 }}
                  cover={
                    <img
                      height="350px"
                      alt="example"
                      src="https://lh6.googleusercontent.com/proxy/PgHSwfc4qHnC3kLgmseUm5xjLmxFNdVLHdehcKqjk15UDRJ0WGxNGdmjCizPoxaKDq5nTFv0kqwOfPUYt-VMmW4ESO3Gt65kpCtpeyLmYS69OvHFN7nRsvKG5ftd066TqZHFMJUdOaK0EfJVqqVEJAWh8332fA=w408-h277-k-no"
                    />
                  }
                >
                  <h3>Hotel Wildflower Villa Resort, Pahalgam</h3>
                  <p>1 Night Stay for 2 Adults</p>
                  <p>₹ 5,500</p>

                  <Button>
                    <Link
                      icon="home"
                      href="./HotelCollection/HotelWildflowerVillaResortPahalgam"
                    >
                      More Details
                    </Link>
                  </Button>
                </Card>
              </Col>
            </Row>
            <Row className="HotelCards">
              <Col>
                <Card
                  className="HotelCardsinner"
                  style={{ width: 300 }}
                  cover={
                    <img
                      height="350px"
                      alt="example"
                      src="https://lh5.googleusercontent.com/p/AF1QipMHezqmLkJRZQLEcuopGethto-GjoPKkSEbDcMW=w408-h271-k-no"
                    />
                  }
                >
                  <h3>The Khyber Himalayan Resort & Spa</h3>
                  <p>1 Night Stay for 2 Adults</p>
                  <p>₹ 28,000</p>

                  <Button>
                    <Link
                      icon="home"
                      href="./HotelCollection/TheKhyberHimalayanResortandSpa"
                    >
                      More Details
                    </Link>
                  </Button>
                </Card>
              </Col>
            </Row>
            <Row className="HotelCards">
              <Col>
                <Card
                  className="HotelCardsinner"
                  style={{ width: 300 }}
                  cover={
                    <img
                      height="350px"
                      alt="example"
                      src="http://kashmirtravelport.com/images/hotel/hotel-5247.jpg"
                    />
                  }
                >
                  <h3>Hotel Encco Resort</h3>
                  <p>1 Night Stay for 2 Adults</p>
                  <p>₹ 28,000</p>

                  <Button>
                    <Link icon="home" href="./HotelCollection/HotelEnccoResort">
                      More Details
                    </Link>
                  </Button>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Section1;
