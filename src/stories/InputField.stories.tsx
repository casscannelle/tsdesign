import InputField from "./InputField";
import type { InputFieldProps } from "./InputFieldProps";

const regularInput: InputFieldProps = {
  type: "text",
  placeholder: "Fonte regular",
};

const boldInput: InputFieldProps = {
  type: "text",
  placeholder: "Negrito",
  fontWeight: "bold",
};

export default {
  title: "Components/Input Field",
};

export const Regular = () => <InputField {...regularInput} />;
export const Bold = () => <InputField {...boldInput} />;
