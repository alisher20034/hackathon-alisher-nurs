import React, { useReducer } from "react";

import { CASE_GET_FAVORITES } from "../helpers/cases";

export const favoritesContext = React.createContext();

const INIT_STATE = {
  favorites: {},
  favoritesLength: 0,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CASE_GET_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
        favoritesLength: action.payload.products.length,
      };
    default:
      return state;
  }
};

const FavoritesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  
  function addProductToFavorites(product) {
    let favorites = JSON.parse(localStorage.getItem("favorites"));
    if (!favorites) {
      favorites = {
        products: [],
      };
    }
    let newProduct = {
      item: product,
      count: 1,
      subPrice: product.price,
    };
    let filteredFavorites = favorites.products.filter(
      (item) => item.item.id === product.id
    );
    if (filteredFavorites.length > 0) {
      favorites.products = favorites.products.filter(
        (item) => item.item.id !== product.id
      );
    } else {
      favorites.products.push(newProduct);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    getFavorites()
  }
  function getFavorites() {
    let favorites = JSON.parse(localStorage.getItem("favorites"));
    if (!favorites) {
      favorites = {
        products: [],
      };
    }
    dispatch({
      type: CASE_GET_FAVORITES,
      payload: favorites,
    });
  }
  function deleteFromFavorites(id) {
    let favorites = JSON.parse(localStorage.getItem("favorites"));
    if (!favorites) {
      favorites = {
        products: [],
      };
    }
    favorites.products = favorites.products.filter((item) => item.item.id !== id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    getFavorites();
  }

  function checkItemInFavorites(id) {
    let favorites = JSON.parse(localStorage.getItem("favorites"));
    if (!favorites) {
      favorites = {
        products: [],
      };
    }
    let filteredFavorites = favorites.products.filter((item) => item.item.id === id);
    return filteredFavorites.length > 0 ? true : false;
  }

  return (
    <favoritesContext.Provider
      value={{
        favorites: state.favorites,
        favoritesLength: state.favoritesLength,
        addProductToFavorites,
        getFavorites,
        deleteFromFavorites,
        checkItemInFavorites,
      }}
    >
      {children}
    </favoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
