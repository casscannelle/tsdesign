
import React from "react";
import "./InputField.css";
import { InputFieldProps } from "./InputFieldProps";

const InputField: React.FC<InputFieldProps> = (props) => {
  return (
    <input
      className={`input-field ${props.fontWeight ? `input-field--${props.fontWeight}` : ''}`}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default InputField;