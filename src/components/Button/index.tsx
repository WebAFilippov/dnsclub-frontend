import React from "react";
import classNames from "classnames/bind";

import s from "./Button.module.scss";

const cx = classNames.bind(s);

type Props = {
  type?: "primary" | "secondary" | "outline" | "auth";
  sizes?: "s" | "m" | "l";
  stretched?: boolean;
  disabled?: boolean;
  handlerClick?: () => void;
};

const Button = React.forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<Props>
>(
  (
    { type, sizes, stretched, disabled, handlerClick, ...props },
    forwardedRef
  ) => {
    return (
      <>
        <button
          className={cx("button", type, sizes, {
            stretched: stretched,
          })}
          disabled={disabled}
          onClick={handlerClick}
          ref={forwardedRef}
          {...props}
        >
          {props.children}
        </button>
      </>
    );
  }
);

export default Button;
