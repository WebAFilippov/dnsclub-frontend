import { FunctionComponent, PropsWithChildren } from "react";
import classNames from "classnames/bind";

import s from "./Button.module.scss";

const cx = classNames.bind(s);

type Props = {
  disabled?: boolean;
  type?: "primary" | "secondary" | "outline";
  size?: "s" | "m" | "l";
  stretched?: boolean;
  handlerClick?: () => void;
};

const Button: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
  disabled = false,
  type = "primary",
  size = "s",
  stretched,
  handlerClick,
}) => {
  return (
    <>
      <button
        className={cx("button", type, size, { stretched: stretched })}
        disabled={disabled}
        onClick={handlerClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
