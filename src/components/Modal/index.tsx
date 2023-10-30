import React, { ReactNode } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { AiOutlineClose } from "react-icons/ai";

import s from "./Modal.module.scss";

type Props = {
  children?: ReactNode;
};

export const DialogContent = React.forwardRef<HTMLDivElement, Props>(
  ({ children, ...props }, forwardedRef) => (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className={s.DialogOverlay} />
      <DialogPrimitive.Content
        {...props}
        ref={forwardedRef}
        className={s.DialogContent} 
      >
        {children}
        <DialogPrimitive.Close className={s.DialogClose}>
          <AiOutlineClose className={s.CloseIcon} />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )
);

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
