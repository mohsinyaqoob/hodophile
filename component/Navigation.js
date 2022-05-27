import React from "react";
import Link from "next/link";
import { Dropdown, Space } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { WhatsAppOutlined } from "@ant-design/icons";

const { Header, Footer } = Layout;

const packageMenu = (
  <Menu
    items={[
      {
        label: (
          <Link icon="home" href="/Packages">
            All Packages
          </Link>
        ),
      },
      {
        label: (
          <Link icon="home" href="/LadakhPakages">
            Ladakh
          </Link>
        ),
      },
      {
        label: (
          <Link icon="home" href="/KashmirPackages">
            Jammu and Kashmir
          </Link>
        ),
      },
      {
        label: (
          <Link icon="home" href="/GoaPackages">
            Goa
          </Link>
        ),
      },
      {
        label: (
          <Link icon="home" href="/HimachalPradeshPackages">
            Himachal Pradesh
          </Link>
        ),
      },
    ]}
  />
);

function Navigation() {
  return (
    <div>
      <Layout
        className="layout"
        style={{
          position: "fixed",
          width: "100%",
        }}
      >
        <Header>
          <div className="logo" />
          <Menu
            style={{
              justifyContent: "center",
            }}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={[
              {
                label: (
                  <Link icon="home" href="/">
                    Home
                  </Link>
                ),
                key: "home",
              },

              {
                label: (
                  <Link icon="home" href="/Places">
                    Places
                  </Link>
                ),
                key: "package",
              },
              {
                label: (
                  <Link icon="home" href="/Hotels">
                    Hotels
                  </Link>
                ),
                key: "hotel",
              },
              {
                label: (
                  <Link icon="home" href="/Gallery">
                    Gallery
                  </Link>
                ),
                key: "gallery",
              },
              {
                label: (
                  <Dropdown overlay={packageMenu}>
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>Packages</Space>
                    </a>
                  </Dropdown>
                ),
                key: "place",
              },
              {
                label: (
                  <Link icon="home" href="/AboutUs">
                    About Us
                  </Link>
                ),
                key: "aboutus",
              },
              {
                label: (
                  <Link icon="home" href="/Contact">
                    Contact
                  </Link>
                ),
                key: "contact",
              },
            ]}
          />
        </Header>
        <a
          href=" https://api.whatsapp.com/send/?phone=917889319814&text&app_absent=0"
          className="whatsapp_float"
          target="_blank"
        >
          <WhatsAppOutlined style={{ color: "white !important" }} />
        </a>
      </Layout>
    </div>
  );
}

export default Navigation;
