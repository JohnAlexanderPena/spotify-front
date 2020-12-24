import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import NewReleases from "./NewReleases/NewReleases";
import "./MainBrowse.scss";

const MainBrowse = () => {
  return (
    <div className="main-browse">
      <div>
        <div className="browse-title">
          <h2
            style={{
              fontWeight: "bold",
              color: "#FFFFFF",
              fontSize: "3rem",
              textIndent: "3.5rem",
            }}
          >
            Browse
          </h2>
          <div>
            <Navbar
              collapseOnSelect
              expand="lg"
              className="browse-navbar"
              // bg="dark"
              variant="dark"
            >
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#features">Genres & Moods</Nav.Link>
                  <Nav.Link href="#pricing">New Releases</Nav.Link>
                  <Nav.Link href="#discover">Discover</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
          <NewReleases />
        </div>
      </div>
    </div>
  );
};

export default MainBrowse;
