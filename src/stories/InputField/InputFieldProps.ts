//intersection

type InputFieldPropsBase = {
  type: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

type InputFieldPropsExtra = {
  fontWeight?: 'bold' | 'normal';
};

export type InputFieldProps = InputFieldPropsBase & InputFieldPropsExtra;