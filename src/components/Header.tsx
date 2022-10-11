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
  const { allData, setDataUI, setFilter } = useContext(ProductContext);
  const [search, setSearch] = useState("");
  const handlerChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const handlerClickSearch = () => {
    setFilter(search);
    setDataUI(
      allData.filter((item) => {
        return item.name.includes(search) === true;
      })
    );
    setSearch("");
    navigate("/store");
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
            />
            <Button type="submit" onClick={handlerClickSearch}>
              <IconRoute src={SearchHead} alt="icon" />
            </Button>
          </Box>
        </Box>
        {user ? <UserCart /> : ""}
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
