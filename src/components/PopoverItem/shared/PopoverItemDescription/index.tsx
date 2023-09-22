import React, { ReactNode } from "react";
import classNames from "classnames/bind";

import s from "./PopoverItemDescription.module.scss";

const cx = classNames.bind(s);

type PopoverItemDescriptionProps = {
  children: ReactNode;
  onClick?: () => void;
  classNames?: string;
};

const PopoverItemDescription: React.FC<PopoverItemDescriptionProps> = ({
  children,
  onClick,
  classNames,
}) => {
  return (
    <div
      onClick={onClick}
      className={classNames ? classNames : cx("popover_description")}
    >
      {children}
    </div>
  );
};

export default PopoverItemDescription;
