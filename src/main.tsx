import { Box } from "@mui/material";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Box sx={{ backgroundColor: "#000" }}>
    <App />
  </Box>
);
