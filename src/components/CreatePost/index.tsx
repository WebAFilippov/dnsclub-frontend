import * as Popover from "@radix-ui/react-popover";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import { PiPencilLight } from "react-icons/pi";
import { LuMessagesSquare } from "react-icons/lu";
import { GoTriangleDown } from "react-icons/go";

import s from "./CreatePost.module.scss";

import Button from "../Button";
import PopoverItem from "../PopoverItem";

const cx = classNames.bind(s);

const CreatePost: React.FC = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handlerToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Popover.Root defaultOpen={open} open={open} onOpenChange={handlerToggle}>
        <Popover.Trigger asChild>
          <div className={s.triggerContainer}>
            <Button type="secondary" size="m">
              Создать<GoTriangleDown className={cx('arrow', {"open": open})} />
            </Button>
          </div>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            sideOffset={16}
            collisionPadding={5}
            align="end"
            className={s.popoverContent}
          >
            <div>
              <PopoverItem
                onClick={() => {
                  navigate("/post/create");
                  setOpen(false);
                }}
              >
                <PopoverItem.Title>
                  <PiPencilLight />
                  Статья
                </PopoverItem.Title>
                <PopoverItem.Description>
                  Полезный для читателей контент
                </PopoverItem.Description>
              </PopoverItem>
              <PopoverItem
                onClick={() => {
                  navigate("/discussions/create");
                  setOpen(false);
                }}
              >
                <PopoverItem.Title>
                  <LuMessagesSquare />
                  Тема
                </PopoverItem.Title>
                <PopoverItem.Description>
                  Обсуждение товара
                </PopoverItem.Description>
              </PopoverItem>
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
};

export default CreatePost;
