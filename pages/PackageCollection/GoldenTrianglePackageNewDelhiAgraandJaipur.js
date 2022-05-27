import React from "react";
import { Row, Col, Button } from "antd";
import { Carousel } from "react-responsive-carousel";
import FooterBottom from "../../component/Footer";

function ChandigarhManaliwithLehLadakhandKashmir() {
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
            <h1>Golden Triangle Package : New Delhi, Agra & Jaipur</h1>
            <p>
              Golden Triangle tour itinerary packages to enjoy places which
              include visiting Qutab Minar, Fatehpur Sikri, Amber Fort and Hawa
              Mahal
            </p>
            <Button className="redbuttons">7 Days</Button>
            <Button className="redbuttons">6 Night</Button>
            <p>Per Person @ ₹ 21,300/-</p>
            <Button
              className="redbuttons"
              href=" https://api.whatsapp.com/send/?phone=917889319814&text&app_absent=0"
              target="_blank"
            >
              Send Inquiry on Whatsapp
            </Button>
            <h2>About Tour Package</h2>
            <p>
              The tour starts from Delhi, continues in Agra and Jaipur, and then
              ends at Delhi.
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
                src="https://img.freepik.com/free-photo/magnetic-hill-mountain-blue-sky-road-way-leh-ladakh-india_1150-11111.jpg?size=626&ext=jpg&ga=GA1.2.540788866.1652378093"
              />
              <img
                alt="example"
                src="https://img.freepik.com/free-photo/leh-ladak-flag-faith-mountain_1150-11110.jpg?size=626&ext=jpg&ga=GA1.2.540788866.1652378093"
              />
              <img
                alt="example"
                src="https://images.pexels.com/photos/574313/pexels-photo-574313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />

              <img
                alt="example"
                src="https://images.pexels.com/photos/5205097/pexels-photo-5205097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <img
                alt="example"
                src="https://img.freepik.com/free-photo/view-landscape-namgyal-tsemo-gompa-leh-ladakh-india_45041-91.jpg?size=626&ext=jpg&ga=GA1.2.540788866.1652378093"
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
            <h2> </h2>
            <p></p>
            <Button className="redbuttons">Dinner</Button>
            <Button className="redbuttons">Welcome Drink</Button>
            <Button className="redbuttons">Private Cab</Button>
            <Button className="redbuttons">Airport PickUp</Button>
          </Col>
          <Col xs={24} sm={24} xl={7} xxl={7} className="PackageDays">
            <h1>Day 2</h1>
            <h2></h2>
            <p></p>
            <Button className="redbuttons">Breakfast</Button>
            <Button className="redbuttons">Dinner</Button>
            <Button className="redbuttons">Private Cab</Button>
          </Col>
          <Col xs={24} sm={24} xl={7} xxl={7} className="PackageDays">
            <h1>Day 3</h1>
            <h2></h2>
            <p></p>
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
            <h2></h2>
            <p></p>
            <Button className="redbuttons">Breakfast</Button>
            <Button className="redbuttons">Dinner</Button>
            <Button className="redbuttons">Private Cab</Button>
          </Col>
          <Col xs={24} sm={24} xl={7} xxl={7} className="PackageDays">
            <h1>Day 5</h1>
            <h2></h2>
            <p></p>
            <Button className="redbuttons">Breakfast</Button>
            <Button className="redbuttons">Dinner</Button>
            <Button className="redbuttons">Private Cab</Button>
            <Button className="redbuttons">Inner Permit</Button>
          </Col>
          <Col xs={24} sm={24} xl={7} xxl={7} className="PackageDays">
            <h1>Day 6</h1>
            <h2></h2>
            <p></p>
            <Button className="redbuttons">Breakfast</Button>
            <Button className="redbuttons">Dinner</Button>
            <Button className="redbuttons">Private Cab</Button>
            <Button className="redbuttons">Inner Permit</Button>
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
            <h2></h2>
            <p></p>
            <Button className="redbuttons">Breakfast</Button>
            <Button className="redbuttons">Private Cab</Button>
            <Button className="redbuttons">Dinner</Button>
            <Button className="redbuttons">Inner Permit</Button>
          </Col>
        </Row>
      </div>
      <FooterBottom />
    </div>
  );
}

export default ChandigarhManaliwithLehLadakhandKashmir;
