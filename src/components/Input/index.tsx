import React, { useState } from "react";
import classNames from "classnames/bind";

import s from "./Input.module.scss";

const cn = classNames.bind(s);

type InputProps = {
  type:"text" | "password"
  title: string;
  inputValue: string;
  setInputValue: () => void;
}

const Input: React.FC<InputProps> = ({ type, title, inputValue, setInputValue}) => {  
  const [focus, isFocus] = useState(false);

  const generateId = `input-${Math.random()}`

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFocus = () => {
    isFocus(true);
  };

  const handleBlur = (e) => {
    !e.target.value && isFocus(false);
  };

  return (
    <>
      <div className={cn("inputContainer", { active: focus })}>
        <label
          htmlFor={generateId}
          className={cn("label", { entity: focus || inputValue })}
        >
          {title}
        </label>
        <input
          id={generateId}
          type={type}
          className={cn("input")}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={inputValue}
          onChange={handleInputChange}
        />
        <div className={cn('faq')}>faq?</div>
      </div>
    </>
  );
};

export default Input;
