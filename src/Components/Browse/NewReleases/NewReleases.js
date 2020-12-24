import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Connection from "../../../utils/Connection";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./NewReleases.scss";
import CardView from "../../../Reuseables/Cards/CardView";
import CarouselSlide from "../CarouselSlides/CarouselSlide";

const HomePage = () => {
  const history = useHistory();

  const page = useSelector((state) => state.browseInfo.currentPage);
  const categories = useSelector((state) => state.browseInfo.categories?.items);
  const [newReleases, setNewReleases] = useState(null);

  const dispatch = useDispatch();

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
      console.log(response);
      setNewReleases(response.data.data.albums.items);
      return response;
    } else {
      //   console.error(`There was an error trying to retrieve Data:`, response);
      return response;
    }
  };

  useEffect(() => {
    getRecommendations();
  }, [setNewReleases]);

  return (
    <div className="main-page">
      <h1
        style={{
          fontFamily: "Helvetica, sans-serif",
          fontWeight: "bold",
          paddingLeft: "1.5rem",
        }}
      >
        {/* {page || "Browse"} */}
      </h1>
      <div className="new-releases">
        <Row
          style={{
            paddingLeft: "1rem",
            paddingRight: "1rem",

            marginBottom: "5%",
          }}
        >
          {newReleases &&
            newReleases.map((item) => {
              return <CardView item={item} />;
            })}
        </Row>
      </div>
    </div>
  );
};

export default HomePage;
