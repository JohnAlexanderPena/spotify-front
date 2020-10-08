import React, { useState } from "react";
import Sidebar from "react-sidebar";
import home from "../assets/home.svg";
import { Col, Row } from "react-bootstrap";
import "./Sidebar.scss";

const MainSidebar = () => {
  //   const [sidebarOpen, setSideBarOpen] = useState(true);

  return (
    <div>
      <Sidebar
        sidebar={
          <div style={{ paddingTop: " 15%" }} className="container">
            <Row className="sidebar-links">
              <Col md={3}>
                <img src={home} alt="home" />
              </Col>
              <Col md={4}>Home</Col>
              <br />
            </Row>
            <br />
            <Row className="sidebar-links">
              <Col md={3}>
                <img src={home} alt="home" />
              </Col>
              <Col md={4}>Home</Col>
              <br />
            </Row>
            <br />
            <Row className="sidebar-links">
              <Col md={3}>
                <img src={home} alt="home" />
              </Col>
              <Col md={4}>Home</Col>
              <br />
            </Row>
            <br />
          </div>
        }
        docked={true}
        styles={{ sidebar: { background: "rgb(19, 19, 19)", width: "10%" } }}
      ></Sidebar>
    </div>
  );
};

export default MainSidebar;
