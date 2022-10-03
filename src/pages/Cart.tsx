import { Box, Button, Paper } from "@mui/material";
import { deleteData } from "../apis";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Header from "../components/Header";
import { CartType } from "../@type/cart";
import { Stack } from "@mui/system";

function Cart() {
  const handlerDelete = (id: number) => {
    deleteData(`cart/${id}`);
    setCart(cart.filter((item) => item.id !== id));
  };
  const { cart, setCart } = useContext(CartContext);
  return (
    <Box p={20} sx={{ backgroundColor: "#000" }}>
      <Stack>
        {cart && cart.length > 0
          ? cart?.map((game: CartType) => {
              return (
                <Paper key={game.id} sx={{m: '10px', height: '50px'}}>
                  {game.name}
                  <Button type="submit" onClick={() => handlerDelete(game.id)}>
                    X
                  </Button>
                </Paper>
              );
            })
          : "No games added"}
      </Stack>
    </Box>
  );
}

export default Cart;
