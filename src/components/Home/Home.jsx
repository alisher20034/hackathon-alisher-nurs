import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Button, Tabs } from "antd";
import ProductsList from "../ProductsList/ProductsList";
import BrandsListContainer from "./BrandsListContainer";
import { Link } from "react-router-dom";
import { MessageOutlined } from "@ant-design/icons";

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
        <TabPane tab="Все товары" key="1">
          <ProductsList />
        </TabPane>
      </Tabs>
      <Link
        style={{
          textDecoration: "none",
          display: "flex",
          justifyContent: "center",
          marginTop: "3%",
        }}
        to="/brands"
      >
        <Button type="primary" ghost>
          ПОПУЛЯРНЫЕ БРЕНДЫ
        </Button>
      </Link>
      <BrandsListContainer />
      <Link to="/comments">
        <Button
          style={{ marginLeft: "46%", marginTop: "3%" }}
          type="primary"
          shape="round"
          icon={<MessageOutlined />}
          size="large"
        >
          Отзывы
        </Button>
      </Link>
    </>
  );
};

export default Home;
