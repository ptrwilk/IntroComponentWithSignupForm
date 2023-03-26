import { TextField, InputAdornment, FormHelperTextProps } from "@mui/material";
import { ReactComponent as ErrorIcon } from "../../assets/icon-error.svg";
import { colors } from "../../colors";

interface ITestFieldComponentProps {
  className?: string;
  placeholder?: string;
  errorText?: string;
  error?: boolean;
  password?: boolean;
  value?: string;
  onValueChange?: (value?: string) => void;
}

const TestFieldComponent = ({
  className,
  placeholder,
  errorText,
  error,
  password,
  value,
  onValueChange,
}: ITestFieldComponentProps) => {
  return (
    <TextField
      value={value ?? ""}
      onChange={(e) => onValueChange?.(e.target.value)}
      className={className}
      placeholder={error ? undefined : placeholder}
      helperText={error ? errorText : undefined}
      FormHelperTextProps={formHelperTextStyle}
      error={error}
      type={password ? "password" : undefined}
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            {error && <ErrorIcon />}
          </InputAdornment>
        ),
        style: { color: error ? colors.red : colors.darkBlue },
      }}
      sx={{
        ".MuiOutlinedInput-root": {
          "&.Mui-focused fieldset": {
            borderColor: error ? colors.red : colors.darkBlue,
          },
          "&:hover fieldset": {
            borderColor: error ? colors.red : colors.darkBlue,
          },
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: error ? colors.red : colors.grayishBlue,
            borderWidth: error ? 2 : "auto",
          },
        },
      }}
    />
  );
};

const formHelperTextStyle: Partial<FormHelperTextProps> = {
  style: { textAlign: "right", fontStyle: "italic", color: colors.red },
};

export default TestFieldComponent;
