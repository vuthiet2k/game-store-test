import Contact from "../components/Contact";
import iconIntagram from "../assets/icon/instagram.png";
import { Box, Button, Container, styled, Typography } from "@mui/material";
import React from "react";
import { postData } from "../apis";
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/system";

function Register() {
  const [fullName, setFullName] = React.useState("");
  const [account, setAccount] = React.useState("");
  const [pass, setPass] = React.useState("");
  let user = {
    password: pass,
    account: account,
    fullName: fullName,
  };

  const navigate = useNavigate();
  const handlerEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccount(e.target.value);
  };
  const handlerPass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPass(e.target.value);
  };
  const handlerFullName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };
  const handlerSbumitRegister = () => {
    postData("user", user)
      .then((res) => {
        localStorage.setItem("auth", JSON.stringify(res?.data));
        return navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Box sx={{ p: "150px", backgroundColor: "#000" }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(250, 250, 250, 0.285)",
            backdropFilter: "blur(6px)",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "#fff",
              fontSize: "40px",
              mt: "36px",
              mb: "20px",
              fontWeight: "700",
            }}
          >
            Store Game
          </Typography>
          <Typography paragraph sx={{ color: "#ccc" }}>
            Đăng kí để trải nghiệm Game Store
          </Typography>
          <Button
            href="#"
            sx={{
              textTransform: "none",
              color: "#fff",
              gap: "10px",
              background: "red",
            }}
          >
            <img
              src={iconIntagram}
              alt="icon"
              style={{ height: "25px", width: "25px" }}
            />
            Đăng nhập bằng Instagram
          </Button>
          <Typography paragraph sx={{ color: "#ccc" }}>
            --- Hoặc ---
          </Typography>
          <Stack>
            <InputForm
              type="text"
              placeholder="Số di động hoặc email"
              onChange={(e) => handlerEmail(e)}
            />
            <InputForm
              type="text"
              placeholder="Tên người dùng"
              onChange={handlerFullName}
            />
            <InputForm
              type="text"
              placeholder="Mật khẩu"
              onChange={handlerPass}
            />
            <Typography
              align="center"
              paragraph
              sx={{
                color: "#bbb",
                margin: "40px 40px 0",
                fontSize: "14px",
                textAlign: "center",
              }}
            >
              Bằng cách đăng ký, bạn đồng ý với{" "}
              <b>Điều khoản, Chính sách quyền riêng tư</b> và&nbsp;
              <b>Chính sách cookie</b> của chúng tôi.
            </Typography>
            <Button
              onClick={handlerSbumitRegister}
              sx={{
                backgroundColor: "red",
                color: "#fff",
                width: "250px",
                m: "30px auto",
              }}
            >
              Đăng ký
            </Button>
          </Stack>
        </Box>
        <Box
          mt={5}
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
            sx={{
              color: "#fff",
              m: "initial",
            }}
          >
            Bạn đã có tài khoản?
          </Typography>
          <Button sx={{ backgroundColor: "red", color: "#fff" }}>
            Đăng nhập
          </Button>
        </Box>
      </Container>
      <Contact />
    </Box>
  );
}
{
  /* 
<div className={cx("login")}>
  <span className={cx("color-white")}>Bạn chưa có tài khoản ư?</span>
  <Button sx={{ backgroundColor: "red" }}>Đăng nhập</Button>
</div> */
}

export default Register;

const InputForm = styled("input")({
  border: "none",
  borderBottom: "2px solid #ccc",
  backgroundColor: "transparent",
  color: "#fff",
  height: "40px",
  fontSize: "16px",
});
