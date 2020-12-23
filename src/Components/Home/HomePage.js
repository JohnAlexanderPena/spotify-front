import React, { useEffect } from "react";
import Connection from "../../utils/Connection";
import { useHistory } from "react-router-dom";
import "./Homepage.scss";
const HomePage = () => {
  const history = useHistory();

  //   const getTopArtist = async () => {
  //     const t = sessionStorage.getItem("access_token");
  //     const conn = new Connection(t);
  //     const response = await conn.get("/browse/getTopArtists");
  //     if (response) {
  //       console.log(response);
  //       return response;
  //     } else {
  //       console.error(`There was an error trying to retrieve Data:`, response);
  //       return response;
  //     }
  //   };

  const getRecommendations = async () => {
    const t = sessionStorage.getItem("access_token");
    const conn = new Connection(t);
    const response = await conn.get("/browse/recommendations");
    if (response) {
      //   console.log(response);
      return response;
    } else {
      //   console.error(`There was an error trying to retrieve Data:`, response);
      return response;
    }
  };

  useEffect(() => {
    getRecommendations();
  });
  return <div className="main-page"></div>;
};

export default HomePage;
