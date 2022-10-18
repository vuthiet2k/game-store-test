import {
  Box,
  Button,
  CardContent,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { ProductType } from "../@type/product";
import iconAddToCart from "../assets/icon/addToCart.svg";
import iconAdded from "../assets/icon/added.svg";
import { ReactComponent as IconAddLove } from "../assets/icon/addLove.svg";
import { handlerLove, ProductContext } from "../context/ProductContext";
import { CartContext, handlerAddCart } from "../context/CartContext";
import { Toaster } from "react-hot-toast";

function Game() {
  let { productID } = useParams();
  const { cart, setCart } = useContext(CartContext);
  const { allData, setAllData } = useContext(ProductContext);
  const [product, setProduct] = useState<ProductType>(
    allData[Number(productID)]
  );
  useEffect(() => {
    allData[Number(productID)];
  }, [product]);
  const [more, setMore] = useState(true);
  const handleExpandClick = () => {
    setMore(!more);
  };
  const handlerAddCartGame = () => {
    setProduct({ ...product, inCart: true });
    handlerAddCart(product.id, allData, setAllData, cart, setCart);
  };
  const handlerLoveGame = () => {
    setProduct({ ...product, isLiked: !product.isLiked });
    handlerLove(product.id, allData, setAllData);
  };
  return (
    <Box pt={10} pb={"280px"} sx={{ width: "100%", backgroundColor: "#000" }}>
      <Toaster position="top-right" reverseOrder={false} />
      <Box sx={{ padding: "30px 50px" }}>
        <Stack
          direction={"row"}
          justifyContent="space-between"
          alignItems="center"
        >
          <Link
            to="/store"
            style={{
              textDecoration: "none",
              color: "rgb(204, 204, 204)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <ArrowBackIcon />
            <Typography
              variant="h4"
              sx={{ fontSize: "24px", fontWeight: "700" }}
            >
              Store
            </Typography>
          </Link>
          <Typography
            variant="h2"
            sx={{
              color: "#fff",
              fontFamily: "fantasy",
              fontSize: "52px",
              letterSpacing: "5px",
            }}
          >
            {product?.name}
          </Typography>
        </Stack>
        <Stack direction="row" mt={"30px"} sx={{ gap: "30px" }}>
          <Box
            sx={{
              width: "65%",
              borderRadius: "20px",
            }}
          >
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper"
              style={{ borderRadius: "20px" }}
            >
              {product.footage.length > 0
                ? product.footage.map((item) => {
                    return (
                      <SwiperSlide>
                        <Box
                          sx={{
                            backgroundImage: `url(${item})`,
                            backgroundSize: "cover",
                            width: "100%",
                            height: "120vh",
                            borderRadius: "20px",
                            backgroundRepeat: "round",
                            maxHeight: "550px",
                          }}
                        />
                      </SwiperSlide>
                    );
                  })
                : ""}
            </Swiper>
          </Box>
          <Stack
            sx={{
              width: "440px",
            }}
          >
            <CardContent
              sx={{
                overflow: "scroll",
                height: "375px",
                padding: "30px 70px 30px 34px",
                backgroundColor: "#1a1a1a",
                backgroundImage: "linear-gradient(180deg,transparent,#1a1a1a)",
                borderTopRightRadius: "16px",
                borderTopLeftRadius: "16px",
                "::-webkit-scrollbar": { display: "none" },
              }}
            >
              <Typography
                variant="h2"
                color="#fff"
                sx={{ mb: "15px", fontFamily: "fantasy", fontSize: "30px" }}
              >
                About
              </Typography>
              <H3gametext>{product.desc}</H3gametext>
            </CardContent>
            <Box
              sx={{
                backgroundColor: "#262626",
                padding: "30px 70px 30px 34px",
                borderBottomRightRadius: "16px",
                borderBottomLeftRadius: "16px",
              }}
            >
              {more ? (
                <StyledButton
                  disableRipple
                  sx={{
                    ml: "90%",
                    color: "#ccc",
                    fontSize: "18px",
                    textTransform: "none",
                    fontWeight: "600",
                    fontFamily: "sans-serif",
                  }}
                  onClick={handleExpandClick}
                >
                  More <ExpandMoreIcon />
                </StyledButton>
              ) : (
                <>
                  <Typography
                    component={"a"}
                    href={product.link}
                    target="_blank"
                    sx={{
                      color: "#fff",
                      fontSize: "18px",
                      fontWeight: "600",
                      fontFamily: "sans-serif",
                      textDecoration: "none",
                    }}
                  >
                    {product.name} Website
                  </Typography>
                  <H3gametextmore>Released: {product.release}</H3gametextmore>
                  <H3gametextmore>
                    Platforms: {product.platforms}
                  </H3gametextmore>
                  <H3gametextmore>Main Genre: {product.genre}</H3gametextmore>
                  <H3gametextmore>
                    Developers: {product.developers}
                  </H3gametextmore>
                  <H3gametextmore>
                    Publishers: {product.publishers}
                  </H3gametextmore>
                  <StyledButton
                    disableRipple
                    sx={{
                      ml: "90%",
                      color: "#ccc",
                      textTransform: "none",
                      fontSize: "18px",
                      fontWeight: "600",
                      fontFamily: "sans-serif",
                    }}
                    onClick={handleExpandClick}
                  >
                    Hide <ExpandLessIcon />
                  </StyledButton>
                </>
              )}
            </Box>
            <Box
              sx={{
                mt: "50px",
                backgroundColor: "#1a1a1a",
                borderRadius: "16px",
                padding: "15px 30px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <StyledButton
                disableRipple
                sx={{
                  color: "rgb(153, 153, 153)",
                  fontSize: "20px",
                  fontWeight: "700",
                  gap: "15px",
                }}
                onClick={handlerLoveGame}
              >
                ${product.price}
                <IconAddLove
                  style={{
                    height: "22px",
                    width: "22px",
                    fill: product.isLiked ? "red" : "rgb(204, 204, 204)",
                  }}
                />
              </StyledButton>
              {product.inCart === true ? (
                <Typography
                  paragraph
                  sx={{
                    margin: "8px",
                    color: "#90ee90",
                    fontSize: "16px ",
                    fontWeight: "700",
                  }}
                >
                  Added
                  <img
                    src={iconAdded}
                    alt="icon"
                    style={{
                      height: "14px",
                      width: "14px",
                      marginLeft: "6px",
                    }}
                  />
                </Typography>
              ) : (
                <StyledButton
                  disableRipple
                  size="small"
                  sx={{
                    color: "rgb(153, 153, 153)",
                    fontSize: "14px ",
                    textTransform: "none",
                    fontWeight: "700",
                  }}
                  onClick={handlerAddCartGame}
                >
                  Add to cart
                  <img
                    src={iconAddToCart}
                    alt="icon"
                    style={{
                      height: "14px",
                      width: "14px",
                      marginLeft: "15px",
                    }}
                  />
                </StyledButton>
              )}
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

const H3gametext = styled("h3")({
  color: "#ccc",
  fontFamily: "cursive",
  fontSize: "15px",
  lineHeight: "1.65",
  wordSpacing: "2px",
  fontWeight: "100",
});
const H3gametextmore = styled("h3")({
  color: "#999",
  fontFamily: "cursive",
  fontSize: "16px",
  lineHeight: "1.65",
  wordSpacing: "2px",
  fontWeight: "300",
});

export default Game;

const StyledButton = styled(Button)`
  &&.MuiButton-root {
    &:hover {
      background: none;
    }
  }
`;
