import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import SpotifyWebApi from "spotify-web-api-js";
import { useDispatch } from "react-redux";
import axios from "axios";
import Navigate from "./PlayerNavigation/Navigate";
import NewSidebar from "./NewSidebar/NewSidebar";

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

  const getNewToken = async () => {
    const response = await axios.request({
      method: "GET",
      url: "http://localhost:8888/refresh_token",
      headers: {
        token: params.refresh_token,
      },
    });
    if (response.status === 200) {
      params.access_token = response.access_token;
    } else {
      console.log("check Token");
    }
  };

  const getDeviceInfo = async (token) => {
    const response = await axios.request({
      method: "POST",
      url: "http://localhost:8888/player/currentDevicePlaying",
      headers: {
        token: token,
      },
    }); // }
    if (response.data.status !== 200) {
      window.location.replace("http://localhost:8888");
    } else {
      const device = response.data.deviceInfo.filter(
        (device) => device.is_active === true
      );
      dispatch({ type: "SET_DEVICE", device: device });
    }
  };

  const getNowPlaying = useCallback(
    async (token) => {
      spotify.getMyCurrentPlaybackState().then((response) => {
        if (response !== "") {
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
    },
    [dispatch]
  );

  useEffect(() => {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    if (hashParams.access_token) {
      setParams(hashParams);
      sessionStorage.setItem("access_token", hashParams.access_token);
      getDeviceInfo(hashParams.access_token);
      spotify.setAccessToken(hashParams.access_token);
    } else {
      console.log("oooo");
    }
    getNowPlaying(hashParams.access_token);
    // getDeviceInfo(hashParams.access_token);
    return setParams(hashParams);
  }, [setParams]);

  return (
    <div className="home-page">
      {params ? (
        ""
      ) : (
        <a href="http://localhost:8888">
          <button>Login With Spotify</button>
        </a>
      )}
      <NewSidebar getNewToken={getNewToken} />
      <Navigate
        nowPlaying={nowPlaying}
        getNowPlaying={getNowPlaying}
        params={params}
      />
    </div>
  );
}

export default App;
