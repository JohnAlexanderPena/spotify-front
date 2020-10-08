import React, { useEffect, useState } from "react";
import axios from "axios";
import pauseButton from "../assets/pause-button.svg";
import playButton from "./../assets/play-button.svg";
import nextButton from "./../assets/nextButton.svg";
import backButton from "./../assets/backButton.svg";
import { Container, Row, Col } from "react-bootstrap";
import "./Navigate.scss";

const Navigate = ({ nowPlaying, getNowPlaying, params }) => {
  const [paused, setPaused] = useState(nowPlaying.name ? false : true);

  const pauseSong = async () => {
    await axios.request({
      method: "POST",
      url: `http://localhost:8888/player/${paused ? "play" : "pause"}`,
      headers: {
        token: params.access_token,
        data: paused,
      },
    });
    setPaused(!paused);
    // }
  };

  const next = async () => {
    await axios.request({
      method: "POST",
      url: `http://localhost:8888/player/next`,
      headers: {
        token: params.access_token,
      },
    });
    getNowPlaying();
  };

  const previous = async () => {
    await axios.request({
      method: "POST",
      url: `http://localhost:8888/player/back`,
      headers: {
        token: params.access_token,
      },
    });
    getNowPlaying();
  };

  useEffect(() => {
    // getNowPlaying();
  });

  return (
    <Container fluid className="main-footer">
      <Row className="justify-content">
        <Col style={{ overflow: "scroll", textAlign: "center" }} xs={6} md={1}>
          <div style={{ width: "200px", overflow: "scroll" }}>
            {nowPlaying.name}
          </div>
          {nowPlaying.artist}
        </Col>
        <Col style={{ textAlign: "center" }}>
          <img
            style={{ paddingRight: "15px" }}
            onClick={previous}
            src={backButton}
            alt="Previous"
          />
          <img
            onClick={pauseSong}
            src={paused ? playButton : pauseButton}
            alt="pause/play"
          />
          <img
            style={{ paddingLeft: "15px" }}
            onClick={next}
            src={nextButton}
            alt="Play Next"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Navigate;
