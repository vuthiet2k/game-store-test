import iconIntagram from "../assets/icon/instagram.png";
import iconTwitter from "../assets/icon/twitter.png";
import CHplay from "../assets/icon/googleplay.png";
import AppleStore from "../assets/icon/applestore.svg";
import { Box, styled } from "@mui/material";

function Contact() {
  return (
    <Box sx={{ backgroundColor: "#000", color: "#fff" }}>
      <InnerBox>
        <TextApp>
          <TextCcc>
            <p>This page was built by Gianluca Jahn with React.</p>
            <p>
              Portions of this page are inspired by{" "}
              <a href="#">RAWG, RAWG.io</a>. This page was built solely for
              educational purposes.
            </p>
          </TextCcc>
          <ChApple>
            <img src={CHplay} alt="" />
            <img src={AppleStore} alt="" />
          </ChApple>
        </TextApp>
        <TextApp>
          <TextCcc>
            <a href="#" style={{ paddingRight: "40px" }}>
              Privacy
            </a>
            <a href="#" style={{ paddingRight: "40px" }}>
              Website Privacy Notice
            </a>
            <a href="#" style={{ paddingRight: "40px" }}>
              Cookies
            </a>
            <a href="#" style={{ paddingRight: "40px" }}>
              Legal
            </a>
            <a href="#" style={{ paddingRight: "40px" }}>
              Collaborative Guidelines
            </a>
          </TextCcc>
          <IntaTwe>
            <img src={iconIntagram} alt="icon" />
            <img src={iconTwitter} alt="icon" />
          </IntaTwe>
        </TextApp>
      </InnerBox>
    </Box>
  );
}

export default Contact;

const InnerBox = styled("div")({
  maxWidth: "1040px",
  margin: "auto",
  paddingBottom: "50px",
  borderTop: "2px solid #ccc",
});

const TextApp = styled("div")({
  paddingTop: "40px",
  display: "flex",
  justifyContent: "space-between",
});

const TextCcc = styled("div")({
  "& a": {
    color: "#ccc",
    textDecoration: "underline",
    textUnderlineOffset: "2px",
  },
});

const IntaTwe = styled("div")({
  "& img": {
    width: "24px",
    height: "24px",
    marginLeft: "16px",
    cursor: "pointer",
  },
});

const ChApple = styled("div")({
  "& img": {
    marginLeft: "6px",
    cursor: "pointer",
    width: "120px",
    height: "36px",
  },
});
