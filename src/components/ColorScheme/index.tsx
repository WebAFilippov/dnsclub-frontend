import * as Popover from "@radix-ui/react-popover";
import { useState } from "react";

import styles from "./ColorScheme.module.scss";
import useColorTheme, { Theme } from "./../../hooks/useColorTheme";
import ThemeIcon from "../Icons/ThemeIcon";
import PopoverItem from "../PopoverItem/index.tsx";
import Badge from "../Badge";

function ColorScheme() {
  const [colorTheme, setColorTheme] = useColorTheme();
  const [open, setOpen] = useState(false);

  const handlerToggle = () => {
    setOpen(!open);
  };

  const handlerItem = (type: Theme) => {
    setColorTheme(type);
    setOpen(false);
  };

  return (
    <Popover.Root defaultOpen={open} open={open} onOpenChange={handlerToggle}>
      <Popover.Trigger asChild>
        <div className={styles.triggerContainer}>
          <ThemeIcon type={colorTheme} size={28} />
          <Badge size={"s"}>Бета</Badge>
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className={styles.popoverContent}
          sideOffset={16}
          collisionPadding={5}
        >
          <PopoverItem type="system" handler={handlerItem} focus={colorTheme}>
            <ThemeIcon type="system" size={24} />
            Как на устройстве
          </PopoverItem>
          <PopoverItem type="light" handler={handlerItem} focus={colorTheme}>
            <ThemeIcon type="light" size={24} />
            Светлая
          </PopoverItem>
          <PopoverItem type="dark" handler={handlerItem} focus={colorTheme}>
            <ThemeIcon type="dark" size={24} />
            Темная
          </PopoverItem>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export default ColorScheme;
