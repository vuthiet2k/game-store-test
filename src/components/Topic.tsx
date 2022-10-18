import { Box, Button, Grid, Typography } from "@mui/material";
import { useContext, useState } from "react";
import Product from "./Product";
import { ReactComponent as Layout4 } from "../assets/icon/layoutTopic.svg";
import { ReactComponent as Layout1 } from "../assets/icon/layoutTopic1.svg";
import { ProductContext } from "../context/ProductContext";

export const Topic = () => {
  const [layout, setLayout] = useState<number>(3);
  const { allData, setDataUI, dataUI, filter, setFilter } =
    useContext(ProductContext);
  const handlerClearFilter = () => {
    setDataUI(allData);
    setFilter("None");
  };
  return (
    <Box pb={"280px"} sx={{ display: "block", flex: "1" }}>
      <Box>
        <Typography
          variant="h1"
          sx={{
            color: "#fff",
            fontSize: "60px",
            letterSpacing: "1px",
            fontWeight: "700",
            mb: "10px",
            fontFamily: "system-ui",
          }}
        >
          Trending and interesting
        </Typography>
        <Typography
          variant="h3"
          sx={{
            color: "#fff",
            fontSize: "16px",
            fontFamily: "system-ui",
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
            disabled
            sx={{
              textTransform: "none",
              backgroundColor: "#262626",
              border: "1px transparent",
              borderRadius: "12px",
              transition: "all 0.3s",
              height: "40px",
              padding: "8px 22px",
            }}
          >
            <Typography
              paragraph
              sx={{
                color: "#fff",
                fontSize: "14px",
                display: "contents",
              }}
            >
              Filter by:&nbsp;
            </Typography>
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
              fontWeight: "700",
              padding: "8px 22px",
              fontSize: "14px",
              "&: active": {
                transform: "scale(0.9)",
              },
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
          <Button
            disableRipple
            sx={{
              height: "48px",
              backgroundColor: "#282828",
              fill: layout === 3 ? "#fff" : "rgb(111, 111, 111)",
              border: "1px transparent",
              borderRadius: "8px",
              m: "0 5px",
              "&: active": {
                transform: "scale(0.9)",
              },
            }}
            onClick={() => setLayout(3)}
          >
            <Layout4
              style={{
                width: "48px",
                height: "48px",
                cursor: "pointer",
                transition: "all .2s",
              }}
            />
          </Button>
          <Button
            disableRipple
            sx={{
              height: "48px",
              backgroundColor: "#282828",
              fill: layout === 8 ? "#fff" : "rgb(111, 111, 111)",
              border: "1px transparent",
              borderRadius: "8px",
              m: "0 5px",
              "&: active": {
                transform: "scale(0.9)",
              },
            }}
            onClick={() => setLayout(8)}
          >
            <Layout1
              style={{
                width: "48px",
                height: "48px",
                cursor: "pointer",
                transition: "all .2s",
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
            justifyContent: layout === 3 ? "left" : "center",
            color: "#fff",
          }}
        >
          {dataUI && dataUI.length > 0 ? (
            dataUI.map((product, index) => {
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
                  <Product id={product.id} to={`/store/${product.id}`} />
                </Grid>
              );
            })
          ) : (
            <Typography
              paragraph
              sx={{
                mt: "50px",
                ml: "15px",
                color: "#fff",
                fontSize: "30px",
                letterSpacing: "1px",
                fontWeight: "800",
                fontFamily: "system-ui",
              }}
            >
              Không có dữ liệu
            </Typography>
          )}
        </Grid>
      </Box>
    </Box>
  );
};
