import React from "react";
import { Row, Col, Card, Button } from "antd";
import Link from "next/link";
import AllPackages from "../component/PackagePage/Allpackages";
import FooterBottom from "../component/Footer";

function Packages() {
  return (
    <div>
      <h1>Packages</h1>
      <AllPackages />
      <FooterBottom />
    </div>
  );
}

export default Packages;
