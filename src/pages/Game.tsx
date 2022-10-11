import {
  Box,
  CardActions,
  CardContent,
  Collapse,
  Stack,
  Typography,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getData } from "../apis";
import { ExpandMore } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

function Game() {
  let { productID } = useParams();

  const [product, setProduct] = useState<any>({});
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  useEffect(() => {
    getData(`products/${productID}`).then((res) => {
      setProduct(res?.data);
    });
  }, [productID]);

  return (
    <Box pt={10} pb={"280px"} sx={{ width: "100%", backgroundColor: "#000" }}>
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
              <SwiperSlide>
                <Box
                  sx={{
                    backgroundImage: `url(${product?.avatar})`,
                    backgroundSize: "cover",
                    width: "100%",
                    height: "120vh",
                    borderRadius: "20px",
                    backgroundRepeat: "round",
                    maxHeight: "550px",
                  }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  sx={{
                    backgroundImage: `url(${product?.avatar1})`,
                    backgroundSize: "cover",
                    width: "100%",
                    height: "120vh",
                    borderRadius: "20px",
                    backgroundRepeat: "round",
                    maxHeight: "550px",
                  }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  sx={{
                    backgroundImage: `url(${product?.avatar})`,
                    backgroundSize: "cover",
                    width: "100%",
                    height: "120vh",
                    borderRadius: "20px",
                    backgroundRepeat: "round",
                    maxHeight: "550px",
                  }}
                />
              </SwiperSlide>
            </Swiper>
          </Box>
          <Box sx={{ width: "440px", padding: "30px 70px 30px 34px" }}>
            <CardContent>
              <Typography variant="h2" color="#fff">
                About
              </Typography>
              <Typography paragraph color="#fff">
                {product?.about}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <ExpandMore
                // expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                sx={{ color: "#fff" }}
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph color="#fff">
                  Method:
                </Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add
                  saffron and set aside for 10 minutes.
                </Typography>
                <Typography paragraph color="#fff">
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep
                  skillet over medium-high heat. Add chicken, shrimp and
                  chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes. Transfer shrimp to a large plate and
                  set aside, leaving chicken and chorizo in the pan. Add
                  pimentón, bay leaves, garlic, tomatoes, onion, salt and
                  pepper, and cook, stirring often until thickened and fragrant,
                  about 10 minutes. Add saffron broth and remaining 4 1/2 cups
                  chicken broth; bring to a boil.
                </Typography>
                <Typography paragraph color="#fff">
                  Add rice and stir very gently to distribute. Top with
                  artichokes and peppers, and cook without stirring, until most
                  of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                  medium-low, add reserved shrimp and mussels, tucking them down
                  into the rice, and cook again without stirring, until mussels
                  have opened and rice is just tender, 5 to 7 minutes more.
                  (Discard any mussels that don&apos;t open.)
                </Typography>
                <Typography color="#fff">
                  Set aside off of the heat to let rest for 10 minutes, and then
                  serve.
                </Typography>
              </CardContent>
            </Collapse>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

export default Game;
