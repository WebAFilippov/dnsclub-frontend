import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleVisible } from "../../redux/slices/visibleChatSlice";

import s from "./OnAirChat.module.scss";

import Broadcast from "./../Icons/BroadcastIcon/index";

const OnAirChat: React.FC = () => {
  const dispatch = useDispatch();
  const visibleWindow = useSelector((state) => state.visibleChat.visible);
  

  return (
    <>
      {visibleWindow && (
        <li className={s.navItem} onClick={() => dispatch(toggleVisible())}>
          Эфир
          <Broadcast />
        </li>
      )}
    </>
  );
};

export default OnAirChat;
