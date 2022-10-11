import iconAddToCart from "../assets/icon/addToCart.svg";
import iconAdded from "../assets/icon/added.svg";
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
import { memo, useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { ProductContext } from "../context/ProductContext";
import toast, { Toaster } from "react-hot-toast";

const Product = ({ id, to, src, name, money, love, isadded }: ProductType) => {
  const [isLove, setIsLove] = useState<boolean>(love);
  const { cart, setCart } = useContext(CartContext);
  const [added, setAdded] = useState<boolean>(isadded);
  const { allData, setAllData } = useContext(ProductContext);
  const handlerAddCart = () => {
    setAdded(true);
    setCart([{ id: id, name: name, money: money }, ...cart]);
    toast.success("Thêm sản phẩm thành công!");
  };
  const handlerLove = () => {
    setIsLove(!isLove);
    let elements = [...allData];
    elements = elements.map((item) =>
      item.id === id ? { ...item, isLiked: !isLove} : item
    );
    setAllData(elements);
  };

  useEffect(() => {
    setIsLove(love);
  }, [love]);
  useEffect(() => {
    setAdded(isadded);
  }, [isadded]);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
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
          <Typography
            paragraph
            sx={{
              margin: "8px",
              color: "#90ee90",
              fontSize: "14px ",
              fontWeight: "700",
              display: added ? "block" : "none",
            }}
          >
            Added
            <img
              src={iconAdded}
              alt="icon"
              style={{ height: "14px", width: "14px", marginLeft: "6px" }}
            />
          </Typography>
          <Button
            size="small"
            sx={{
              color: "rgb(153, 153, 153)",
              fontSize: "14px ",
              textTransform: "none",
              fontWeight: "700",
              display: added ? "none" : "block",
            }}
            onClick={handlerAddCart}
          >
            Add to cart
            <img
              src={iconAddToCart}
              alt="icon"
              style={{ height: "14px", width: "14px", marginLeft: "15px" }}
            />
          </Button>
          <Typography
            variant="h6"
            sx={{ color: "#fff", fontSize: "14px", fontWeight: "700" }}
          >
            ${money}
          </Typography>
        </CardActions>
        <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
          <Link
            to={to}
            style={{
              textDecoration: "none",
              color: "#fff",
              fontSize: "20px ",
              fontFamily: "fantasy",
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
    </>
  );
};

export default memo(Product);
