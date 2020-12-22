import React, { useEffect } from "react";
import Connection from "../../utils/Connection";
import { useHistory } from "react-router-dom";
import "./Homepage.scss";
const HomePage = () => {
  const history = useHistory();

  const getTopArtist = async () => {
    const t = sessionStorage.getItem("access_token");
    const conn = new Connection(t);
    const response = await conn.get("/browse/getTopArtists");
    if (response) {
      console.log(response);
      //   dispatch({ type: "SET_BROWSE", cats: response.data });
      return response;
    } else {
      console.error(`There was an error trying to retrieve Data:`, response);
      return response;
    }
  };

  useEffect(() => {
    getTopArtist();
  });
  return <div className="home-page-container">Here is some content</div>;
};

export default HomePage;
