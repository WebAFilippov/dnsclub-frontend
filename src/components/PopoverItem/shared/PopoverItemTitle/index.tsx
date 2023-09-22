import React, { ReactNode } from "react";
import classNames from "classnames/bind";

import s from "./PopoverItemTitle.module.scss";

const cx = classNames.bind(s);

type PopoverItemTitleProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
};

const PopoverItemTitle: React.FC<PopoverItemTitleProps> = ({
  children,
  onClick,
  className
}) => {
  return <div onClick={onClick} className={className ? className : cx('popover_title')}>{children}</div>;
};

export default PopoverItemTitle;
