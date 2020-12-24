import React, { useState } from "react";
import { Carousel, Row } from "react-bootstrap";
import CardView from "../../../Reuseables/Cards/CardView";

const CarouselSlide = ({ items }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      style={{ width: "100%" }}
      activeIndex={index}
      onSelect={handleSelect}
    >
      <Carousel.Item>
        <Row>
          {items &&
            items.slice(0, 5).map((item) => {
              return <CardView item={item} />;
            })}
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row>
          {items &&
            items.slice(5, 10).map((item) => {
              return <CardView item={item} />;
            })}
        </Row>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselSlide;
