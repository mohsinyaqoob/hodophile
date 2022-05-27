import React from "react";
import { Row, Col, Button } from "antd";
import { Carousel } from "react-responsive-carousel";
import FooterBottom from "../../component/Footer";

function LuxuryHoneymoonPackage() {
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
            <h1>Luxury Honeymoon Package</h1>
            <p>Plan a Romantic Honeymoon Holiday !!!!</p>
            <Button className="redbuttons">7 Days</Button>
            <Button className="redbuttons">6 Night</Button>
            <p>Per Person @ ₹ 83,500/-</p>
            <Button
              className="redbuttons"
              href=" https://api.whatsapp.com/send/?phone=917889319814&text&app_absent=0"
              target="_blank"
            >
              Send Inquiry on Whatsapp
            </Button>
            <h2>About Tour Package</h2>
            <p>
              The beautiful valleys like Srinagar, Gulmarg, Pahalgam make the
              Kashmir tour.
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
                src="https://images.pexels.com/photos/8337433/pexels-photo-8337433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <img
                alt="example"
                src="https://images.pexels.com/photos/7965284/pexels-photo-7965284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <img
                alt="example"
                src="https://images.pexels.com/photos/6738359/pexels-photo-6738359.jpeg?auto=compress&cs=tinysrgb&w=600"
              />

              <img
                alt="example"
                src="https://images.pexels.com/photos/12173038/pexels-photo-12173038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
              Hotel, visit Mughal Gardens back to Houseboat then One-hour
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
            <Button className="redbuttons">Dinner</Button>
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
            <h2>Pahalgam Stay</h2>
            <p>
              After breakfast drive to Pahalgam (valley of shepherds). The
              distance of about 100 km will be covered in about 3 hrs. En route
              visiting Saffron fields, Awantipora ruins (1100 yrs old temple of
              Lord Vishnu built by King Awantiverma), see the beautiful
              countryside on the way and lot of rice fields. Drive through pine
              forests. Reach Pahalgam Check in Hotel Then explore Betab Valley
              Chandanwari and Aru valley Dinner and overnight stay in Hotel
            </p>
            <Button className="redbuttons">Breakfast</Button>
            <Button className="redbuttons">Dinner</Button>
            <Button className="redbuttons">Private Cab</Button>
          </Col>
          <Col xs={24} sm={24} xl={7} xxl={7} className="PackageDays">
            <h1>Day 5</h1>
            <h2>In Pahalgam</h2>
            <p>
              After breakfast in Hotel Then explore Chandanwari and Aru valley
              Or you can go to Baisaran Valley via horse/pony at your own cost.
              Dinner and overnight stay in Hotel
            </p>
            <Button className="redbuttons">Breakfast</Button>
            <Button className="redbuttons">Private Cab</Button>
          </Col>
          <Col xs={24} sm={24} xl={7} xxl={7} className="PackageDays">
            <h1>Day 6</h1>
            <h2>Srinagar</h2>
            <p>
              After breakfast in Hotel visit nearby places at own then drive to
              Srinagar on way you can purchase Dry fruits and other items then
              reach Srinagar check-in Hotel Dinner and overnight stay in Hotel
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
            <h1>Day 7</h1>
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

export default LuxuryHoneymoonPackage;
