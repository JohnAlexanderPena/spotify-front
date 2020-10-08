import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import SpotifyWebApi from "spotify-web-api-js";
import { useDispatch } from "react-redux";

import Navigate from "./PlayerNavigation/Navigate";
import Sidebar from "react-sidebar";
import MainSidebar from "./Sidebar/Sidebar";

const spotify = new SpotifyWebApi();

function App() {
  const dispatch = useDispatch();
  const [nowPlaying, setNowPlaying] = useState({
    name: "none",
    image: "",
    artist: "",
  });
  const [params, setParams] = useState();

  // const getNowPlaying = () => {

  // };

  const getNowPlaying = useCallback(() => {
    spotify.getMyCurrentPlaybackState().then((response) => {
      if (response) {
        setNowPlaying({
          name: response.item.name,
          artist: response.item.artists[0].name,
          image: response.item.album.images[0],
        });
        dispatch({ type: "SET_USER", userInfo: response.device });
      } else {
        setNowPlaying({ name: "Nothing Currently Playing", image: "" });
      }
    });
  }, [dispatch]);

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
    getNowPlaying();
    return setParams(hashParams);
  }, [setParams, getNowPlaying]);

  return (
    <div>
      {params ? (
        ""
      ) : (
        <a href="http://localhost:8888">
          <button>Login With Spotify</button>
        </a>
      )}
      <MainSidebar />
      <Navigate
        nowPlaying={nowPlaying}
        getNowPlaying={getNowPlaying}
        params={params}
      />
    </div>
  );
}

export default App;
