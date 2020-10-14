import React, { useEffect, useState } from "react";
import axios from "axios";
import pauseButton from "../assets/pause-button.svg";
import playButton from "./../assets/play-button.svg";
import favorite from "./../assets/favorite-heart.svg";
import nextButton from "./../assets/nextButton.svg";
import backButton from "./../assets/backButton.svg";
import sound from "./../assets/sound.svg";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./Navigate.scss";

const Navigate = ({ nowPlaying, getNowPlaying, params }) => {
  const [paused, setPaused] = useState(nowPlaying.name ? false : true);
  const [songName, startSongName] = useState(false);
  const [albumName, startAlbumName] = useState(false);

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
    <Container style={{ maxWidth: "100%" }} className="main-footer">
      <Row className="justify-content main-navbar-info">
        <Col xs={6} md={2}>
          <Row>
            <Col md={6}>
              <div className={songName ? "marquee" : "song-name"}>
                <div onMouseEnter={() => startSongName(!songName)}>
                  {nowPlaying.name}
                </div>
              </div>
            </Col>
            <Col>
              <img src={favorite} alt="favorite" />
            </Col>
          </Row>
          <div className={albumName ? "marquee" : "song-name"}>
            <div onMouseEnter={() => startAlbumName(!albumName)}>
              {nowPlaying.artist}
            </div>
          </div>
        </Col>
        <Col style={{ textAlign: "center", alignSelf: "center" }}>
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
        <Col
          style={{
            textAlign: "end",
            backgroundColor: "rgb(18,175,83",
          }}
          xs={2}
          md={9}
        >
          <img
            style={{ paddingRight: "20px" }}
            src={sound}
            alt="device playing"
          />
        </Col>
        <Col className="wrapper" xs={6} md={2}>
          Listening on {device && device[0].name}
        </Col>
      </Row>
    </Container>
  );
};

export default Navigate;
