import iconAddToCart from "../assets/icon/addToCart.svg";
import { ReactComponent as IconAddLove } from "../assets/icon/addLove.svg";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ProductType } from "../@type/cart";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { postData, putData } from "../apis";
import { ProductContext } from "../context/ProductContext";

const Product = ({ id, to, src, name, money, love }: ProductType) => {
  const [isLove, setIsLove] = useState<boolean>(love);
  const { cart, setCart } = useContext(CartContext);
  const { allData, setAllData } = useContext(ProductContext);
  const handlerAddCart = () => {
    postData("cart", { id: id, name: name, money: money }).then((res) =>
      setCart([res?.data, ...cart])
    );
  };
  const handlerLove = () => {
    setIsLove(!isLove);
    putData(`products/${id}`, {
      wishlist: !love,
    })
      .then((res) => {
        let elements = [...allData];
        elements = elements.map((item) =>
          item.id === id ? { ...item, wishlist: res?.data.wishlist } : item
        );
        setAllData(elements);
      })
      .catch(() => {
        setIsLove(!isLove);
      });
  };

  console.log(allData);

  useEffect(() => {
    setIsLove(love);
  }, [love]);

  return (
    <Card
      sx={{
        width: "100%",
        minWidth: "280px",
        maxWidth: "500px",
        backgroundColor: "#202020",
        border: "1px transparent",
        borderRadius: "12px",
        transition: "all 0.3s",
        "&:hover": {
          transform: "scale(1.02)",
          backgroundColor: "#2d2d2d",
        },
      }}
    >
      <Link to={to}>
        <CardMedia
          component="img"
          image={src}
          alt="green iguana"
          sx={{
            minHeight: "160px",
            maxHeight: "280px",
          }}
        />
      </Link>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          size="small"
          sx={{
            color: "rgb(153, 153, 153)",
            fontSize: "16px ",
            textTransform: "none",
            gap: "15px",
          }}
          onClick={handlerAddCart}
        >
          Add to cart
          <img
            src={iconAddToCart}
            alt="icon"
            style={{ height: "14px", width: "14px" }}
          />
        </Button>
        <Typography variant="h6" sx={{ color: "#fff" }}>
          ${money}
        </Typography>
      </CardActions>
      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        <Link
          to={to}
          style={{
            textDecoration: "none",
            color: "#fff",
            fontSize: "24px ",
          }}
        >
          {name}
        </Link>
        <Button onClick={handlerLove}>
          <IconAddLove
            style={{
              height: "18px",
              width: "18px",
              marginTop: "20px",
              fill: isLove ? "red" : "rgb(204, 204, 204)",
            }}
          />
        </Button>
      </CardContent>
    </Card>
  );
};

export default Product;
