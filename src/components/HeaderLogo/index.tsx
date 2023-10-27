import { useNavigate } from "react-router-dom";

import styles from "./HeaderLogo.module.scss";

function HeaderLogo() {
  const navigate = useNavigate();
  
  return (
    <>
      <img
        className={styles.headerLogo}
        onClick={() => navigate("/")}
        src="https://cdn.club.dns-shop.ru/_nuxt/img/header-logo.72110e9.svg"
        alt="Логотип Клуба DNS"
      />
    </>
  );
}

export default HeaderLogo;
