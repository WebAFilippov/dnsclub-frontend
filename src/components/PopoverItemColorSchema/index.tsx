import { Theme } from "../../hooks/useColorTheme";
import styles from "./PopoverItemColorSchema.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface IProps {
  children: React.ReactNode,
  handlerClick: (type: Theme) => void,
  type: Theme, 
  focus: Theme
}

function PopoverItemColorSchema({ children, handlerClick, type, focus }: IProps) {
  return (
    <div
      className={cx(styles.contentContainer, { focus: focus === type })}
      onClick={() => {
        handlerClick(type);
      }}
    >
      {children}
    </div>
  );
}

export default PopoverItemColorSchema;
