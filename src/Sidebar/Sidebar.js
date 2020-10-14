import React, { useState } from "react";
import Sidebar from "react-sidebar";
import home from "../assets/home.svg";
import browse from "../assets/browse.svg";
import radio from "../assets/radio.svg";
import axios from "axios";

import { Col, Row, Button } from "react-bootstrap";
import "./Sidebar.scss";

const MainSidebar = ({ getNewToken }) => {
  //   const [sidebarOpen, setSideBarOpen] = useState(true);

  return (
    <div>
      <Sidebar
        sidebar={
          <div style={{ paddingTop: " 30%" }} className="container">
            <Row className="sidebar-links">
              <Button onClick={getNewToken}>Refresh Token</Button>
              <Col md={3}>
                <img src={home} alt="home" />
              </Col>
              <Col md={4}>Home</Col>
              <br />
            </Row>
            <br />
            <Row className="sidebar-links">
              <Col md={3}>
                <img src={browse} alt="browse" />
              </Col>
              <Col md={4}>Browse</Col>
              <br />
            </Row>
            <br />
            <Row className="sidebar-links">
              <Col md={3}>
                <img src={radio} alt="home" />
              </Col>
              <Col md={4}>Radio</Col>
              <br />
            </Row>
            <br />
          </div>
        }
        children={""}
        docked={true}
        styles={{ sidebar: { background: "rgb(19, 19, 19)", width: "10%" } }}
      ></Sidebar>
    </div>
  );
};

export default MainSidebar;
