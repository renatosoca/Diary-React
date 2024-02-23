import { ChangeEvent, FC, HTMLInputTypeAttribute } from 'react';
import { FilledInputProps, InputProps, OutlinedInputProps, TextField } from '@mui/material';

interface InputProp {
  fullWidth?: boolean;
  label?: string;
  name: string;
  value: string | number;
  defaultValue?: string | number;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  error?: boolean;
  helperText?: string;
  size?: 'medium' | 'small';
  disabled?: boolean;
  minRows?: string | number;
  rows?: string | number;
  multiline?: boolean;
  InputProps?: Partial<FilledInputProps> | Partial<OutlinedInputProps> | Partial<InputProps>;
  variant?: 'standard' | 'outlined' | 'filled';

  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const InputComponent: FC<InputProp> = ({
  fullWidth,
  label,
  name,
  value,
  defaultValue,
  placeholder,
  type = 'text',
  error = false,
  helperText,
  size,
  disabled = false,
  minRows,
  rows,
  multiline = false,
  InputProps,
  variant,

  onChange,
}) => {
  return (
    <TextField
      fullWidth={fullWidth}
      label={label}
      name={name}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      type={type}
      size={size}
      error={error}
      helperText={error ? helperText : ''}
      variant={variant}
      disabled={disabled}
      minRows={minRows}
      rows={rows}
      multiline={multiline}
      InputProps={InputProps}
      onChange={(e) => {
        onChange && onChange(e);
      }}
      sx={{}}
    />
  );
};
