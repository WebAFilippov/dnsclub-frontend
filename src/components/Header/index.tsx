import s from "./Header.module.scss";

import HeaderLogo from "../HeaderLogo";
import HeaderSearch from "../HeaderSearch";
import ClubcoinsNav from "../ClubcoinsNav";
import OnAirChat from "../OnAirChat";
import ColorScheme from "../ColorScheme";
import Button from "../Button";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.leftContainer}>
        <HeaderLogo />
        <HeaderSearch />
        <ul className={s.headerNav}>
          <ClubcoinsNav />
          <OnAirChat />
        </ul>
      </div>
      <div className={s.rightContainer}>
        <Button type="secondary" size="m" handlerClick={() => console.log("dsa")}>Кнопка</Button>
        <ColorScheme />
      </div>
    </header>
  );
};

export default Header;
