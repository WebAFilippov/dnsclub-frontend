import React from "react";
import { ReactNode } from "react";
import classNames from "classnames/bind";

import s from "./PopoverItem.module.scss";

import PopoverItemTitle from "./shared/PopoverItemTitle";
import PopoverItemDescription from "./shared/PopoverItemDescription";
import PopoverItemContent from "./shared/PopoverItemContent";

const cx = classNames.bind(s);

type PopoverItemExtensions = {
  Title: typeof PopoverItemTitle;
  Description: typeof PopoverItemDescription;
  Content: typeof PopoverItemContent;
};

type PopoverItemProps = {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
};

const PopoverItem: React.FC<PopoverItemProps> & PopoverItemExtensions = ({
  children,
  className,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={className ? className : cx("popover_item")}
    >
      {children}
    </div>
  );
};

PopoverItem.Title = PopoverItemTitle;
PopoverItem.Description = PopoverItemDescription;
PopoverItem.Content = PopoverItemContent;

export default PopoverItem;
