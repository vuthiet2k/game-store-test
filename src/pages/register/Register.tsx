import classNames from "classnames/bind";
import Contact from "../../components/Contact/Contact";
import styles from "./Register.module.scss";
import iconIntagram from "../../assets/icon/instagram.png";
import { Button } from "@mui/material";
import React from "react";
import { postData } from "../../apis";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

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
        localStorage.setItem("USER", JSON.stringify(res.data));
        console.log(res.data);

        return navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("form")}>
          <h2 className={cx("h2-logo")}>Store Game</h2>
          <p className={cx("p-logo")}>Đăng kí để trải nghiệm Game Store</p>
          <div className={cx("btn-login")}>
            <Button href="#">
              <img src={iconIntagram} alt="icon" className={cx("icon-insta")} />
              Đăng nhập bằng Instagram
            </Button>
          </div>
          <span className={cx("or")}>--- Hoặc ---</span>
          <form
            className={cx("form-register")}
            onSubmit={handlerSbumitRegister}
          >
            <input
              className={cx("input-register")}
              type="text"
              placeholder="Số di động hoặc email"
              onChange={(e) => handlerEmail(e)}
            />
            <input
              className={cx("input-register")}
              type="text"
              placeholder="Tên người dùng"
              onChange={handlerFullName}
            />
            <input
              className={cx("input-register")}
              type="text"
              placeholder="Mật khẩu"
              onChange={handlerPass}
            />
            <div className={cx("rules")}>
              Bằng cách đăng ký, bạn đồng ý với{" "}
              <b>Điều khoản, Chính sách quyền riêng tư</b> và&nbsp;
              <b>Chính sách cookie</b> của chúng tôi.
            </div>
            <Button onClick={handlerSbumitRegister}>Đăng ký</Button>
          </form>
        </div>
        <div className={cx("login")}>
          <span className={cx("color-white")}>Bạn chưa có tài khoản ư?</span>
          <Button sx={{ backgroundColor: "red" }}>Đăng nhập</Button>
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default Register;
