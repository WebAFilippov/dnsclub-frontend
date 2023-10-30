import { useState } from "react";
import Button from "../../Button";
import Input from "../../Input";
import { Dialog, DialogTrigger, DialogContent } from "../../Modal";

const AuthBtn = () => {
  const [openModal, isOpenModal] = useState(false);

  const toogleOpenModal = () => {
    isOpenModal(!openModal);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    console.log(e.target.login.value);
  };

  return (
    <>
      <Dialog open={openModal} onOpenChange={toogleOpenModal}>
        <DialogTrigger asChild>
          <Button type="auth">Войти</Button>
        </DialogTrigger>
        <DialogContent>
          <form action="submit" onSubmit={handleSumbit}>
            <Input type="text" title="Телефон или e-mail" />
            <button type="submit">отправить</button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AuthBtn;
