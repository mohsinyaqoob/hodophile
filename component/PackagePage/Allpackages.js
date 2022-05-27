import React from "react";
import { Row, Col, Card, Button } from "antd";
import Link from "next/link";
function AllPackages() {
  return (
    <div>
      <Row>
        <Col className="GallerySection1Col" xs={24} sm={24} xl={12} xxl={12}>
          <h1>Packages</h1>
          <p>
            HodophileKashmir provides number of packages for couples, family,
            friends and business. We provide you the best experience. Travellers
            can customize their packages according to their time availibility,
            budget and Number of people.
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
          <Col>
            <Row className="HotelCards">
              <Col>
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
            </Row>
            <Row className="HotelCards">
              <Col>
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
            </Row>
            <Row className="HotelCards">
              <Col>
                <Card
                  className="HotelCardsinner"
                  style={{ width: 350 }}
                  cover={
                    <img
                      height="350px"
                      alt="example"
                      src="https://img.freepik.com/free-photo/lord-shiva-deep-meditation-statue-lord-shiva-hindu-god-shankar-closeup-view_242245-154.jpg?size=626&ext=jpg&ga=GA1.2.540788866.1652378093"
                    />
                  }
                >
                  <h3>Amarnath Package</h3>
                  <p> No of Days: 3 | People: 3</p>
                  <p>₹19,400</p>
                  <Button>
                    <Link
                      icon="home"
                      href="./PackageCollection/AmarnathPackage"
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
                  style={{ width: 350 }}
                  cover={
                    <img
                      height="350px"
                      alt="example"
                      src="https://img.freepik.com/free-photo/beautiful-snow-covered-mountains-landscape-kashmir-state-india_1232-4819.jpg?size=626&ext=jpg&ga=GA1.2.540788866.1652378093"
                    />
                  }
                >
                  <h3>Katra Darshan</h3>
                  <p> No of Days: 4 | People: 4</p>
                  <p>₹6,759</p>
                  <Button>
                    <Link icon="home" href="./PackageCollection/KatraDarshan">
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
            </Row>
            <Row className="HotelCards">
              <Col>
                <Card
                  className="HotelCardsinner"
                  style={{ width: 350 }}
                  cover={
                    <img
                      height="350px"
                      alt="example"
                      src="https://images.pexels.com/photos/574313/pexels-photo-574313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                  }
                >
                  <h3>Amritsar & Katra Package</h3>
                  <p> No of Days: 5 | People: 6</p>
                  <p>₹4,777</p>
                  <Button>
                    <Link
                      icon="home"
                      href="./PackageCollection/AmritsarandKatraPackage"
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
            </Row>
            <Row className="HotelCards">
              <Col>
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
            <Row className="HotelCards">
              <Col>
                <Card
                  className="HotelCardsinner"
                  style={{ width: 350 }}
                  cover={
                    <img
                      height="350px"
                      alt="example"
                      src="https://images.pexels.com/photos/7113995/pexels-photo-7113995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                  }
                >
                  <h3>Luxury Honeymoon Package</h3>
                  <p> No of Days: 7 | People: 2</p>
                  <p>₹83,500</p>
                  <Button>
                    <Link
                      icon="home"
                      href="./PackageCollection/LuxuryHoneymoonPackage"
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
            </Row>
            <Row className="HotelCards">
              <Col>
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
            <Row className="HotelCards">
              <Col>
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
          </Col>
          <Col>
            <Row className="HotelCards">
              <Col>
                <Card
                  className="HotelCardsinner"
                  style={{ width: 350 }}
                  cover={
                    <img
                      height="350px"
                      alt="example"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKM1PO55OqazkKTIsaSOHCkHAEFvHEtHKYVA&usqp=CAU"
                    />
                  }
                >
                  <h3>Amazing Tour Package</h3>
                  <p> No of Days: 6 | People: 6</p>
                  <p>₹22,000</p>
                  <Button>
                    <Link
                      icon="home"
                      href="./PackageCollection/AmazingTourPackage"
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
            </Row>
            <Row className="HotelCards">
              <Col>
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
            <Row className="HotelCards">
              <Col>
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
            <Row className="HotelCards">
              <Col>
                <Card
                  className="HotelCardsinner"
                  style={{ width: 350 }}
                  cover={
                    <img
                      height="350px"
                      alt="example"
                      src="https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=600"
                    />
                  }
                >
                  <h3>Golden Triangle Package : New Delhi, Agra & Jaipur</h3>
                  <p> No of Days: 7 | People: 6</p>
                  <p>₹21,300</p>
                  <Button>
                    <Link
                      icon="home"
                      href="./PackageCollection/GoldenTrianglePackageNewDelhiAgraandJaipur"
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
                    <Link
                      icon="home"
                      href="./PackageCollection/GoawithDudhsagar"
                    >
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

export default AllPackages;
