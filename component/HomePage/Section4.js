import React from "react";
import { Row, Col, Button, Card } from "antd";
import { Carousel } from "react-responsive-carousel";

function Section4() {
  return (
    <div>
      <div>
        <div className="Homesection1Header">
          <h1>BOOK HOTELS | HOUSEBOATS | CAMPS</h1>
          <hr style={{ width: "10%" }} />
          <p>
            Srinagar Hotels| Dal Lake Houseboats | Pahalgam Hotels |Gulmarg
            Hotels | Kargil Hotels | Leh Ladakh Hotels
          </p>
        </div>
        <div>
          <Row className="HotelDetailCard">
            <Col xs={24} sm={24} xl={12} xxl={12}>
              <h1>Hotel Grand Dragon Ladakh</h1>
              <p>Old Leh Rd, Sheynam, Leh Ladakh</p>
              <p>₹ 11,800/Night</p>
              <Button
                className="redbuttons"
                href=" https://api.whatsapp.com/send/?phone=917889319814&text&app_absent=0"
                target="_blank"
              >
                Send Inquiry on Whatsapp
              </Button>
              <h2> About Hotel </h2>
              <p>
                Hotel Grand Dragon Ladakh, is one of the luxurious hotels in
                Ladakh, having a magnificent mountain view. Hotel Grand Dragon
                is having 4 categories of rooms, Deluxe, Premium Heritage,
                Heritage Suite, and Luxury Suite rooms.
              </p>
              <h2> Where we are Located</h2>
              <p>Old Leh Road, Sheynam, Leh Ladakh</p>
              <h2> Where to Eat</h2>
              <p>
                The Hotel is having 3 inhouse restaurants which offer varieties
                of food option
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.5999389823755!2d77.57833711455862!3d34.1565759196734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38fdeb43c1fc9bb9%3A0x863d867e3c906f70!2sThe%20Grand%20Dragon%20Ladakh!5e0!3m2!1sen!2sin!4v1652855889713!5m2!1sen!2sin"
                width="100%"
                height="250"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
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
                  src="http://kashmirtravelport.com/images/hotel/hotel-28460.jpg"
                />
                <img
                  alt="example"
                  src="http://kashmirtravelport.com/images/hotel/hotel-28461.jpg"
                />
                <img
                  alt="example"
                  src="http://kashmirtravelport.com/images/hotel/hotel-28462.jpg"
                />
                <img
                  alt="example"
                  src="http://kashmirtravelport.com/images/hotel/hotel-28463.jpg"
                />
                <img
                  alt="example"
                  src="http://kashmirtravelport.com/images/hotel/hotel-28464.jpg"
                />
              </Carousel>
            </Col>
          </Row>
          <Row className="HotelDetailCard">
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
                  src="https://lh3.googleusercontent.com/hxZ-dlAh5xpIInl0Hmro-6rNA0T0D0zNConVk76w5wJMwlF5hSnb3rFeJUpX7qN_NQrNemHQmFGNAfnsIeIDviHfZPRoJlt6hpd9vj9dO8TMBObEKwg87pRgqKW7BeHUnX1v0uIBQBUq7J91ESdvhHVqJ_dDkQLgc4zzpgn5OlLibXVxqkqSZxlc4HxedcTFzaUYMB1-vEvkqxKJGayrL-gFwlELE73HTCBmBvy3TktolFM6MeCV69sjxEDoad3s1M9SGIzDIvnAkKpjR6msvCOHDfnBcMQ_4yb4FgxZCjuIfY2ZW8tXd8vjenoqELWOBQUi3ehATflr8faik9y8CqqYR597cwZBCD0l4T8zTDOboXLMmw6YJI2vz8u9b7At0FxQu6_qKJl33UXcpnfLK27Hu5_DRy-5PGJE5g-An43F4uWXgNovQe1Ry6Ydz-UBMgsE9nw3XpLbkHmfpNxIdwhK67mVqaDYoBXHbz2CR2cb6igtzlTEbm0c5itOUWpGShpy-v11AegBlWzva6mbXQJpvCdZMGPCdPwcPBbUL5pCqzQ_0R-AozpmoZOYwhka5PX1H-p7BBCr5z3MBOaS9oe77Wz9iuZWPDUx9rCJedYuEyfBaFyZqK4vZYpfMJBo2kiw3bBjFx6EsCM1qj88vfFQppruJB-a-z5ZxTuCHsqZYon9Yf1p2953sjwDPJtVBAN05uYTKgI06WnaxmG7ma568GDkjFtivNBm3UcbBCODCsoSz7MEJwC3TDF-=w632-h625-no?authuser=0"
                />
                <img
                  alt="example"
                  src="https://lh3.googleusercontent.com/U3OBKzKiQTROVb_AdtfeGktFrcHTLv197_21C-QKfpmMDCpPD2asYHTMpb4NC7wVFeIV9PPFPhxz5HRN6LjXSXixLD0H9QK_9cbdDT7szjeF_WG5MlgY0TO2j7xTq6sK4rL9K7vjJr-d5DInZ58FLzkI1iIX3yYNAmLp2Sw-8vWTkVIobuHeY-6J9nKIIE6RgD-4EorgAzyaWrDsTOoPNhSYO_CGzsXXIRtGywlQZ4rTJgqvm6EGJkfEBAKCRKSwcSyaVMvfmdtJaT_5fSIwQTPcMSxiF8M1UZM4GSZfqvX8YYPKYFtT-npYgl5qieoAsvELlCjIaRtRzUPEoz4VURnoaudu46VK5sKruUQ0N5kuXVMEGlnFd_rLK3dkDXwOkC4tfvDDtgOpm8ttDOgYklLptARPlqwNv5iZFaG_SmcbRa-KhHlbYtL9FYNojpypGmoqCioBb9yPoV631dSFWrEe7DS7igetasG-htN5ILtTGUfYJe6HnDJBSFBEymS2Bf09Nuk7aVsKZhREmRI7PtV8gxRMKnBn6MzOR73qYOZOYKfW9NmBAjXs3gocM2GhXI9X1ZroHpwOoA-YQ0atKNtLm_rCvvI24PMMjwO3qOgdGWFgKKpxNPPfvvvEnN1y8zeU1pqMxqtf3iXTUZS6KeSS2vOViWbb4TrkaapkraBiTVZ_pUbJGffhF9JlQvkF-5kaNZ_XyIvilOyqQTsXbZhud2cS_KsGG9J0j3OdTcwdUEek3heEvIu__n7b=w630-h625-no?authuser=0"
                />
                <img
                  alt="example"
                  src="https://lh3.googleusercontent.com/Cr9XMHn6yu1kfnL3x5EjVr7jUWH8ipv5LzfsRkR8IjTwV5TlSb42A9PAKdEA81EXMGkNKKwBzs1p4WbbnbBzBFjCA0Gh-C--FVGEBFW7GG3BLzHktiv3Ey6mobRuOvCPfq_8G8vrWerFgR3QiGbiNq0Z-_aRai_K_3Vzd_r86s3Hj9n0pag3SC21Q_53VJacD54zo9V8IEgn1IS4iiBMzi2HmZ-Ea4z79Yvuzvl5S-EIO2jCrD_aN9-j0V_n3KHS_lXznmYcsLEDq4W84uoFRcg560B7IfN1U2m_0_QC-HIp7K6tGnsH3QO0JTLMWxdB0nf1m5nbx5GDbQf3o5_q9zSk2sKoQS9a7MNbhskfE2rqllOBRuXXYuCCe5uA-Y-Rmp-7Ry5hPg8_6QuL0aXEthSSgQTB_LNEwQS8a9jYuKbx-BtIfBpV39r-O2SicrFYw03BIYBJTr2rhOOu8gQoWbd6SevQb8le5rHMqYQR19I-ZVOE6R0ZLsJ-y15H256dUNYY9eLcdO0ztV5NBOPp0d8z_j54ETj5qk2iuf4h6oqZsvrVbqwJ-aRSjAganSIBxV7iLQNlhgmhWcfIkPjittjnI7BnVZbkxTauyZrgJPZTO_0LzjSNYvNIZx4VOtnLyASthRlQbaxA-bEZ8eVyLamUIyVJA52HF80Ib8zPbMq-MQ3HsAHHDhaBi-A7TEOL4m2T7jWMzsoZGB7twPQgbuh5Z7An6Q5GON-P0FBZRDIgDkCMvARCSH730x8l=w630-h625-no?authuser=0"
                />
                <img
                  alt="example"
                  src="https://lh3.googleusercontent.com/Ss5WRFUlDT6H-6CTOQ0mV86fPnpPLowuraGl9Rdsl3RiicyenjC2M7lANNWxssN4ndXrfsjp5l25o5boNNp0ZKRrz5sAbEkoJ-e6dIQASCetYZwMDWbXTRjUWKULXLnBzYHL_tFlLdPrLoR50_AJK95ts6fnHEef7Ssg2EX2DQuctjlkrgmhBQdZK6vZEbt7xxiGCBAqfgIvmHzatFVTqQNqYbInnuos2sh0JUoWkAo5qJvt9Fea8d0K4YTcOaNiYlrIACBoHu0h8P5Dh8rqnql-Yb80fm50LWFzh0qMaoqjlBUyduvPrV_ocRHTDHTQ-Bli3EOwTiOL2QzN5dC7UEX0XOcDcnjCZ2fTNLsOFx7g0SRfzb3n4BlL1DwRVPcF5a5FYYe46vZg1grtx_UelmFHECd2HAd0zriHhgfkKu2P2Un1l2tZTGn1NVXxaBPlxw4DcNAHRqDjlk_fkJowbCXCc4ai3lSKEZzZmeD-zW1oksY5wC1Zf8xJNyCwAolUJh_mUjUbSVrrBA2smkhCOt4q_TnB8k3YS7lfdxHWvRWum6102G-eUgux0UrIMYTEzI2B4CxzFBuhhkxpwcHpX_3CeqpImWfirQbNA8yLMdDVRL2KAlOr0iiUqgNcydEGcJcxORp8JRsr_y0N7Wg8GoWDiFHTtH01W8AZV30eAS8_nSVBXxdvd-tw5RJAOqJPf2Cxun1p_MmpSMuUp3D6d7bBLZfcQkrwK4GXIMyTlC8LHNvoZTXBvkyKDbkn=w627-h625-no?authuser=0"
                />
                <img
                  alt="example"
                  src="https://lh3.googleusercontent.com/7Tw92G5s01t6_9YG0aO-kERfXF1NTnCzGoMoGB-V-IWYfCyknAqH1A3w_nwhccnB37qpsdXw2n5VhuOLc1uWk0DMnlOVsfd1msm6lebWfS7bHsOYVKvJ46ABixnMJQOc0lB_lkH8d_we9Knoao2xiTI4bhu9XVp883f5umucT3eUAxaAFY1sqpJJyCK-a8aEb1mE4meE0FCXyT_yQQj40DHGQIi_mgMVsOsNZHWmv_zYZr9NFMslNHKC36a9RYMqV4uuhq5pZKb9YfAcmOa837KLIixpR1nC3tsgZpeYv4_BFhgCvTAyI3WXWYrrZQKQud1XyvPeDIftgHFeGFlPD5tQNWDqBdalKpxdlD3dwIULnXwdZT66ZQbBa--5uPh9Uy88ovQ9tw5BR6delW14Mz462X1zw7mmjgZUBnU779QpLKWMJvqnSyC2Uayiq72gOb6kV3mElF5Zbh6TBf1Lnnnkwd2HGLuOyPz_mbBaMgL_xn-ZC30-22V3J3vSxcl4iXtxfewgIdAHnmv187GQJY1cCxj5amy_-Lw_lwNK4-3Xew6EB5ett3OQgADFmJc1YZ8KptTUU7kaUn_K_GnUHgJh9-wXthBY2MRdwoY18vPlgMQsLngQK0lCuaOqegkb4wqAaN5Usi7Rrlgt8ePYLQbfWfqGvQL8vB6C8A3yxUKInG0kjnsfu-_4ojpHzAcqV2UZz_XtiaeljN1ujFYG79kpPWcWtK-XL4DucCizmg_Nv7k_qmZShM_HhRk8=w631-h625-no?authuser=0"
                />
                <img
                  alt="example"
                  src="https://lh3.googleusercontent.com/GQT0CTMLQF_ZUtJ8m4BkzY8BlCdjqjE4JfX9EGHQGlyJdK7ypc17iOL1uqUPSbzj50CG-qzCHt50WhLFpRpI0fyw_oTBCRewyB43m1ZhM_SBSAiLuHpwDTTzm6ci1fK25CLTfGddF1QBpiS897Q8JjZsJIUYG82hpS4PIg9n_03szj506u40FbOeIal33GWA9bxsZLh0wJ_WPyIDSynDxM1ClRJEOMxGxVKrETma2e5urEnE2V771XACeD-kSN3_KbxZj25C8PR9GXGZ_ht04vOTWUvgu4EsW_5D0cTd_9skv_a1TGhBtLvfvQGdOTjc97mMvGY_wLDK5Hf8Scccm2dwz6ZSvMqqpaAeTjJiNQRw4BFR-Y_pVUwM5sug3o9-GUjtcx19DsrYL0n40Eoj-ZfiQnXSAJCO-sbvHKj1Di2SIbA1Kl_ZP9KgJ427Wdfw3Wf7TGXYgXY1eGXbBXCdYP6zn-YkBmKoNQ4mmOFAlq5m0-d1jncWnkBM-2d0Jmx8vZ_0ecuBd_5Gpgv-Tn46bOCi9wMI1WKEY928s0LHVTX-kNhc4hPILihNK4Mlg7Pg20XxLWBZU4M64cgrTli3CvaNlvrP6_0xwLNLcyF_mCkUDkllAQ91tb7VUZRrRhgg7VQg4OycbzjOnJY-nRoS4iGIJ4mhx9oextD2_QNO_Yb9W3PCjn65WCQ8hv1MubcUiyUHoVopiXQQyOCQvJjYgvqTdwXPoJ9w0xVe2zEIMc44mi7w-7ewKgSdkYxN=w630-h625-no?authuser=0"
                />
              </Carousel>
            </Col>
            <Col xs={24} sm={24} xl={12} xxl={12}>
              <h1>The Khyber Himalayan Resort & Spa</h1>
              <p>Gulmarg, Baramullah Kashmir</p>
              <p>₹2800/Night</p>
              <Button
                className="redbuttons"
                href=" https://api.whatsapp.com/send/?phone=917889319814&text&app_absent=0"
                target="_blank"
              >
                Send Inquiry on Whatsapp
              </Button>
              <h2> About Hotel </h2>
              <p>
                Khyber Hotel and Spa Gulmarg is a famous luxury hotel in Gulmarg
                Kashmir have a magnificent view of Gulmarg and the Mountains
              </p>
              <h2> Where we are Located</h2>
              <p>
                Hotel Gulmarg and Spar is Located in Gulmarg, Baramullah Jammu,
                and Kashmir
              </p>
              <h2> Where to Eat</h2>
              <p>
                Hotel is having in house restaurant with multiple food options
                which you can choose in hotel or tale with meals
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.0250928048013!2d74.38278131455523!3d34.04322742565388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1afe7d48b3de7%3A0x59fd37192aabf049!2sThe%20Khyber%20Himalayan%20Resort%20%26%20Spa!5e0!3m2!1sen!2sin!4v1652856326122!5m2!1sen!2sin"
                width="100%"
                height="250"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Col>
          </Row>
          <Row className="HotelDetailCard">
            <Col xs={24} sm={24} xl={12} xxl={12}>
              <h1>Mystique Meadows Earth Homes</h1>
              <p>Hunder Nubra Ladakh</p>
              <p>₹ 7,000/Night</p>
              <Button
                className="redbuttons"
                href=" https://api.whatsapp.com/send/?phone=917889319814&text&app_absent=0"
                target="_blank"
              >
                Send Inquiry on Whatsapp
              </Button>
              <h2> About Hotel </h2>
              <p>
                Mystique Meadows Earth Homes is a round hut cum tent
                accommodation in Hunder Nubra.
              </p>
              <h2> Where we are Located</h2>
              <p>Hunder Nubra Ladakh just 400 meters from Hunder Sand Dunes</p>
              <h2> Where to Eat</h2>
              <p>The Hotel is having in house restaurant</p>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13138.363865177465!2d77.4634335!3d34.589215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1eb77a1fdc187ac7!2sMystique%20Meadows%20Earth%20Homes!5e0!3m2!1sen!2sin!4v1652853215721!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
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
                  src="http://kashmirtravelport.com/images/hotel/hotel-01421.jpg"
                />
                <img
                  alt="example"
                  src="http://kashmirtravelport.com/images/hotel/hotel-01424.jpg"
                />
                <img
                  alt="example"
                  src="http://kashmirtravelport.com/images/hotel/hotel-01425.jpg"
                />
                <img
                  alt="example"
                  src="http://kashmirtravelport.com/images/hotel/hotel-01426.jpg"
                />
              </Carousel>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Section4;
