import { Box, Button, Paper, Typography } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { CartType } from "../@type/cart";
import { Stack } from "@mui/system";
import AnimatedCart from "../animations/AnimatedCart";
import { ProductContext } from "../context/ProductContext";

function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const {allData, setAllData} = useContext(ProductContext)
  const handlerDelete = (id: number) => {
    let elements = [...allData];
    elements = elements.map((item) =>
      item.id === id ? { ...item, inCart: false } : item
    );
    setAllData(elements);
    setCart(cart.filter((item) => item.id !== id));
  };
  return (
    <AnimatedCart>
      <Box
        p={20}
        sx={{
          backgroundColor: "#000",
        }}
      >
        <Stack sx={{ alignItems: "center" }}>
          {cart && cart.length > 0 ? (
            cart?.map((game: CartType) => {
              return (
                <Paper
                  key={game.id}
                  sx={{
                    m: "10px",
                    minWidth: "650px",
                    height: "50px",
                    backgroundColor: "#262626",
                    alignItems: "center",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px 20px",
                    color: "#ccc",
                    fontSize: "24px",
                  }}
                >
                  {game.name}
                  <Button
                    type="submit"
                    sx={{ color: "#fff", gap: "50px" }}
                    onClick={() => handlerDelete(game.id)}
                  >
                    <Typography
                      paragraph
                      sx={{ color: "#999", margin: "0", fontSize: "16px" }}
                    >
                      ${game.money}
                    </Typography>
                    X
                  </Button>
                </Paper>
              );
            })
          ) : (
            <Typography
              paragraph
              sx={{ color: "#999", margin: "0", fontSize: "24px" }}
            >
              "No games added"
            </Typography>
          )}
        </Stack>
      </Box>
    </AnimatedCart>
  );
}

export default Cart;
