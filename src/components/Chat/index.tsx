import { useDispatch, useSelector } from "react-redux";

import { toggleVisible } from "../../redux/slices/visibleChatSlice";
import styles from "./Chat.module.scss";

import OnAirGreenIcon from "../Icons/OnAirGreenIcon";
import CloseIcon from "../Icons/CloseIcon";

function Chat() {
  const dispatch = useDispatch();
  const visibleWindow = useSelector((state) => state.visibleChat.visible);

  return (
    <>
      {!visibleWindow && (
        <div className={styles.chat}>
          <div className={styles.header_onAir}>
            <div className={styles.title}>
              Эфир <OnAirGreenIcon />
            </div>
            <div
              className={styles.link__closeIcon}
              onClick={() => dispatch(toggleVisible())}
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
