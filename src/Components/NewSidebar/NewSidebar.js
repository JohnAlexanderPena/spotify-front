import React, { useState, useEffect } from "react";
import home from "../../assets/home.svg";
import browse from "../../assets/browse.svg";
import radio from "../../assets/radio.svg";
import axios from "axios";
import { Col, Row, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./Sidebar.scss";

const NewSidebar = ({ getNewToken }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const page = useSelector((state) => state.browseInfo.currentPage);

  const pointer = {
    cursor: "pointer",
    justifyContent: "left",
    marginLeft: "5%",
  };

  const [currenPage, setPage] = useState("");

  useEffect(() => {
    setPage(page);
  }, [page]);

  return (
    <div className="sidebar-links" style={{ width: "10%" }}>
      <Row
        style={{
          marginTop: "2rem",
          cursor: "pointer",
          justifyContent: "left",
          marginLeft: "5%",
        }}
        onClick={() =>
          history.push("/home") &
          dispatch({ type: "SET_PAGE", payload: "Home" })
        }
      >
        <Col md={3}>
          <img src={home} alt="home" />
        </Col>
        <Col
          md={3}
          style={{
            fontSize: "large",
            marginTop: "auto",
            marginBottom: "auto",
            color: page === "Home" ? "white" : "",
          }}
        >
          Home
        </Col>
        <br />
      </Row>
      <br />
      <Row
        onClick={() =>
          history.push("/browse") &
          dispatch({ type: "SET_PAGE", payload: "Browse" })
        }
        style={pointer}
      >
        <Col md={3}>
          <img src={browse} alt="browse" />
        </Col>
        <Col
          md={3}
          style={{
            fontSize: "large",
            marginTop: "auto",
            marginBottom: "auto",
            color: page === "Browse" ? "white" : "",
          }}
        >
          Browse
        </Col>
        <br />
      </Row>
      <br />
      <Row
        onClick={() =>
          history.push("/radio") &
          dispatch({ type: "SET_PAGE", payload: "Radio" })
        }
        style={pointer}
      >
        <Col md={3}>
          <img src={radio} alt="home" />
        </Col>
        <Col
          md={3}
          style={{
            fontSize: "large",
            marginTop: "auto",
            marginBottom: "auto",
            color: page === "Radio" ? "white" : "",
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
