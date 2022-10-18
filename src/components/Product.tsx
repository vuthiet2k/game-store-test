import iconAddToCart from "../assets/icon/addToCart.svg";
import iconAdded from "../assets/icon/added.svg";
import { ReactComponent as IconAddLove } from "../assets/icon/addLove.svg";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  styled,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ProductType as ProductTypeCart } from "../@type/cart";
import { ProductType } from "../@type/product";
import { CartContext, handlerAddCart } from "../context/CartContext";
import { handlerLove, ProductContext } from "../context/ProductContext";
import { Toaster } from "react-hot-toast";
import React from "react";

const Product = ({ id, to }: ProductTypeCart) => {
  const { cart, setCart } = React.useContext(CartContext);
  const { allData, setAllData, filter, setDataUI, dataUI } =
    React.useContext(ProductContext);
  const [product, setProduct] = React.useState<ProductType>(allData[id]);
  const handlerAddCartProduct = () => {
    setProduct({ ...product, inCart: true });
    handlerAddCart(id, allData, setAllData, cart, setCart);
  };
  const handlerLoveProduct = () => {
    setProduct({ ...product, isLiked: !product.isLiked });
    handlerLove(id, allData, setAllData);
    if (filter === "Wishlist") {
      setDataUI(dataUI.filter((item) => item.id !== id));
    }
  };
  React.useEffect(() => {
    setProduct(allData[id]);
  }, [id]);
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
            image={product.cover}
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
              display: product.inCart ? "block" : "none",
            }}
          >
            Added
            <img
              src={iconAdded}
              alt="icon"
              style={{ height: "14px", width: "14px", marginLeft: "6px" }}
            />
          </Typography>
          <StyledButton
            disableRipple
            disableElevation
            size="small"
            sx={{
              color: "rgb(153, 153, 153)",
              fontSize: "14px ",
              textTransform: "none",
              fontWeight: "700",
              display: product.inCart ? "none" : "block",
            }}
            onClick={handlerAddCartProduct}
          >
            Add to cart
            <img
              src={iconAddToCart}
              alt="icon"
              style={{ height: "14px", width: "14px", marginLeft: "15px" }}
            />
          </StyledButton>
          <Typography
            variant="h6"
            sx={{ color: "#fff", fontSize: "14px", fontWeight: "700" }}
          >
            ${product.price}
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
            {product.name}
          </Link>
          <StyledButton disableRipple onClick={handlerLoveProduct}>
            <IconAddLove
              style={{
                height: "18px",
                width: "18px",
                marginTop: "20px",
                fill: product.isLiked ? "red" : "rgb(204, 204, 204)",
              }}
            />
          </StyledButton>
        </CardContent>
      </Card>
    </>
  );
};

export default React.memo(Product);

const StyledButton = styled(Button)`
  &&.MuiButton-root {
    &:hover {
      background: none;
    }
  }
`;
