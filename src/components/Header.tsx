import { useContext, useState } from "react";
import { Box } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Button, styled, Toolbar } from "@mui/material";
import UserCart from "./UserCart";
import iconHeadHome from "../assets/icon/headgame.svg";
import SearchHead from "../assets/icon/headersearch.svg";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";
import React from "react";

function Header() {
  let navigate = useNavigate();
  const {users} = React.useContext(CartContext);
  const { allData, setDataUI, setFilter } = React.useContext(ProductContext);
  const [search, setSearch] = useState("");
  const handlerChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const handlerClickSearch = () => {
    setFilter(search);
    setDataUI(
      allData.filter((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase()) === true;
      })
    );
    setSearch("");
    navigate("/store");
  };
  const handlerKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.code === "Enter" && search) {
      handlerClickSearch();
    }
  };

  return (
    <AppBar sx={{ backgroundColor: "#000", height: "62px" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ gap: "100px", display: "flex", alignItems: "center" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              disableRipple
              sx={{
                textTransform: "none",
                color: "#fff",
                gap: "18px",
                "&: active": {
                  transform: "scale(0.9)",
                },
              }}
            >
              <IconRoute alt="icon" src={iconHeadHome} />
              <H3Route>Game Store</H3Route>
            </Button>
          </Link>

          <Box>
            <InputSearch
              placeholder="Search games..."
              value={search}
              onChange={(e) => handlerChangeSearch(e)}
              onKeyDown={handlerKeyDown}
            />
            <Button type="submit" onClick={handlerClickSearch}>
              <IconRoute src={SearchHead} alt="icon" />
            </Button>
          </Box>
        </Box>
        {users ? <UserCart /> : ""}
      </Toolbar>
    </AppBar>
  );
}

const InputSearch = styled("input")({
  width: "450px",
  height: "35px",
  borderRadius: "8px",
  backgroundColor: "#262626",
  border: "1px transparent",
  outline: "none",
  paddingLeft: "18px",
  transition: "all .3s",
  color: "#fff",
});

const IconRoute = styled("img")({
  width: "24px",
  height: "27px",
});

const H3Route = styled("h3")({
  color: "#fff",
  fontSize: "18px",
  whiteSpace: "nowrap",
});

export default React.memo(Header);
