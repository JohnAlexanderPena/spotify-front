import React from "react";
import home from "../assets/home.svg";
import browse from "../assets/browse.svg";
import radio from "../assets/radio.svg";
import axios from "axios";
import { Col, Row, Button } from "react-bootstrap";
import "./Sidebar.scss";

const NewSidebar = ({ getNewToken }) => {
  return (
    <div className="sidebar-links" style={{ width: "15%" }}>
      <Row>
        <Col md={2}>
          <img src={home} alt="home" />
        </Col>
        <Col md={1}>Home</Col>
        <br />
      </Row>
      <br />
      <Row>
        <Col md={2}>
          <img src={browse} alt="browse" />
        </Col>
        <Col md={1}>Browse</Col>
        <br />
      </Row>
      <br />
      <Row>
        <Col md={2}>
          <img src={radio} alt="home" />
        </Col>
        <Col md={1}>Radio</Col>
        <br />
      </Row>
      <Button onClick={getNewToken}>Refresh Token</Button>
    </div>
  );
};

export default NewSidebar;
