import { Outlet } from "react-router-dom";

import s from "./Wrapper.module.scss";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Chat from "../Chat";

const Wrapper = () => {
  return (
    <>
      <div className={s.header}>
        <Header />
      </div>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="chat">
        <Chat />
      </div>
      <div className={s.main}>
        <Outlet />
      </div>
    </>
  );
};

export default Wrapper;
