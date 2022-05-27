import React from "react";
import { Row, Col, Button } from "antd";
import { Carousel } from "react-responsive-carousel";
import FooterBottom from "../../component/Footer";

function KashmirLehLadakhGroup() {
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
            <h1>Kashmir Leh Ladakh Group Tour</h1>
            <p>Kashmir, Leh Ladakh with Turtuk</p>
            <Button className="redbuttons">11 Days</Button>
            <Button className="redbuttons">10 Night</Button>
            <p>Per Person @ ₹ 23,600/-</p>
            <Button
              className="redbuttons"
              href=" https://api.whatsapp.com/send/?phone=917889319814&text&app_absent=0"
              target="_blank"
            >
              Send Inquiry on Whatsapp
            </Button>
            <h2>About Tour Package</h2>
            <p>
              In this package you can visit Kashmir and Leh Ladakh in your
              budget.
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
                src="https://images.pexels.com/photos/6650442/pexels-photo-6650442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <img
                alt="example"
                src="https://images.pexels.com/photos/6002462/pexels-photo-6002462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <img
                alt="example"
                src="https://images.pexels.com/photos/5204921/pexels-photo-5204921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />

              <img
                alt="example"
                src="https://images.pexels.com/photos/10999526/pexels-photo-10999526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <img
                alt="example"
                src="https://images.pexels.com/photos/5097161/pexels-photo-5097161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
            <h2>Arrival at Srinagar</h2>
            <p>
              Arrival at Srinagar Airport and the to Srinagar and drive check in
              Houseboat, visit Mughal Gardens Nishat, Shalimar, Cheshma Shahi,
              Shankaracharya Temple, Dinner and overnight stay in Houseboat
            </p>
            <Button className="redbuttons">Dinner</Button>
            <Button className="redbuttons">Welcome Drink</Button>
            <Button className="redbuttons">Private Cab</Button>
          </Col>
          <Col xs={24} sm={24} xl={7} xxl={7} className="PackageDays">
            <h1>Day 2</h1>
            <h2>Srinagar – Pahalgam - Srinagar</h2>
            <p>
              After breakfast drive to Pahalgam (valley of shepherds). The
              distance of about 100 kms will be covered in about 3 hrs. Enroute
              visiting Saffron fields, Awantipora ruins (1100 yrs old temple of
              Lord Vishnu built by King Awantiverma), see the beautiful
              countryside on the way and lot of rice fields. Drive through pine
              forests. The explore Betab Valley Chandanwari and Aru valley (at
              own cost) . Return back to Srinagar .
            </p>
            <Button className="redbuttons">Dinner</Button>
            <Button className="redbuttons">Breakfast</Button>
            <Button className="redbuttons">Private Cab</Button>
          </Col>
          <Col xs={24} sm={24} xl={7} xxl={7} className="PackageDays">
            <h1>Day 3</h1>
            <h2>Srinagar - Drass - Kargil</h2>
            <p>
              Arrive at Srinagar Airport and drive to Kargil, enroot Sonmarg,
              Zojila Pass, War Memorial, Drass. Have a magnificent view of
              Kargil war Famous Peaks Tiger Hill, Tololing & v isit Vijay
              Smarak. Then drive along the Drass River till one arrives at
              Kargil & Check in at Hotel. Overnight at the hotel.
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
            <h2>Kargil – Ule – Leh</h2>
            <p>
              Morning after Breakfast leave for Ule, enroute visit Mulbek. fur
              ther towards Lamayuru & passing thru Namikala & Fatula Passes, the
              highest pass on Srinagar – Leh road. Later have a magnificent view
              of spectacular Moon Landscape. Magnetic Hill, Pathar Sahib
              Gurudwara. Evening free time at Leisure at the Hotel.
            </p>
            <Button className="redbuttons">Breakfast</Button>
            <Button className="redbuttons">Dinner</Button>
            <Button className="redbuttons">Private Cab</Button>
          </Col>
          <Col xs={24} sm={24} xl={7} xxl={7} className="PackageDays">
            <h1>Day 5</h1>
            <h2>Leh - Nubra</h2>
            <p>
              After breakfast leave for Nubra Valley, driving across Khardung-la
              (alt: 18,380 ft). Explore Deskit and Visit Deskit Monastery,
              Hundar and the Sand Dunes where you can enjoy a short camel safari
              using the double-humped Bactrian camel found here (optional on
              direct payment). The Drive to Sumur check in Camp overnight stay
              in a camp.
            </p>
            <Button className="redbuttons">Breakfast</Button>
            <Button className="redbuttons">Dinner</Button>
            <Button className="redbuttons">Inner Permit</Button>
            <Button className="redbuttons">Private Cab</Button>
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
            <Button className="redbuttons">Inner Permit</Button>
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
            <h2>Pangong –Changla Pass – Leh</h2>
            <p>
              After breakfast drive to Leh, via Changla Pass, reach Karu then
              visit Hemis Monestry, Shey Palace Thiksey and 3Idiot School and
              drop at Hotel. Overnight in Leh
            </p>
            <Button className="redbuttons">Breakfast</Button>
            <Button className="redbuttons">Dinner</Button>
            <Button className="redbuttons">Inner Permit</Button>
            <Button className="redbuttons">Private Cab</Button>
          </Col>
          <Col xs={24} sm={24} xl={7} xxl={7} className="PackageDays">
            <h1>Day 8</h1>
            <h2>Leh Tsomorir</h2>
            <p>
              After breakfast drive to Tsomori via Mahi bridge and then drive
              and evening reach to tsomoriri lake check in Hotel rest time free
              at leisure, Dinner and overnight stay in Hotel
            </p>
            <Button className="redbuttons">Breakfast</Button>
            <Button className="redbuttons">Dinner</Button>
            <Button className="redbuttons">Private Cab</Button>
          </Col>
          <Col xs={24} sm={24} xl={7} xxl={7} className="PackageDays">
            <h1>Day 9</h1>
            <h2>Tsomorir Leh</h2>
            <p>
              After breakfast drive in Hotel then drive to Leh via Tanglangla
              via Tsokar then drive to Tangalangla Pass and the r each leh drop
              at Hotel, Dinner and overnight stay in Hotel
            </p>
            <Button className="redbuttons">Breakfast</Button>
            <Button className="redbuttons">Dinner</Button>
            <Button className="redbuttons">Inner Permit</Button>
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
            <h1>Day 10</h1>
            <h2>Leh</h2>
            <p>
              This day free for leisure and you can do shopping and some
              personal activities , Overnight stay at Leh
            </p>
            <Button className="redbuttons">Breakfast</Button>
            <Button className="redbuttons">Dinner</Button>
            <Button className="redbuttons">Inner Permit</Button>
            <Button className="redbuttons">Private Cab</Button>
          </Col>
          <Col xs={24} sm={24} xl={7} xxl={7} className="PackageDays">
            <h1>Day 11</h1>
            <h2>Leh Airport Drop</h2>
            <p>
              After breakfast drive drive to Leh Airport flight back to home
              with sweet memories
            </p>
            <Button className="redbuttons">Breakfast</Button>
            <Button className="redbuttons">Dinner</Button>
            <Button className="redbuttons">Private Cab</Button>
          </Col>
        </Row>
      </div>
      <FooterBottom />
    </div>
  );
}

export default KashmirLehLadakhGroup;
