import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { List, Button } from "antd";
import { favoritesContext } from "../../contexts/favoritesContext";
import { cartContext } from "../../contexts/cartContext";

const FavoritesItem = ({ item }) => {
  const { deleteFromFavorites } = useContext(favoritesContext);
  // add to cart
  const { id } = useParams();
  const { addProductToCart, checkItemInCart } = useContext(cartContext);
  const [checkInCart, setCheckInCart] = useState(checkItemInCart(id));
  useEffect(() => {
    setCheckInCart(checkItemInCart(id));
  });
  return (
    <List.Item
      key={item.id}
      extra={<img width={272} alt="img" src={item.item.image1} />}
    >
      <List.Item.Meta
        title={
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h2>{item.item.model}</h2>
              <h6>{item.item.brand}</h6>
            </div>
            <h3 style={{ color: "red" }}>{"$" + item.item.price}</h3>
          </div>
        }
        description={
          <>
            <h6>{item.item.description}</h6>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "40%",
                marginTop: "20px",
              }}
            ></div>
            <Button onClick={() => deleteFromFavorites(item.item.id)}>
              Удалить с избранных
            </Button>
            <Button
              style={{marginLeft: "1%"}}
              onClick={() => {
                addProductToCart(item.item);
                setCheckInCart(checkItemInCart(id));
              }}
            >
              Добавить в корзину
            </Button>
          </>
        }
      />
    </List.Item>
  );
};

export default FavoritesItem;
