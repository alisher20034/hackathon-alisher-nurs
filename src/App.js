import React from "react";
import { BrowserRouter } from "react-router-dom";

import AuthContextProvider from "./contexts/authContext";
import ProductsContextProvider from "./contexts/productsContext";
import BrandsContextProvider from "./contexts/brandsContext";
import CartContextProvider from "./contexts/cartContext";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import Routing from "./Routing";

import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "./App.css";
import FavoritesContextProvider from "./contexts/favoritesContext";

const App = () => {
  return (
    <AuthContextProvider>
      <FavoritesContextProvider>
        <CartContextProvider>
          <BrandsContextProvider>
            <ProductsContextProvider>
              <BrowserRouter>
                <Header />
                <Routing />
                <Footer />
              </BrowserRouter>
            </ProductsContextProvider>
          </BrandsContextProvider>
        </CartContextProvider>
      </FavoritesContextProvider>
    </AuthContextProvider>
  );
};

export default App;

/*
CRUD
фильтрация
пагинация
поиск
корзина
роутинг
админка
*/
