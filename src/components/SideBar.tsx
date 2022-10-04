import { ReactComponent as IconFiltersWishlist } from "../assets/icon/filterswish.svg";
import { ReactComponent as IconFiltersRating } from "../assets/icon/filtersrating.svg";
import { ReactComponent as IconFiltersReviews } from "../assets/icon/filtersreview.svg";
import { ReactComponent as IconGenresAction } from "../assets/icon/genresaction.svg";
import { ReactComponent as IconGenresStrategy } from "../assets/icon/genresstrategy.svg";
import { ReactComponent as IconGenresRPG } from "../assets/icon/genresrpg.svg";
import { ReactComponent as IconGenresShooter } from "../assets/icon/genresshooter.svg";
import { ReactComponent as IconGenresAdventure } from "../assets/icon/genresadventure.svg";
import { ReactComponent as IconGenresPuzzle } from "../assets/icon/genrespuzzle.svg";
import { ReactComponent as IconGenresRacing } from "../assets/icon/genresracing.svg";
import { ReactComponent as IconGenresSport } from "../assets/icon/genressport.svg";
import { Box, Button, styled } from "@mui/material";
import React from "react";
import { ProductContext } from "../context/ProductContext";

function SideBar() {
  const { setDataUI, setFilter, allData } = React.useContext(ProductContext);
  const handlerWishList = () => {
    setDataUI(
      allData.filter((item) => {
        return item.wishlist == true;
      })
    );
    setFilter("Wishlist");
  };
  const handlerRatting = () => {
    setDataUI(
      allData.filter((item) => {
        return item.ratting === true;
      })
    );
    setFilter("Ratting");
  };
  const handlerAction = () => {
    setDataUI(
      allData.filter((item) => {
        return item.action === true;
      })
    );
    setFilter("Action");
  };
  const handlerStrategy = () => {
    setDataUI(
      allData.filter((item) => {
        return item.strategy === true;
      })
    );
    setFilter("Strategy");
  };
  const handlerAdventure = () => {
    setDataUI(
      allData.filter((item) => {
        return item.adventure === true;
      })
    );
    setFilter("Adventure");
  };
  const handlerPuzzle = () => {
    setDataUI(
      allData.filter((item) => {
        return item.puzzle === true;
      })
    );
    setFilter("Puzzle");
  };
  const handlerShooter = () => {
    setDataUI(
      allData.filter((item) => {
        return item.shooter === true;
      })
    );
    setFilter("Shooter");
  };
  const handlerRPG = () => {
    setDataUI(
      allData.filter((item) => {
        return item.rpg === true;
      })
    );
    setFilter("RPG");
  };
  const handlerSport = () => {
    setDataUI(
      allData.filter((item) => {
        return item.sport === true;
      })
    );
    setFilter("Sport");
  };
  const handlerRacing = () => {
    setDataUI(
      allData.filter((item) => {
        return item.racing === true;
      })
    );
    setFilter("Racing");
  };

  return (
    <Box sx={{ width: "250px", paddingLeft: "40px" }}>
      <Box>
        <H3Title>Filters</H3Title>
        <ButtonSideBar>
          <Button
            sx={{
              textTransform: "none",
              gap: "15px",
              p: "0",
            }}
            disableRipple
            onClick={handlerWishList}
          >
            <IconFiltersWishlist
              style={{
                width: "28px",
                height: "32px",
                border: "1px transparent",
                borderRadius: "8px",
                padding: "6px 5px 4px",
                cursor: "pointer",
                transition: "all .2s",
                fill: "#fff",
              }}
            />
            <H3Text>Wishlist</H3Text>
          </Button>
        </ButtonSideBar>
        <ButtonSideBar>
          <Button
            sx={{ textTransform: "none", gap: "15px", p: "0" }}
            disableRipple
            onClick={handlerRatting}
          >
            <IconFiltersRating
              style={{
                width: "28px",
                height: "32px",
                border: "1px transparent",
                borderRadius: "8px",
                padding: "6px 5px 4px",
                cursor: "pointer",
                transition: "all .2s",
                fill: "#fff",
              }}
            />
            <H3Text>Ratings</H3Text>
          </Button>
        </ButtonSideBar>
        <ButtonSideBar>
          <Button
            disableRipple
            sx={{ textTransform: "none", gap: "15px", p: "0" }}
          >
            <IconFiltersReviews
              style={{
                width: "28px",
                height: "32px",
                border: "1px transparent",
                borderRadius: "8px",
                padding: "6px 5px 4px",
                cursor: "pointer",
                transition: "all .2s",
                fill: "#fff",
              }}
            />
            <H3Text>Reviews</H3Text>
          </Button>
        </ButtonSideBar>
      </Box>

      <Box>
        <H3Title>Genres</H3Title>
        <ButtonSideBar>
          <Button
            sx={{ textTransform: "none", gap: "15px", p: "0" }}
            disableRipple
            onClick={handlerAction}
          >
            <IconGenresAction
              style={{
                width: "28px",
                height: "32px",
                border: "1px transparent",
                borderRadius: "8px",
                padding: "6px 5px 4px",
                cursor: "pointer",
                transition: "all .2s",
                fill: "#fff",
              }}
            />
            <H3Text>Action</H3Text>
          </Button>
        </ButtonSideBar>
        <ButtonSideBar>
          <Button
            sx={{ textTransform: "none", gap: "15px", p: "0" }}
            disableRipple
            onClick={handlerStrategy}
          >
            <IconGenresStrategy
              style={{
                width: "28px",
                height: "32px",
                border: "1px transparent",
                borderRadius: "8px",
                padding: "6px 5px 4px",
                cursor: "pointer",
                transition: "all .2s",
                fill: "#fff",
              }}
            />
            <H3Text>Strategy</H3Text>
          </Button>
        </ButtonSideBar>
        <ButtonSideBar>
          <Button
            sx={{ textTransform: "none", gap: "15px", p: "0" }}
            disableRipple
            onClick={handlerRPG}
          >
            <IconGenresRPG
              style={{
                width: "28px",
                height: "32px",
                border: "1px transparent",
                borderRadius: "8px",
                padding: "6px 5px 4px",
                cursor: "pointer",
                transition: "all .2s",
                fill: "#fff",
              }}
            />
            <H3Text>RPG</H3Text>
          </Button>
        </ButtonSideBar>
        <ButtonSideBar>
          <Button
            sx={{ textTransform: "none", gap: "15px", p: "0" }}
            disableRipple
            onClick={handlerShooter}
          >
            <IconGenresShooter
              style={{
                width: "28px",
                height: "32px",
                border: "1px transparent",
                borderRadius: "8px",
                padding: "6px 5px 4px",
                cursor: "pointer",
                transition: "all .2s",
                fill: "#fff",
              }}
            />
            <H3Text>Shooter</H3Text>
          </Button>
        </ButtonSideBar>
        <ButtonSideBar>
          <Button
            sx={{ textTransform: "none", gap: "15px", p: "0" }}
            disableRipple
            onClick={handlerAdventure}
          >
            <IconGenresAdventure
              style={{
                width: "28px",
                height: "32px",
                border: "1px transparent",
                borderRadius: "8px",
                padding: "6px 5px 4px",
                cursor: "pointer",
                transition: "all .2s",
                fill: "#fff",
              }}
            />
            <H3Text>Adventure</H3Text>
          </Button>
        </ButtonSideBar>
        <ButtonSideBar>
          <Button
            sx={{ textTransform: "none", gap: "15px", p: "0" }}
            disableRipple
            onClick={handlerPuzzle}
          >
            <IconGenresPuzzle
              style={{
                width: "28px",
                height: "32px",
                border: "1px transparent",
                borderRadius: "8px",
                padding: "6px 5px 4px",
                cursor: "pointer",
                transition: "all .2s",
                fill: "#fff",
              }}
            />
            <H3Text>Puzzle</H3Text>
          </Button>
        </ButtonSideBar>
        <ButtonSideBar>
          <Button
            sx={{ textTransform: "none", gap: "15px", p: "0" }}
            disableRipple
            onClick={handlerRacing}
          >
            <IconGenresRacing
              style={{
                width: "28px",
                height: "32px",
                border: "1px transparent",
                borderRadius: "8px",
                padding: "6px 5px 4px",
                cursor: "pointer",
                transition: "all .2s",
                fill: "#fff",
              }}
            />
            <H3Text>Racing</H3Text>
          </Button>
        </ButtonSideBar>
        <ButtonSideBar>
          <Button
            sx={{ textTransform: "none", gap: "15px", p: "0" }}
            disableRipple
            onClick={handlerSport}
          >
            <IconGenresSport
              style={{
                width: "28px",
                height: "32px",
                border: "1px transparent",
                borderRadius: "8px",
                padding: "6px 5px 4px",
                cursor: "pointer",
                transition: "all .2s",
                fill: "#fff",
              }}
            />
            <H3Text>Sport</H3Text>
          </Button>
        </ButtonSideBar>
      </Box>
    </Box>
  );
}

const ButtonSideBar = styled("div")({
  width: "270px",
  height: "32px",
  marginBottom: "10px",
  paddingTop: "10px",
  background: "#000",
  cursor: "pointer",
  display: "flex",
  "& svg": {
    backgroundColor: "rgb(45, 45, 45)",
  },
  "&:hover": {
    "& svg": {
      backgroundColor: "#fff",
      "& path": {
        fill: "#000",
      },
    },
  },
});

const H3Title = styled("h3")({
  height: "30px",
  color: "#fff",
  fontSize: "25px",
  letterSpacing: "1px",
  marginBottom: "22px",
  whiteSpace: "nowrap",
  fontWeight: "700",
  fontFamily: "system-ui",
});

const H3Text = styled("h3")({
  fontSize: "18px",
  color: "#fff",
  whiteSpace: "nowrap",
  fontFamily: "system-ui",
  fontWeight: "500",
});

export default React.memo(SideBar);
