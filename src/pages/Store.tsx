import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import AnimatedStore from "../animations/AnimationStore";
import SideBar from "../components/SideBar";

function Store() {
  return (
    <AnimatedStore>
      <Box
        sx={{
          paddingTop: "85px",
          paddingRight: "40px",
          backgroundColor: "#000",
          display: "flex",
        }}
      >
        <SideBar />
        <Outlet />
      </Box>
    </AnimatedStore>
  );
}

export default Store;
