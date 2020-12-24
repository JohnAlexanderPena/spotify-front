import React from "react";
import { Card, Button } from "react-bootstrap";
import "../../Components/Browse/NewReleases/NewReleases.scss";

const Cards = ({ item }) => {
  return (
    <Card
      style={{
        // width: "20%",
        // width: "16rem",
        border: "none",
        padding: "20px 20px 20px 20px",
        background: "rgb(29, 29, 29)",
      }}
    >
      <Card.Img
        // style={{ borderRadius: "200px" }}
        variant="top"
        src={item.images[1].url}
      />
      <Card.Body
        style={{
          padding: "0px",
          color: "grey",
          background: "rgb(29, 29, 29)",
        }}
      >
        <Card.Title style={{ paddingTop: "10px", margin: "auto 0" }}>
          {item.album_type.charAt(0).toUpperCase() +
            item.album_type.slice(1, item.album_type.length)}
        </Card.Title>
        <Card.Text style={{ width: "100%" }}>
          {item.artists[0].name}
          {/* {item.artists.map((artist) => {
            return artist.name;
          })} */}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Cards;
