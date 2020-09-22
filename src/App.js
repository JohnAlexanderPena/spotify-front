import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
  const [nowPlaying, setNowPlaying] = useState({ name: "none", image: "" });
  const [loggedIn, setLoggedIn] = useState("");
  const [params, setParams] = useState();

  const getNowPlaying = () => {
    spotify.getMyCurrentPlaybackState().then((response) => {
      if (response) {
        setNowPlaying({
          name: response.item.album.name,
          image: response.image,
        });
      } else {
        setNowPlaying({ name: "Error Getting Information", image: "" });
      }
    });
  };

  useEffect(() => {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    console.log(q);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    if (hashParams.access_token) {
      setParams(hashParams);
      spotify.setAccessToken(hashParams.access_token);
    }
    return setParams(hashParams);
  }, [setParams]);

  return (
    <div className="App">
      {params ? (
        ""
      ) : (
        <a href="http://localhost:8888">
          <button>Login With Spotify</button>
        </a>
      )}
      <div>Now Playing: {nowPlaying.name}</div>
      <div>
        <img src={nowPlaying.image} style={{ width: 100 }} />
      </div>
      <button onClick={() => getNowPlaying()}>Check Now Playing</button>
    </div>
  );
}

export default App;
