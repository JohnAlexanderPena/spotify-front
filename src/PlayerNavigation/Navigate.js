import React, { useEffect, useState } from "react";
import axios from "axios";
import pauseButton from "../assets/pause-button.svg";
import playButton from "./../assets/play-button.svg";
import nextButton from "./../assets/nextButton.svg";
import backButton from "./../assets/backButton.svg";
import sound from "./../assets/sound.svg";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./Navigate.scss";

const Navigate = ({ nowPlaying, getNowPlaying, params }) => {
  const [paused, setPaused] = useState(nowPlaying.name ? false : true);

  const device = useSelector((state) => state.deviceInfo.device);

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
    <Container fluid style={{ maxWidth: "100%" }} className="main-footer">
      <Row className="justify-content">
        <Col
          // md="auto"
          xs={6}
          md={1}
          style={{
            overflow: "scroll",
            textAlign: "center",
            paddingTop: "1%",
            paddingBottom: "1%",
          }}
          // xs={6}
        >
          <div className="song-name">{nowPlaying.name}</div>
          <div className="song-name">{nowPlaying.artist}</div>
        </Col>
        <Col style={{ textAlign: "center", paddingTop: "1%" }}>
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
      <Row
        className="device-bar"
        style={{
          backgroundColor: "rgb(18,175,83",
        }}
      >
        <Col style={{ textAlign: "end" }} xs={2} md={10}>
          <img src={sound} alt="device playing" />
        </Col>
        <Col xs={10} md={2}>
          Listening on {device && device[0].name}
        </Col>
      </Row>
    </Container>
  );
};

export default Navigate;
