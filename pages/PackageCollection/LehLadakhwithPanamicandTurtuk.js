import React from "react";
import { Row, Col, Button } from "antd";
import { Carousel } from "react-responsive-carousel";
import FooterBottom from "../../component/Footer";

function LehLadakhwithPanamicandTurtuk() {
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
            <h1>Leh Ladakh with Panamic and Turtuk</h1>
            <p>Ladakh Family Holiday Package</p>
            <Button className="redbuttons">9 Days</Button>
            <Button className="redbuttons">8 Night</Button>
            <p>Per Person @ ₹ 17,800/-</p>
            <Button
              className="redbuttons"
              href=" https://api.whatsapp.com/send/?phone=917889319814&text&app_absent=0"
              target="_blank"
            >
              Send Inquiry on Whatsapp
            </Button>
            <h2>About Tour Package</h2>
            <p>
              Leh Ladakh with Panamic & Turtuk 8 Nights and 9 Days holiday plan,
              after reaching Leh, then you will visit Local sightseeing of
              Ladakh Sham side and visit famous places like a magnetic hill,
              Pather sahib gurdwara, leh hall of fame, then next day visit Nubra
              Valley, Panamic, and Turtuk which is the last village of India,
              and then you will see Pangong Lake, 3 idiot school.
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
              Arrival Leh in the morning and transfer to the hotel. Acclimatize
              yourself with the weather and high pressure of Ladakh (3500
              mtrs).. Evening visit Leh market & Leh Palace, Overnight in hotel.
            </p>
            <Button className="redbuttons">Dinner</Button>
            <Button className="redbuttons">Welcome Drink</Button>
            <Button className="redbuttons">Private Cab</Button>
            <Button className="redbuttons">Inner Permit</Button>
          </Col>
          <Col xs={24} sm={24} xl={7} xxl={7} className="PackageDays">
            <h1>Day 2</h1>
            <h2>Leh- Local Sightseeing</h2>
            <p>
              After breakfast visit in hotel drive and Visit Lamayuru Monastery,
              Gurudwara Pathar Sahib, Magnetic Point and Sangam (confluence of
              Indus & Zanskar rivers). Overnight in hotel.
            </p>
            <Button className="redbuttons">Breakfast</Button>
            <Button className="redbuttons">Dinner</Button>
            <Button className="redbuttons">Private Cab</Button>
            <Button className="redbuttons">Inner Permit</Button>
          </Col>
          <Col xs={24} sm={24} xl={7} xxl={7} className="PackageDays">
            <h1>Day 3</h1>
            <h2>Leh - Nubra</h2>
            <p>
              After breakfast leave for Nubra Valley, driving across Khardung-la
              (alt: 18,380 ft). Explore Deskit and Visit Deskit Monastery,
              Hunder and the Sand Dunes where you can enjoy a short camel safari
              using the double-humped Bactrian camel found here (optional on
              direct payment). Camp overnight stay in a camp
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
            <h2>Nubra Panamic Nubra</h2>
            <p>
              After breakfast in camp drive and visit Samoor Panamic hot spring
              and drive back to Hunder overnight stay in Camp
            </p>
            <Button className="redbuttons">Breakfast</Button>
            <Button className="redbuttons">Dinner</Button>
            <Button className="redbuttons">Private Cab</Button>
            <Button className="redbuttons">Inner Permit</Button>
          </Col>
          <Col xs={24} sm={24} xl={7} xxl={7} className="PackageDays">
            <h1>Day 5</h1>
            <h2>Nubra Turtuk Thang Nubra</h2>
            <p>
              After breakfast in Camp drive to Turtuk and visit Zero Point Thang
              last village of India then drive back to Hunder Nubra stay in Camp
            </p>
            <Button className="redbuttons">Breakfast</Button>
            <Button className="redbuttons">Dinner</Button>
            <Button className="redbuttons">Private Cab</Button>
            <Button className="redbuttons">Inner Permit</Button>
          </Col>
          <Col xs={24} sm={24} xl={7} xxl={7} className="PackageDays">
            <h1>Day 6</h1>
            <h2>Nubra –Pangong Lake</h2>
            <p>
              Early departure for Pangong Lake via Shoyok check-in at fixed
              tented camp near the lake at Spangmik Dinner and overnight stay.
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
            <h1>Day 7</h1>
            <h2>Pangong Leh</h2>
            <p>
              After breakfast, leave Pangong and retrace the Leh route across
              Chang-la. Upon reaching Karu, drive across the Indus and visit the
              famous 3 Idiot School . Check in Hotel Overnight in hotel.
            </p>
            <Button className="redbuttons">Breakfast</Button>
            <Button className="redbuttons">Private Cab</Button>
            <Button className="redbuttons">Dinner</Button>
          </Col>
          <Col xs={24} sm={24} xl={7} xxl={7} className="PackageDays">
            <h1>Day 8</h1>
            <h2>Leh</h2>
            <p>
              This day is free for leisure and personal activites, you can go
              for shopping this day. Overnight stay at Leh
            </p>
            <Button className="redbuttons">Breakfast</Button>
            <Button className="redbuttons">Dinner</Button>
          </Col>
          <Col xs={24} sm={24} xl={7} xxl={7} className="PackageDays">
            <h1>Day 9</h1>
            <h2>Leh Airport</h2>
            <p>After breakfast drive to Leh Airport & drop at Airport</p>
            <Button className="redbuttons">Breakfast</Button>
            <Button className="redbuttons">Private Cab</Button>
          </Col>
        </Row>
      </div>
      <FooterBottom />
    </div>
  );
}

export default LehLadakhwithPanamicandTurtuk;
