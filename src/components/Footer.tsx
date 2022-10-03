import iconHeadHome from "../assets/icon/headgame.svg";
import Contact from "./Contact/Contact";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";
import React from "react";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        padding: "40px 25px 0",
      }}
    >
      <Box sx={{ maxWidth: "1040px", margin: "auto" }}>
        <Button sx={{ textTransform: "none", gap: "15px", mb: "40px" }}>
          <img alt="icon" src={iconHeadHome} />
          <Typography variant="h2" sx={{ color: "#fff", fontSize: "24px" }}>
            Game Store
          </Typography>
        </Button>

        <Grid
          container
          spacing={2}
          sx={{ paddingBottom: "4px", mb: "50px", ml: "10px" }}
        >
          <Grid item xs={3}>
            <Stack>
              <H3Title>Company</H3Title>
              <H3Text>About</H3Text>
              <H3Text>Press Center</H3Text>
              <H3Text>Careers</H3Text>
            </Stack>
          </Grid>
          <Grid item xs={3}>
            <Stack>
              <H3Title>Consoles</H3Title>
              <H3Text>Playstaion</H3Text>
              <H3Text>Xbox One</H3Text>
              <H3Text>Swich</H3Text>
            </Stack>
          </Grid>
          <Grid item xs={3}>
            <Stack>
              <H3Title>Resources</H3Title>
              <H3Text>Help Center</H3Text>
              <H3Text>Contact</H3Text>
            </Stack>
          </Grid>
          <Grid item xs={3}>
            <Stack>
              <H3Title>Product Help</H3Title>
              <H3Text>Support</H3Text>
              <H3Text>File a Bug</H3Text>
            </Stack>
          </Grid>
        </Grid>

        <Contact />
      </Box>
    </Box>
  );
}

const H3Title = styled("h3")({
  fontSize: "20px",
  fontWeight: "1000",
  marginBottom: "20px",
  color: "#fff",
});

const H3Text = styled("a")({
  fontSize: "18px",
  fontWeight: "500",
  color: "#ccc",
  cursor: "pointer",
  transition: "all 0.3s",
  marginBottom: "14px",
});
export default React.memo(Footer);
