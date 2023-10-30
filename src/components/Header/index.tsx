import s from "./Header.module.scss";

import HeaderLogo from "../HeaderLogo";
import HeaderSearch from "../HeaderSearch";
import ClubcoinsNav from "../ClubcoinsNav";
import OnAirChat from "../OnAirChat";
import ColorScheme from "../ColorScheme";
import CreateBtn from "../Buttons/CreateBtn";
import AuthHeaderBtn from "../AuthHeader";
import { type } from './../../hooks/useOpenChat';
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
        <CreateBtn />
        <ColorScheme />
        <AuthHeaderBtn/>
      </div>
    </header>
  );
};

export default Header;
