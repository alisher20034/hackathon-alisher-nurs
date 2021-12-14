import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { Card } from "antd";
import {
  ShoppingCartOutlined,
  StarOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";

import { cartContext } from "../../contexts/cartContext";
import { favoritesContext } from "../../contexts/favoritesContext";
import Counter from "../../helpers/like";

const ProductCard = ({ item }) => {
  const { addProductToCart, checkItemInCart } = useContext(cartContext);
  const [checkInCart, setCheckInCart] = useState(checkItemInCart(item.id));
  useEffect(() => {
    setCheckInCart(checkItemInCart(item.id));
  });

  const { addProductToFavorites, checkItemInFavorites } =
    useContext(favoritesContext);
  const [checkInFavorites, setCheckInFavorites] = useState(
    checkItemInFavorites(item.id)
  );
  useEffect(() => {
    setCheckInFavorites(checkItemInFavorites(item.id));
  });

  return (
    <Card
      hoverable
      key={item.id}
      style={{ width: "280px", margin: "10px" }}
      cover={<img alt="example" src={item.image1} />}
      actions={[
        <Counter />,
        <StarOutlined
          style={{
            color: checkInFavorites ? "red" : "black",
            fontSize: "25px",
          }}
          onClick={() => {
            addProductToFavorites(item);
            setCheckInFavorites(checkItemInFavorites(item.id));
          }}
        />,

        <ShoppingCartOutlined
          style={{ color: checkInCart ? "red" : "black", fontSize: "25px" }}
          onClick={() => {
            addProductToCart(item);
            setCheckInCart(checkItemInCart(item.id));
          }}
        />,
        <Link to={`/products/${item.id}`}>
          <FileSearchOutlined
            style={{ color: "black", fontSize: "25px" }}
            key="ellipsis"
          />
        </Link>,
      ]}
    >
      <Card.Meta
        title={item.brand}
        description={
          <>
            <h3>{item.model}</h3>
            <h6 style={{ color: "red" }}>{"$" + item.price}</h6>
          </>
        }
      />
    </Card>
  );
};

export default ProductCard;
