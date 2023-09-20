import { useNavigate } from "react-router-dom";
import s from "./ClubcoinsNav.module.scss";

const ClubcoinsNav = () => {
  const navigate = useNavigate();

  return (
    <li className={s.navItem} onClick={() => navigate("/clubcoins")}>
      Клубкойны
    </li>
  );
};

export default ClubcoinsNav;
