import { Box, Button, Grid, Typography } from "@mui/material";
import { useContext, useState } from "react";
import Product from "./Product";
import { ReactComponent as Layout4 } from "../assets/icon/layoutTopic.svg";
import { ReactComponent as Layout1 } from "../assets/icon/layoutTopic1.svg";
import { CartContext } from "../context/CartContext";
import { ProductContext } from "../context/ProductContext";

export const Topic = () => {
  // let now = performance.now();
  // while (performance.now() - now < 800) {
  //   // Artificial delay -- do nothing for 100ms
  // }
  const [layout, setLayout] = useState<number>(3);
  const { allData, setDataUI, dataUI, filter, setFilter } =
    useContext(ProductContext);
  const handlerClearFilter = () => {
    setDataUI(allData);
    setFilter("none");
  };

  return (
    <Box pb={"280px"} pr={"60px"} sx={{ display: "block", flex: "1" }}>
      <Box>
        <Typography
          variant="h1"
          sx={{
            color: "#fff",
            fontSize: "60px",
            letterSpacing: "1px",
            fontWeight: "700",
            mb: "10px",
          }}
        >
          Trending and interesting
        </Typography>
        <Typography
          variant="h3"
          sx={{
            color: "#fff",
            fontSize: "16px",
            letterSpacing: "1px",
          }}
        >
          Based on player counts and ratings
        </Typography>
      </Box>

      <Box
        sx={{
          mt: "28px",
          mb: "28px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Button
            sx={{
              color: "#fff",
              textTransform: "none",
              backgroundColor: "#262626",
              border: "1px transparent",
              borderRadius: "12px",
              transition: "all 0.3s",
              height: "40px",
              padding: "8px 22px",
              fontSize: "14px",
            }}
          >
            Filter by:
            <Typography
              paragraph
              sx={{
                color: "#fff",
                fontSize: "14px",
                fontWeight: "700",
                display: "contents",
              }}
            >
              {filter}
            </Typography>
          </Button>
          <Button
            sx={{
              ml: "10px",
              color: "#fff",
              textTransform: "none",
              backgroundColor: "#262626",
              border: "1px transparent",
              borderRadius: "12px",
              transition: "all 0.3s",
              height: "40px",
              padding: "8px 22px",
              fontSize: "14px",
              fontWeight: "700",
            }}
            onClick={handlerClearFilter}
          >
            Clear Filter
          </Button>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h3"
            sx={{
              color: "#696969",
              fontSize: "16px",
            }}
          >
            Display options:
          </Typography>
          <Button onClick={() => setLayout(3)}>
            <Layout4
              style={{
                width: "48px",
                height: "48px",
                cursor: "pointer",
                transition: "all .2s",
                fill: "#fff",
              }}
            />
          </Button>
          <Button onClick={() => setLayout(8)}>
            <Layout1
              style={{
                width: "48px",
                height: "48px",
                cursor: "pointer",
                transition: "all .2s",
                fill: "#fff",
              }}
            />
          </Button>
        </Box>
      </Box>
      <Box>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
          }}
        >
          {dataUI && dataUI.length > 0
            ? dataUI.map((product, index) => {
                return (
                  <Grid
                    item={true}
                    xs={layout}
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Product
                      id={product.id}
                      to={`/store/${product.id}`}
                      name={product.name}
                      src={product.avatar}
                      money={product.price}
                      love={product.wishlist}
                    />
                  </Grid>
                );
              })
            : "Không có dữ liệu"}
        </Grid>
      </Box>
    </Box>
  );
};
