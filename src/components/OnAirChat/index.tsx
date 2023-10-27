import React from "react";

import s from "./OnAirChat.module.scss";

import Broadcast from "./../Icons/BroadcastIcon/index";
import useOpenChat from "../../hooks/useOpenChat";

const OnAirChat: React.FC = () => {
  const [isOpen, setIsOpen] = useOpenChat();

  const toggleTheme = () => {
    setIsOpen((prevValue: boolean) => !prevValue)
  }

  return (
    <>
      {!isOpen && (
        <li className={s.navItem} onClick={toggleTheme}>
          Эфир
          <Broadcast />
        </li>
      )}
    </>
  );
};

export default OnAirChat;
