import React, { useEffect, useState } from "react";
import axios from "axios";
import pauseButton from "../assets/pause-button.svg";
import playButton from "./../assets/play-button.svg";
import favorite from "./../assets/favorite-heart.svg";
import nextButton from "./../assets/nextButton.svg";
import backButton from "./../assets/backButton.svg";
import sound from "./../assets/sound.svg";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Connection from "../utils/Connection";
import "./Navigate.scss";

const Navigate = ({ nowPlaying, getNowPlaying, params }) => {
  const [paused, setPaused] = useState(nowPlaying.name ? false : true);
  const [songName, startSongName] = useState(false);
  const [albumName, startAlbumName] = useState(false);

  const device = useSelector((state) => state.deviceInfo.device);
  const dispatch = useDispatch();

  const getCats = async () => {
    const t = sessionStorage.getItem("access_token");
    const conn = new Connection(t);
    console.log(t);
    const response = await conn.get("/browse/getCategories");
    if (response.status.code === 200) {
      dispatch({ type: "SET_BROWSE", cats: response.data.data });

      return response;
    } else {
      console.error(
        `There was an error trying to delete the file/s:`,
        response
      );
      return response;
    }
  };

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
    getCats();
  });

  return (
    <Container style={{ maxWidth: "100%" }} className="main-footer">
      <Row className="justify-content main-navbar-info">
        <Col xs={6} md={2}>
          <Row>
            <Col xs={6} md={6}>
              <div className={songName ? "marquee" : "song-name"}>
                <div onMouseEnter={() => startSongName(!songName)}>
                  {nowPlaying.name}
                </div>
              </div>
            </Col>
            <Col xs={3}>
              <img src={favorite} alt="favorite" />
            </Col>
          </Row>
          <div className={albumName ? "marquee" : "song-name"}>
            <div onMouseEnter={() => startAlbumName(!albumName)}>
              {nowPlaying.artist}
            </div>
          </div>
        </Col>
        <Col md={8} style={{ textAlign: "center", alignSelf: "center" }}>
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
      {device && device.length > 0 ? (
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
            Listening on {device && device.length > 0 ? device[0].name : ""}
          </Col>
        </Row>
      ) : (
        ""
      )}
    </Container>
  );
};

export default Navigate;
