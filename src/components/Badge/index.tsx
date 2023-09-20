import styles from "./Badge.module.scss";

import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface IProps {
  children: React.ReactNode;
  bgColor?: string;
  color?: string;
  fontSize?: string;
  size?: "s" | "m" | "l" | "xl";
}

function Badge({
  children,
  bgColor = "#519bf2",
  color = "#fff",
  fontSize = "10px",
  size = "m",
}: IProps) {

  return (
    <span
      className={cx(styles.badge, styles[size])}
      style={{
        backgroundColor: bgColor,
        color: color,
        fontSize: fontSize,
      }}
    >
      {children}
    </span>
  );
}

export default Badge;
