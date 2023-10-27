import styles from "./Chat.module.scss";

import OnAirGreenIcon from "../Icons/OnAirGreenIcon";
import CloseIcon from "../Icons/CloseIcon";
import useOpenChat from "../../hooks/useOpenChat";


function Chat() {

  const [isOpen, setIsOpen] = useOpenChat()

  const toggleTheme = () => {
    setIsOpen((prevValue: boolean) => !prevValue)
  }

  return (
    <>
      {isOpen && (
        <div className={styles.chat}>
          <div className={styles.header_onAir}>
            <div className={styles.title}>
              Эфир <OnAirGreenIcon />
            </div>
            <div
              className={styles.link__closeIcon}
              onClick={toggleTheme}
            >
              <CloseIcon />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Chat;
