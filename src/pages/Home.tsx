import bgHome from "../assets/images/backgroundHome.mp4";
import iconHeadHome from "../assets/icon/headgame.svg";
import iconHeadStore from "../assets/icon/headstore.svg";
import iconBodyBrowse from "../assets/icon/bodybrowse.svg";
import iconBodyPlayDice from "../assets/icon/bodyplaydice.svg";
import iconBodyGithub from "../assets/icon/bodygithub.svg";
import iconBodyLinkedLn from "../assets/icon/bodylinkedln.svg";
import iconSidebarGame from "../assets/icon/sidegame.svg";
import iconSidebarEroPage from "../assets/icon/sideeropage.svg";
import iconSidebarEroQuery from "../assets/icon/sideeroquery.svg";
import iconSidebarCommit from "../assets/icon/sidecommit.svg";
import iconSidebarPerfor from "../assets/icon/sideperfor.svg";
import iconSidebarTechnologies from "../assets/icon/sidetechnologies.png";
import iconSidebarOurSouce from "../assets/icon/sideoursouce.svg";
import UserCart from "../components/UserCart";
import {
  AppBar,
  Box,
  Button,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Stack } from "@mui/system";
import { motion } from "framer-motion";

function Home() {
  let navigate = useNavigate();
  if (!localStorage.getItem("USER")) {
    localStorage.setItem("USER", JSON.stringify(""));
  }
  let user = JSON.parse(localStorage.getItem("USER") || "");
  return (
    <Box>
      <Box
        sx={{
          position: "fixed",
          minHeight: "100%",
          minWidth: "100%",
          right: "0",
          bottom: "0",
          padding: "none",
          overflow: "hidden",
        }}
      >
        <video autoPlay loop muted>
          <source type="video/mp4" src={bgHome} />
        </video>
      </Box>
      <motion.div
        animate="visible"
        initial={"hidden"}
        variants={{
          hidden: { opacity: 1, y: 15 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ y: { type: "spring" }, duration: 0.01}}
      >
        <AppBar
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            height: "62px",
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box sx={{ gap: "30px" }}>
              <Button
                disableRipple
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  gap: "18px",
                  "&: active": {
                    transform: "scale(0.9)",
                  },
                }}
                onClick={() => {
                  navigate("/404");
                }}
              >
                <IconRoute alt="icon" src={iconHeadHome} />
                <H3Route>Game Store</H3Route>
              </Button>
              <Button
                disableRipple
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  gap: "18px",
                  marginLeft: "50px",
                  display: { xs: "none", md: "inline-flex" },
                  "&: active": {
                    transform: "scale(0.9)",
                  },
                }}
                onClick={() => {
                  navigate("/store");
                }}
              >
                <IconRoute alt="icon" src={iconHeadStore} />
                <H3Route>Browse Store</H3Route>
              </Button>
            </Box>
            {user ? <UserCart /> : <></>}
          </Toolbar>
        </AppBar>
      </motion.div>
      <Box
        sx={{
          height: 1,
          width: 1,
          position: "fixed",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Stack sx={{ width: { sm: "630px", xs: "100%" }, ml: { sm: "44px" } }}>
          <Box
            sx={{
              padding: "22px 35px 50px 50px",
              borderRadius: "30px",
              backdropFilter: "blur(8px)",
              backgroundColor: "rgba(250,250,250, 0.285)",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: "#fff",
                fontSize: { xs: "45px", sm: "90px" },
                whiteSpace: "nowrap",
                fontWeight: "700",
                letterSpacing: "0",
              }}
            >
              Game Store
            </Typography>
            <Typography
              variant="h4"
              sx={{ color: "#fff", fontSize: { xs: "14px", sm: "19px" } }}
            >
              The best destination to buy new games to competitive prices. 24
              hour support, "best price" guarantee and a flawless UX. Wish for
              more? Tell us below — or check out our&nbsp;
              <Typography
                variant="body1"
                align="center"
                sx={{
                  color: "#45c1bc",
                  cursor: "pointer",
                  fontSize: { xs: "14px", sm: "19px" },
                  display: "inline-block",
                }}
              >
                careers
              </Typography>
            </Typography>
          </Box>
          <Box
            mt={"20px"}
            sx={{
              maxWidth: "630px",
              padding: "14px 20px 15px",
              borderRadius: "30px",
              backdropFilter: "blur(8px)",
              backgroundColor: "rgba(250,250,250, 0.285)",
              display: "flex",
              justifyContent: "space-between",
              gap: "2px",
            }}
          >
            <ButtonRoute
              onClick={() => {
                navigate("/store");
              }}
            >
              <Icon alt="icon" src={iconBodyBrowse} />
              <H3Text sx={{ display: { xs: "none", sm: "inline-block" } }}>
                Browse
              </H3Text>
            </ButtonRoute>
            <ButtonRoute
              onClick={() => {
                navigate("/store/1");
              }}
            >
              <Icon alt="icon" src={iconBodyPlayDice} />
              <H3Text sx={{ display: { xs: "none", sm: "inline-block" } }}>
                Play Dice
              </H3Text>
            </ButtonRoute>
            <ButtonRoute href="https://github.com/vuthiet2k/game-store">
              <Icon alt="icon" src={iconBodyGithub} />
              <H3Text sx={{ display: { xs: "none", sm: "inline-block" } }}>
                Github
              </H3Text>
            </ButtonRoute>
            <ButtonRoute href="https://www.linkedin.com/">
              <Icon alt="icon" src={iconBodyLinkedLn} />
              <H3Text sx={{ display: { xs: "none", sm: "inline-block" } }}>
                Linkedln
              </H3Text>
            </ButtonRoute>
          </Box>
        </Stack>
        <Box
          mr={"40px"}
          sx={{
            maxWidth: "280px",
            padding: "22px 30px 30px",
            borderRadius: "30px",
            backdropFilter: "blur(8px)",
            backgroundColor: "rgba(250,250,250, 0.285)",
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            justifyContent: "center",
            gap: "5px",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: "26px",
              marginBottom: "14px",
              color: "#fff",
              textAlign: "center",
              fontWeight: "700",
              whiteSpace: "nowrap",
            }}
          >
            Quick Navigation
          </Typography>
          <ButtonSideBar>
            <Icon alt="icon" src={iconSidebarGame} />
            <H3Text>Game Page</H3Text>
          </ButtonSideBar>
          <Link to={"/404"} style={{ textDecoration: "none" }}>
            <ButtonSideBar>
              <Icon alt="icon" src={iconSidebarEroPage} />
              <H3Text>404 Page</H3Text>
            </ButtonSideBar>
          </Link>
          <Link to={"/query"} style={{ textDecoration: "none" }}>
            <ButtonSideBar>
              <Icon alt="icon" src={iconSidebarEroQuery} />
              <H3Text>404 Query</H3Text>
            </ButtonSideBar>
          </Link>
          <ButtonSideBar href="https://github.com/vuthiet2k/game-store#readme">
            <Icon alt="icon" src={iconSidebarCommit} />
            <H3Text>Commit Log</H3Text>
          </ButtonSideBar>
          <ButtonSideBar href="https://github.com/vuthiet2k/game-store#readme">
            <Icon alt="icon" src={iconSidebarPerfor} />
            <H3Text>Performance</H3Text>
          </ButtonSideBar>
          <ButtonSideBar href="https://github.com/vuthiet2k/game-store#readme">
            <Icon alt="icon" src={iconSidebarTechnologies} />
            <H3Text>Technologies</H3Text>
          </ButtonSideBar>
          <ButtonSideBar href="https://github.com/vuthiet2k/game-store">
            <Icon alt="icon" src={iconSidebarOurSouce} />
            <H3Text>OurSouce</H3Text>
          </ButtonSideBar>
        </Box>
      </Box>
    </Box>
  );
}

const IconRoute = styled("img")({
  width: "24px",
  height: "27px",
});

const H3Route = styled("h3")({
  color: "#fff",
  fontSize: "18px",
  whiteSpace: "nowrap",
});

const Icon = styled("img")({
  width: "18px",
  height: "18px",
});

const H3Text = styled("h3")({
  color: "#000",
  fontSize: "16px",
  whiteSpace: "nowrap",
  fontFamily: "system-ui",
  fontWeight: "500",
});

const ButtonRoute = styled(Button)({
  textTransform: "none",
  gap: "12px",
  width: "143px",
  height: "40px",
  backgroundColor: "#fff",
  border: "1px transparent",
  borderRadius: "18px",
  color: "#000",
  display: "flex",
  alignItems: "center",
  fontSize: "16px",
  padding: "10px 28px",
  transition: "all .3s",
  "&:hover": {
    background: "#45c1bc",
  },
});

const ButtonSideBar = styled(Button)({
  width: "215px",
  height: "40px",
  backgroundColor: "#fff",
  border: "1px transparent",
  borderRadius: "18px",
  color: "#000",
  cursor: "pointer",
  display: "flex",
  justifyContent: "left",
  alignItems: "center",
  fontSize: "16px",
  paddingLeft: "48px",
  transition: "all .3s",
  textTransform: "none",
  gap: "15px",
  "&:hover": {
    background: "#45c1bc",
  },
});

export default Home;
