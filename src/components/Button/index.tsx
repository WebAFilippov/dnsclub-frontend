import { FunctionComponent, PropsWithChildren } from "react";
import classNames from "classnames/bind";

import s from "./Button.module.scss";

const cx = classNames.bind(s);

type Props = {
  disabled?: boolean;
  handlerClick?: () => void;
  type: "primary" | "secondary" | "outline";
  size: "s" | "m" | "l";
};

const Button: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
  disabled = false,
  handlerClick,
  type,
  size,
}) => {
  return (
    <>
      <button
        className={cx("button", type, size)}
        disabled={disabled}
        onClick={handlerClick}
      >
        <span className={cx("buttonIn")}>{children}</span>
      </button>
    </>
  );
};

export default Button;
