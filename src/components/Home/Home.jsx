import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Tabs } from "antd";
import ProductsList from "../ProductsList/ProductsList";
import BrandsListContainer from "./BrandsListContainer";
import { Link } from "react-router-dom";

const Home = () => {
  const { TabPane } = Tabs;

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Carousel
        style={{ width: "95%", margin: "2.4%", marginBottom: "0" }}
        activeIndex={index}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.wbstatic.net/bners1/big_2022_0912.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.wbstatic.net/bners1/big_elki_0912.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.wbstatic.net/bners1/389330395868689977.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.wbstatic.net/bners1/big_sale_0912.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.wbstatic.net/bners1/big_gift_idea_0712.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.wbstatic.net/bners1/Desktop-Revize.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Все" key="1">
          <ProductsList />
        </TabPane>
        <TabPane tab="Женская" key="2">
          Женская одежда
        </TabPane>
        <TabPane tab="Мужская" key="3">
          Мужская одежда
        </TabPane>
        <TabPane tab="Детская" key="4">
          Детская одежда
        </TabPane>
      </Tabs>
      <Link
        style={{
          textDecoration: "none",
          display: "flex",
          justifyContent: "center",
          marginTop: "3%"
        }}
        to="/brands"
      >
        <h5>ПОПУЛЯРНЫЕ БРЕНДЫ</h5>
      </Link>

      <BrandsListContainer />
    </>
  );
};

export default Home;
