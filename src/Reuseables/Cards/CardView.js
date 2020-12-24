import React from "react";
import { Card, Button } from "react-bootstrap";
import "../../Components/Browse/NewReleases.scss";

const Cards = ({ item }) => {
  return (
    <Card
      style={{
        width: "20%",
        // width: "16rem",
        border: "rgb(29, 29, 29)",
        padding: "20px 0px 20px 20px",
        background: "rgb(29, 29, 29)",
      }}
    >
      <Card.Img
        styel={{ borderRadius: "20px" }}
        variant="top"
        src={item.images[1].url}
      />
      <Card.Body
        style={{
          color: "grey",
          background: "rgb(29, 29, 29)",
        }}
      >
        <Card.Title>
          {item.album_type.charAt(0).toUpperCase() +
            item.album_type.slice(1, item.album_type.length)}
        </Card.Title>
        <Card.Text>
          Music By:{" "}
          {item.artists.map((artist) => {
            return artist.name;
          })}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
};

export default Cards;
