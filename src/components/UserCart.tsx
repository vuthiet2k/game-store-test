import iconHeadUser from "../assets/icon/headuser.svg";
import iconHeadCart from "../assets/icon/headcart.svg";

import { Box, Button, styled } from "@mui/material";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function UserCart() {
  const { cart } = useContext(CartContext);
  let navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("USER") || "");

  return (
    <Box sx={{ display: { xs: "none", md: "block" } }}>
      <Button
        disableRipple
        sx={{ textTransform: "none", color: "#fff", gap: "16px" }}
        onClick={() => {
          navigate("/log-in");
        }}
      >
        <IconRoute alt="icon" src={iconHeadUser} />
        <H3Route>{user ? user.account : ""}</H3Route>
      </Button>
      <Button
        disableRipple
        sx={{
          textTransform: "none",
          color: "#fff",
          gap: "16px",
          marginLeft: "30px",
        }}
        onClick={() => {
          navigate("/cart");
        }}
      >
        <IconRoute alt="icon" src={iconHeadCart} />
        <H3Route>Cart: {cart.length}</H3Route>
      </Button>
    </Box>
  );
}

const IconRoute = styled("img")({
  width: "24px",
  height: "27px",
});

const H3Route = styled("h3")({
  color: "#fff",
  fontSize: "18px",
  whiteSpace: "nowrap",
});

export default UserCart;
