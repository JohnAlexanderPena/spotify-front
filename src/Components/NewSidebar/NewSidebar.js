import React from "react";
import home from "../../assets/home.svg";
import browse from "../../assets/browse.svg";
import radio from "../../assets/radio.svg";
import axios from "axios";
import { Col, Row, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import "./Sidebar.scss";

const NewSidebar = ({ getNewToken }) => {
  const history = useHistory();

  const pointer = {
    cursor: "pointer",
    margin: "auto",
    justifyContent: "center",
  };

  return (
    <div className="sidebar-links" style={{ width: "15%" }}>
      <Row style={pointer}>
        <Col md={3}>
          <img src={home} alt="home" />
        </Col>
        <Col
          md={3}
          style={{
            fontSize: "large",
            marginTop: "auto",
            marginBottom: "auto",
          }}
          onClick={() => history.push("/home")}
        >
          Home
        </Col>
        <br />
      </Row>
      <br />
      <Row style={pointer}>
        <Col md={3}>
          <img src={browse} alt="browse" />
        </Col>
        <Col
          md={3}
          style={{
            fontSize: "large",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          Browse
        </Col>
        <br />
      </Row>
      <br />
      <Row style={pointer}>
        <Col md={3}>
          <img src={radio} alt="home" />
        </Col>
        <Col
          md={3}
          style={{
            fontSize: "large",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          Radio
        </Col>
        <br />
      </Row>
      {/* <Button onClick={getNewToken}>Refresh Token</Button> */}
    </div>
  );
};

export default NewSidebar;
