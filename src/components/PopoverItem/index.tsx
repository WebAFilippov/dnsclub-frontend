import { Theme } from "../../hooks/useColorTheme";
import styles from "./PopoverItem.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface IProps {
  children: React.ReactNode,
  handler: (type: Theme) => void,
  type: Theme, 
  focus: Theme
}

function PopoverItem({ children, handler, type, focus }: IProps) {
  return (
    <div
      className={cx(styles.contentContainer, { focus: focus === type })}
      onClick={() => {
        handler(type);
      }}
    >
      {children}
    </div>
  );
}

export default PopoverItem;
