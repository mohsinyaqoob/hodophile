import React from "react";
import { Row, Col, Button } from "antd";
import { Carousel } from "react-responsive-carousel";
import FooterBottom from "../../component/Footer";

function AmazingTourPackage() {
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
            <h1>Amazing Tour Package</h1>
            <p>Jannat E Kashmir</p>
            <Button className="redbuttons">6 Days</Button>
            <Button className="redbuttons">5 Night</Button>
            <p>Per Person @ ₹ 22,000/-</p>
            <Button
              className="redbuttons"
              href=" https://api.whatsapp.com/send/?phone=917889319814&text&app_absent=0"
              target="_blank"
            >
              Send Inquiry on Whatsapp
            </Button>
            <h2>About Tour Package</h2>
            <p>Visit Your Dream Destination At Best Price !!!!</p>
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
              Arrival at Srinagar Airport and the to Srinagar and drive check in
              Houseboat, visit Mughal Gardens then One-hour Shikara ride in Lake
              Dinner and overnight stay in Houseboat
            </p>
            <Button className="redbuttons">Dinner</Button>
            <Button className="redbuttons">Welcome Drink</Button>
            <Button className="redbuttons">Private Cab</Button>
            <Button className="redbuttons">Airport Pickup</Button>
          </Col>
          <Col xs={24} sm={24} xl={7} xxl={7} className="PackageDays">
            <h1>Day 2</h1>
            <h2>Pahalgam</h2>
            <p>
              After breakfast drive to Pahalgam (valley of shepherds). The
              distance of about 100 km will be covered in about 3 hrs. En route
              visiting Saffron fields, Awantipora ruins (1100 yrs old temple of
              Lord Vishnu built by King Awantiverma), see the beautiful
              countryside on the way and lot of rice fields. Drive through pine
              forests. , visit Then explore Betab Valley Chandanwari and Aru
              valley overnight stay in a hotel
            </p>
            <Button className="redbuttons">Dinner</Button>
            <Button className="redbuttons">Breakfast</Button>
            <Button className="redbuttons">Private Cab</Button>
          </Col>
          <Col xs={24} sm={24} xl={7} xxl={7} className="PackageDays">
            <h1>Day 3</h1>
            <h2>Gulmarg Stay</h2>
            <p>
              After breakfast in Hotel, drive to Gulmarg via Tangmarg reach
              Gulmarg explore Cable Car (Gondola) ride in Gulmarg at own cost
              then, check-in hotel Dinner and overnight stay in Hotel.
            </p>
            <Button className="redbuttons">Breakfast</Button>
            <Button className="redbuttons">Dinner</Button>
            <Button className="redbuttons">Private Cab</Button>
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
            <h2>Srinagar</h2>
            <p>
              After breakfast in Hotel, drive back to Srinagar on your way you
              can purchase dry fruits and cricket bats and reach Srinagar
              check-in Hotel rest time free at leisure
            </p>
            <Button className="redbuttons">Breakfast</Button>
            <Button className="redbuttons">Dinner</Button>
            <Button className="redbuttons">Private Cab</Button>
          </Col>
          <Col xs={24} sm={24} xl={7} xxl={7} className="PackageDays">
            <h1>Day 5</h1>
            <h2>Dhoodhpathre</h2>
            <p>
              Full-day excursion to Doodhpathri.The place is just 50 km away
              from Srinagar, it's a beautiful place with carpet-like meadows and
              A flowing river resounds with the soft wind passing through the
              pine trees of the enclosures of the valley. It is also called a
              VALLEY OF MILK because it produces rich milk in a large quantity
              It is said that the cattle grazing in the meadows of Doodpathri,
              produces rich milk in large quantity, this reason it is called the
              valley of milk Doodhpathri. Return to Srinagar for overnight stay
              at Hotel.
            </p>
            <Button className="redbuttons">Breakfast</Button>
            <Button className="redbuttons">Dinner</Button>

            <Button className="redbuttons">Private Cab</Button>
          </Col>
          <Col xs={24} sm={24} xl={7} xxl={7} className="PackageDays">
            <h1>Day 6</h1>
            <h2>Airport drop</h2>
            <p>
              After breakfast leave for Srinagar on the way you can visit Kargil
              After breakfast in Hotel then drive to Srinagar Airport flight
              back to home
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

export default AmazingTourPackage;
