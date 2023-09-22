import React, { ReactNode } from "react";

type PopoverItemContentProps = {
  children: ReactNode;
  onClick?: () => void;
};

const PopoverItemContent: React.FC<PopoverItemContentProps> = ({
  children, onClick
}) => {
  return <div onClick={onClick}>{children}</div>;
};

export default PopoverItemContent;
