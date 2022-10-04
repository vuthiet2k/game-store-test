import { useContext, useState } from "react";
import { Box } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Button, styled, Toolbar } from "@mui/material";

import UserCart from "./UserCart";
import iconHeadHome from "../assets/icon/headgame.svg";
import SearchHead from "../assets/icon/headersearch.svg";
import { getData } from "../apis";
import { ProductContext } from "../context/ProductContext";
import React from "react";

function Header() {
  let user = JSON.parse(localStorage.getItem("USER") || "");
  let navigate = useNavigate();
  const { setDataUI } = useContext(ProductContext);
  const [search, setSearch] = useState("");
  const handlerChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const handlerClickSearch = () => {
    setSearch("");
    getData(`products?name=${search}`).then((res) => {
      setDataUI(res?.data);
      navigate("/store");
    });
  };

  return (
    <AppBar sx={{ backgroundColor: "#000" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ gap: "30px" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button sx={{ textTransform: "none", color: "#fff", gap: "18px" }}>
              <IconRoute alt="icon" src={iconHeadHome} />
              <H3Route>Game Store</H3Route>
            </Button>
          </Link>
        </Box>
        {user ? (
          <>
            <Box sx={{ height: "35px" }}>
              <InputSearch
                placeholder="Search games..."
                value={search}
                onChange={(e) => handlerChangeSearch(e)}
              />
              <Button type="submit" onClick={handlerClickSearch}>
                <IconRoute src={SearchHead} alt="icon" />
              </Button>
            </Box>
            <UserCart />
          </>
        ) : (
          ""
        )}
      </Toolbar>
    </AppBar>
  );
}

const InputSearch = styled("input")({
  width: "470px",
  height: "100%",
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
