import React, { useContext, useEffect } from "react";

import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ButtonBase } from "@mui/material";

import { Button } from "antd";
import StarIcon from "@mui/icons-material/Star";

import { useAuth } from "../../contexts/authContext";

import LoginModal from "../Auth/LoginModal";
import AuthModal from "../Auth/AuthModal";
import { Link } from "react-router-dom";
import { cartContext } from "../../contexts/cartContext";
import { favoritesContext } from "../../contexts/favoritesContext";

export default function Header() {
  const { getCart, cartLength } = React.useContext(cartContext);
  useEffect(() => {
    getCart();
  }, []);

  const { getFavorites, favoritesLength } = React.useContext(favoritesContext);
  useEffect(() => {
    getFavorites();
  }, []);

  const [modalShow, setModalShow] = React.useState(false);
  const [modalShowRes, setModalShowRes] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const {
    handleLogout,
    user: { email },
  } = useAuth();
  console.log(email);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {/* <MenuItem onClick={handleMenuClose}> </MenuItem>
      <MenuItem onClick={handleMenuClose}> </MenuItem> */}

      {email ? (
        <Button onClick={handleLogout} ghost>
          Выйти
        </Button>
      ) : (
        <>
          <MenuItem
            onClick={() => {
              setModalShow(true);
              handleMenuClose();
            }}
          >
            {" "}
            Войти{" "}
          </MenuItem>
          <MenuItem
            onClick={() => {
              setModalShowRes(true);
              handleMenuClose();
            }}
          >
            {" "}
            Регистрироваться{" "}
          </MenuItem>

          <LoginModal show={modalShow} onHide={() => setModalShow(false)} />
          <AuthModal
            show={modalShowRes}
            onHide={() => setModalShowRes(false)}
          />
        </>
      )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={+cartLength} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Корзина</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#fd1d1d" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <Link style={{ color: "white" }} to="/">
              <MenuIcon />
            </Link>
          </IconButton>
          <Link style={{textDecoration: "none", color: "white"}} to="/">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Интернет магазин
            </Typography>
          </Link>
          <Link style={{ color: "white" }} to="/favorites">
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={+favoritesLength} color="error">
                <StarIcon />
              </Badge>
            </IconButton>
          </Link>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link style={{ color: "white" }} to="/cart">
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={+cartLength} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Link>
          </Box>

          {email ? (
            <>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="admin"
              >
                <ButtonBase style={{ marginRight: "10px" }} variant="text">
                  Профиль
                </ButtonBase>
              </Link>
              <Button onClick={handleLogout} ghost>
                Выйти
              </Button>
            </>
          ) : (
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          )}

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
