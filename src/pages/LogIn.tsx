import Contact from "../components/Contact";
import iconIntagram from "../assets/icon/instagram.png";
import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  styled,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { postData } from "../apis";
import { CartContext } from "../context/CartContext";

function LogIn() {
  let navigate = useNavigate();
  const { setUsers } = useContext(CartContext);
  const [account, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handlerEmail = (e: { target: { value: any } }) => {
    // eslint-disable-next-line no-const-assign
    setEmail(e.target.value);
  };
  const handlerPass = (e: { target: { value: any } }) => {
    // eslint-disable-next-line no-const-assign
    setPass(e.target.value);
  };
  const handlerSubmitLogin = () => {
    setUsers(account);
    postData("user", {
      password: pass,
      account: account,
    })
      .then((res) => {
        return navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Box pt={15} sx={{ backgroundColor: "#000" }}>
      <Box
        sx={{
          margin: "auto",
          width: "50%",
        }}
      >
        <Box
          mb={5}
          p={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(250, 250, 250, 0.285)",
            backdropFilter: "blur(6px)",
          }}
        >
          <Typography variant={"h2"} sx={{ color: "#fff" }}>
            Store Game
          </Typography>
          <form
            action="login"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "80%",
            }}
          >
            <FormControl variant="standard">
              <InputLabel htmlFor="component-simple" sx={{ color: "#ccc" }}>
                Số điện thoại hoặc email
              </InputLabel>
              <Input
                sx={{ color: "#fff" }}
                value={account}
                onChange={handlerEmail}
              />
            </FormControl>
            <FormControl variant="standard">
              <InputLabel htmlFor="component-simple" sx={{ color: "#ccc" }}>
                password
              </InputLabel>
              <Input
                sx={{ color: "#fff" }}
                value={pass}
                type="password"
                onChange={handlerPass}
              />
            </FormControl>
            <StyledButton
              sx={{ backgroundColor: "red", color: "#fff", margin: "30px 0" }}
              onClick={handlerSubmitLogin}
            >
              Đăng nhập
            </StyledButton>
          </form>
          <Typography align="center" variant="subtitle1" sx={{ color: "#fff" }}>
            --- Hoặc ---
          </Typography>
          <StyledButton
            href="#"
            sx={{ gap: "10px", backgroundColor: "red", width: "250px" }}
          >
            <img
              src={iconIntagram}
              alt="icon"
              style={{ height: "25px", width: "25px" }}
            />
            <Typography
              paragraph
              align="center"
              sx={{
                m: "auto 0",
                color: "#fff",
                textTransform: "none",
              }}
            >
              Đăng nhập bằng Instagram
            </Typography>
          </StyledButton>
          <Typography paragraph align="center" sx={{ color: "#fff" }}>
            Quên mật khẩu?
          </Typography>
        </Box>

        <Box
          mb={10}
          p={2}
          sx={{
            backgroundColor: "rgba(250, 250, 250, 0.285)",
            backdropFilter: "blur(6px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Typography
            paragraph
            align="center"
            sx={{
              m: "auto 0",
              color: "#fff",
            }}
          >
            Bạn chưa có tài khoản ư?
          </Typography>
          <Link to={"/register"} style={{ textDecoration: "none" }}>
            <StyledButton sx={{ backgroundColor: "red", color: "#fff" }}>
              Đăng ký
            </StyledButton>
          </Link>
        </Box>
      </Box>
      <Contact />
    </Box>
  );
}

export default LogIn;

const StyledButton = styled(Button)({
  ":hover": {
    backgroundColor: "red",
  },
});
