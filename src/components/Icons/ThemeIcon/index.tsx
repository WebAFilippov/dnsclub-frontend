import styles from "./ThemeIcon.module.scss";
import {
  TiWeatherCloudy,
  TiWeatherSunny,
  TiWeatherNight,
} from "react-icons/ti";

import { Theme } from "../../../hooks/useColorTheme";

interface IProps {
  type: Theme;
  size: number;
}

function ThemeIcon({ type, size }: IProps) {
  return (
    <>
      {type === "system" && (
        <TiWeatherCloudy className={styles.icon} size={size} />
      )}
      {type === "light" && (
        <TiWeatherSunny className={styles.icon} size={size} />
      )}
      {type === "dark" && (
        <TiWeatherNight className={styles.icon} size={size} />
      )}
    </>
  );
}

export default ThemeIcon;
