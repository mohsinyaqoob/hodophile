import React from "react";
import { Row, Col, Button } from "antd";
import { Carousel } from "react-responsive-carousel";
import FooterBottom from "../../component/Footer";

function KashmirWinterWonderland() {
  return (
    <div>
      <h1>Package</h1>
      <div>
        <Row>
          <Col className="GallerySection1Col" xs={24} sm={24} xl={12} xxl={12}>
            <h1>Packages Details</h1>
            <p>
              Just the right place to halt and relax. A charming complex which
              promises a comfortable stay and an experience to remember.
            </p>
          </Col>
        </Row>
        <Row className="HotelDetailCard">
          <Col xs={24} sm={24} xl={12} xxl={12}>
            <h1>Kashmir Winter Wonderland</h1>
            <p>Gurz Bungus Tour Package</p>
            <Button className="redbuttons">6 Days</Button>
            <Button className="redbuttons">5 Night</Button>
            <p>Per Person @ ₹10,400/-</p>
            <Button
              className="redbuttons"
              href=" https://api.whatsapp.com/send/?phone=917889319814&text&app_absent=0"
              target="_blank"
            >
              Send Inquiry on Whatsapp
            </Button>
            <h2>About Tour Package</h2>
            <p>
              5 nights and 6 days package tour takes you to some of the
              most-visited destinations of Kashmir including Srinagar, Pahalgam,
              Gulmarg Your journey to Srinagar would be incomplete without the
              wonderful Shikara boat ride on Dal Lake and visits to the
              beautiful Mughal Gardens...
            </p>
          </Col>
          <Col
            xs={24}
            sm={24}
            xl={15}
            xxl={15}
            className="homeSection4Carousel "
          >
            <Carousel xs={24} sm={24} xl={16} xxl={16}>
              <img
                alt="example"
                src="https://img.freepik.com/free-photo/aerial-view-landscape-with-himalaya-range-mountains-from-airbus-flying-from-new-delhi-go-kushok-bakula-rimpochee-airport-leh-ladakh-village-jammu-kashmir-india_258052-1306.jpg?size=626&ext=jpg&ga=GA1.2.540788866.1652378093"
              />
              <img
                alt="example"
                src="https://img.freepik.com/free-photo/cable-car-snow-mountain-gulmark-kashmir-india_1232-4784.jpg?size=626&ext=jpg&ga=GA1.2.540788866.1652378093"
              />
              <img
                alt="example"
                src="https://img.freepik.com/free-photo/beautiful-snow-covered-mountains-landscape-kashmir-state-india_1232-4791.jpg?size=626&ext=jpg&ga=GA1.2.540788866.1652378093"
              />

              <img
                alt="example"
                src="https://img.freepik.com/free-photo/sunrise-dal-lake-kashmir-india_1232-4765.jpg?size=626&ext=jpg&ga=GA1.2.540788866.1652378093"
              />
              <img
                alt="example"
                src="https://img.freepik.com/free-photo/himalayas-mountain-range-india-take-shoot-from-plane_43525-54.jpg?size=626&ext=jpg&ga=GA1.2.540788866.1652378093"
              />
            </Carousel>
          </Col>
        </Row>
        <div style={{ width: "90%" }}></div>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Col xs={24} sm={24} xl={7} xxl={7} className="PackageDays">
            <h1>Day 1</h1>
            <h2>Arrival Srinagar Local sightseeing</h2>
            <p>
              Arrive at Srinagar Airport and the to Srinagar and drive check in
              Houseboat, visit Mughal Gardens back to Houseboat then One-hour
              Shikara ride in Lake Dinner and overnight stay in Houseboat.
            </p>
            <Button className="redbuttons">Dinner</Button>
            <Button className="redbuttons">Welcome Drink</Button>
            <Button className="redbuttons">Private Cab</Button>
            <Button className="redbuttons">Airport Pickup</Button>
          </Col>
          <Col xs={24} sm={24} xl={7} xxl={7} className="PackageDays">
            <h1>Day 2</h1>
            <h2>Gulmarg Stay</h2>
            <p>
              After breakfast in Hotel, drive to Gulmarg via Tangmarg other
              Items reach Gulmarg, and then adventure activities visit Gondola
              Cable car Stay in a hotel.
            </p>
            <Button className="redbuttons">Breakfast</Button>
            <Button className="redbuttons">Dinner</Button>
            <Button className="redbuttons">Private Cab</Button>
          </Col>
          <Col xs={24} sm={24} xl={7} xxl={7} className="PackageDays">
            <h1>Day 3</h1>
            <h2>Gulmarg Stay</h2>
            <p>
              After breakfast in the hotel, Explore Gulmarg enjoy Skiing,
              activates Dinner and overnight stay in Hotel
            </p>
            <Button className="redbuttons">Breakfast</Button>
            <Button className="redbuttons">Dinner</Button>
          </Col>
        </Row>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Col xs={24} sm={24} xl={7} xxl={7} className="PackageDays">
            <h1>Day 4</h1>
            <h2>Pahalgam Stay</h2>
            <p>
              After breakfast drive to Pahalgam (valley of shepherds). The
              distance of about 100 km will be covered in about 3 hrs. En route
              visiting Saffron fields, see the beautiful countryside on the way
              and lot of rice fields. Drive through pine forests. Reach Pahalgam
              Check in Hotel Then explore Betab Valley Chandanwari and Aru
              valley Dinner and overnight stay in Hotel
            </p>
            <Button className="redbuttons">Breakfast</Button>
            <Button className="redbuttons">Dinner</Button>
          </Col>
          <Col xs={24} sm={24} xl={7} xxl={7} className="PackageDays">
            <h1>Day 5</h1>
            <h2>Srinagar Stay</h2>
            <p>
              After breakfast in the Hotel visit nearby places at own then drive
              to Srinagar on the way you can purchase Dry fruits and other items
              then reach Srinagar check-in Hotel Dinner and overnight stay in
              Hotel
            </p>
            <Button className="redbuttons">Breakfast</Button>
            <Button className="redbuttons">Dinner</Button>
            <Button className="redbuttons">Private Cab</Button>
          </Col>
          <Col xs={24} sm={24} xl={7} xxl={7} className="PackageDays">
            <h1>Day 6</h1>
            <h2>Airport drop</h2>
            <p>
              After breakfast in Hotel then drive to Srinagar Airport flight
              back home.
            </p>
            <Button className="redbuttons">Breakfast</Button>
            <Button className="redbuttons">Private Cab</Button>
          </Col>
        </Row>
      </div>
      <FooterBottom />
    </div>
  );
}

export default KashmirWinterWonderland;
