import classNames from "classnames/bind";
import styles from "./Contact.module.scss";

import iconIntagram from "../../assets/icon/instagram.png";
import iconTwitter from "../../assets/icon/twitter.png";
import CHplay from "../../assets/icon/googleplay.png";
import AppleStore from "../../assets/icon/applestore.svg";

const cx = classNames.bind(styles);

function Contact() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("text-app")}>
          <div className={cx("text-ccc")}>
            <p>This page was built by Gianluca Jahn with React.</p>
            <p>
              Portions of this page are inspired by{" "}
              <a href="#">RAWG, RAWG.io</a>. This page was built solely for
              educational purposes.
            </p>
          </div>
          <div className={cx("ch-apple")}>
            <img src={CHplay} alt="" />
            <img src={AppleStore} alt="" />
          </div>
        </div>
        <div className={cx("text-app")}>
          <div className={cx("text-ccc")}>
            <a href="#" className={cx("padding-40px")}>
              Privacy
            </a>
            <a href="#" className={cx("padding-40px")}>
              Website Privacy Notice
            </a>
            <a href="#" className={cx("padding-40px")}>
              Cookies
            </a>
            <a href="#" className={cx("padding-40px")}>
              Legal
            </a>
            <a href="#" className={cx("padding-40px")}>
              Collaborative Guidelines
            </a>
          </div>
          <div className={cx("inta-twit")}>
            <img src={iconIntagram} alt="icon" />
            <img src={iconTwitter} alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
