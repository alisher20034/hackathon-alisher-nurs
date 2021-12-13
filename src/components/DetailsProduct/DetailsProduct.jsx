import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

import { Carousel, Button} from "antd";

import { productsContext } from "../../contexts/productsContext";
import { cartContext } from "../../contexts/cartContext";

const DetailsProduct = () => {
  const { id } = useParams();
  const { getOneProduct, oneProduct } = useContext(productsContext);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    getOneProduct(id);
  }, []);
  useEffect(() => {
    setProduct(oneProduct);
  }, [oneProduct]);
  // cart 
  const { addProductToCart, checkItemInCart } = useContext(cartContext);
  const [checkInCart, setCheckInCart] = useState(checkItemInCart(id));
  useEffect(() => {
    setCheckInCart(checkItemInCart(id))
  })
  return (
    <div className="container" style={{ marginTop: "20px" }}>
      { product? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <div style={{ width: "35vw", border: "1px solid black" }}>
              <Carousel autoplay>
                <div>
                  <img width="100%" src={product.image1} alt="" />
                </div>
                <div>
                  <img width="100%" src={product.image2} alt="" />
                </div>
              </Carousel>
            </div>
            <div style={{ width: "40vw" }}>
              <h1>{product.model}</h1>
              <h6>{product.brand}</h6>
              <h4 style={{color: "red"}} >{"$" + product.price}</h4>
              <Button
                size="large"
                // style={{ margin: "15px 0px", width: "100%" }}
                style={{ color: checkInCart ? "red" : "black"}}
                onClick={() => {
                      addProductToCart(product);
                      setCheckInCart(checkItemInCart(id)) 
                  }
                }
              >
                В КОРЗИНУ
              </Button>
              <h3>{product.description}</h3>
            </div>
          </div>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default DetailsProduct;
