import React from "react";
import axios from "axios";
import "./Navigate.scss";

const Navigate = ({ nowPlaying, getNowPlaying, params }) => {
  const pauseSong = () => {
    // const token = {
    //   access_token: params.access_token,
    // };

    axios.request({
      method: "POST",
      url: `http://localhost:8888/player/pause`,
      headers: {
        token: params.access_token,
      },
    });
  };

  return (
    <div className="main-footer">
      <img
        src={nowPlaying.image.url}
        alt="check"
        style={{ width: 100, float: "left" }}
      />

      <div>Now Playing: {nowPlaying.name}</div>
      <div style={{ color: "rgb(168,168,168" }}>{nowPlaying.artist}</div>
      <div></div>
      <button onClick={getNowPlaying}>Check Now Playing</button>
      <button onClick={pauseSong}>Pause</button>
    </div>
  );
};

export default Navigate;
