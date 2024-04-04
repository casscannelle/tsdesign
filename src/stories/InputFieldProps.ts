
export interface InputFieldProps {
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    fontWeight?: 'regular' | 'bold';
  }