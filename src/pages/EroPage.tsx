import { Box, Container, Grid, styled, Typography } from "@mui/material";
import { padding, Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";
import AnimatedError from "../animations/AnimatedError";
import img404 from "../assets/images/404.png";

import Header from "../components/Header";

function EroPage() {
  let navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 3000);
  return (
    <AnimatedError>
      <Box pt={20} pb={10} sx={{ backgroundColor: "#000" }}>
        <Container
          sx={{
            backgroundColor: "#262626",
            width: "50%",
            borderRadius: "30px",
            alignContent: "center",
            padding: "80px",
          }}
        >
          <Stack
            direction="row"
            spacing={2}
            sx={{ display: "flex", justifyContent: "center", gap: "20px" }}
          >
            <IMG404 src={img404} />
            <Grid sx={{ width: "60%" }}>
              <Typography variant="h3" align="center" sx={{ color: "#fff" }}>
                is not available!
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                sx={{ color: "#ccc" }}
              >
                The page you tried to access is not available. You will be
                redirected to our browse section shortly. If you think this is
                an error, contact us!
              </Typography>
            </Grid>
          </Stack>
        </Container>
      </Box>
    </AnimatedError>
  );
}

const IMG404 = styled("img")({
  height: "170px",
  width: "170px",
});

export default EroPage;
