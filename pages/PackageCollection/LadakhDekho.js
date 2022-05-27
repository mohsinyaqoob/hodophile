import React from "react";
import { Row, Col, Button } from "antd";
import { Carousel } from "react-responsive-carousel";
import FooterBottom from "../../component/Footer";

function LadakhDekho() {
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
            <h1>Ladakh Dekho</h1>
            <p>Leh Ladakh Holiday package with Nubra & Pangong</p>
            <Button className="redbuttons">5 Days</Button>
            <Button className="redbuttons">4 Night</Button>
            <p>Per Person @ ₹ 11,000/-</p>
            <Button
              className="redbuttons"
              href=" https://api.whatsapp.com/send/?phone=917889319814&text&app_absent=0"
              target="_blank"
            >
              Send Inquiry on Whatsapp
            </Button>
            <h2>About Tour Package</h2>
            <p>
              Ladakh Dekho holiday tour package in this holiday you will explore
              Leh city by visit Leh Hall of fame, Pather shaib Gurdwara,
              Magnetic Hill in Leh Ladakh which is very famous, and Zanskar
              River Sangam, then Nubra Valley Hunder Sand dunes and Pangong lake
              with Changla Pass
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
                src="https://img.freepik.com/free-photo/mountain-river-blue-sky-leh-ladakh-india_1150-11118.jpg?size=626&ext=jpg&ga=GA1.2.540788866.1652378093"
              />

              <img
                alt="example"
                src="https://img.freepik.com/free-photo/confluence-indus-zanskar-rivers-leh-ladakh-india_1150-11112.jpg?size=626&ext=jpg&ga=GA1.2.540788866.1652378093"
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
            <h2>Arrival Leh</h2>
            <p>
              Arrive Leh in the morning and transfer to the hotel. acclimatize
              yourself with the weather and high pressure of Ladakh (3500
              meters), Evening visit Leh Market, and Leh Palace Overnight in
              hotel.
            </p>

            <Button className="redbuttons">Welcome Drink</Button>
            <Button className="redbuttons">Private Cab</Button>
          </Col>
          <Col xs={24} sm={24} xl={7} xxl={7} className="PackageDays">
            <h1>Day 2</h1>
            <h2>Local sightseeing</h2>
            <p>
              After Breakfast Drive to - Hall of Fame - Magnetic Hills - Sangam
              (Confluence of Indus and Zanskar) - Thikse Monastery Leh and
              overnight stay in Leh hotel.
            </p>
            <Button className="redbuttons">Breakfast</Button>
            <Button className="redbuttons">Dinner</Button>
            <Button className="redbuttons">Private Cab</Button>
          </Col>
          <Col xs={24} sm={24} xl={7} xxl={7} className="PackageDays">
            <h1>Day 3</h1>
            <h2>Nubra</h2>
            <p>
              After breakfast leave for Nubra Valley, driving across Khardong-la
              (alt: 18,380 ft). After descending from the pass, drive on for
              sightseeing of the Sumoor area. Later check into a fixed camp in
              the same area or drive across to Deskit for an overnight stay in a
              camp.
            </p>
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
            <h1>Day 4</h1>
            <h2>Nubra Pangong Leh</h2>
            <p>
              After Breakfast Drive to Pangong lake, has gained a lot of
              popularity after the ending sequence of the Bollywood movie 3
              Idiots. Since then, the place has seen more travelers and tourists
              than ever.... and. Later drive on to Leh, en-route visiting the
              picturesque Thiksey monastery. Overnight in hotel.
            </p>
            <Button className="redbuttons">Breakfast</Button>
            <Button className="redbuttons">Dinner</Button>
            <Button className="redbuttons">Private Cab</Button>
            <Button className="redbuttons">Inner Permit</Button>
          </Col>
          <Col xs={24} sm={24} xl={7} xxl={7} className="PackageDays">
            <h1>Day 5</h1>
            <h2>Airport drop</h2>
            <p>After breakfast drive to Leh Airport With sweet memories.</p>
            <Button className="redbuttons">Breakfast</Button>
            <Button className="redbuttons">Private Cab</Button>
          </Col>
        </Row>
      </div>
      <FooterBottom />
    </div>
  );
}

export default LadakhDekho;
