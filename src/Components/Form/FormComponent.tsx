import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import TestFieldComponent from "../TextField/TestFieldComponent";
import styles from "./styles.module.css";

type Validator = {
  errorText: string;
  validate: (value?: string) => boolean;
};

type InputField = {
  placeholder: string;
  errorText?: string;
  value?: string;
  error?: boolean;
  password?: boolean;
  validators: Validator[];
};

const FormComponent = () => {
  const validateEmpty = (value?: string) => (value ? true : false);
  const validateEmail = (value?: string) => {
    if (!value) return false;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value!);
  };

  const [inputFields, setInputFields] = useState<InputField[]>([
    {
      placeholder: "First Name",
      validators: [
        {
          validate: validateEmpty,
          errorText: "First Name cannot be empty",
        },
      ],
    },
    {
      placeholder: "Last Name",
      validators: [
        {
          validate: validateEmpty,
          errorText: "Last Name cannot be empty",
        },
      ],
    },
    {
      placeholder: "Email Address",
      validators: [
        {
          validate: validateEmpty,
          errorText: "Email Address cannot be empty",
        },
        {
          validate: validateEmail,
          errorText: "Looks like this is not an email",
        },
      ],
    },
    {
      placeholder: "Password",
      password: true,
      validators: [
        {
          validate: validateEmpty,
          errorText: "Password cannot be empty",
        },
      ],
    },
  ]);

  const handleValueChange = (index: number, value?: string) => {
    setInputFields(() => {
      const newInputFields = [...inputFields];

      newInputFields[index] = {
        ...newInputFields[index],
        value: value,
        error: false,
      };

      return newInputFields;
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const newInputFields = [...inputFields];

    for (var i = 0; i < newInputFields.length; i++) {
      let error = false;
      let errorText = "";

      var validators = newInputFields[i].validators!;

      for (var validator of validators) {
        if (!validator.validate(newInputFields[i].value)) {
          error = true;
          errorText = validator.errorText;
          break;
        }
      }

      newInputFields[i] = {
        ...newInputFields[i],
        error: error,
        errorText: errorText,
      };
    }

    setInputFields(newInputFields);
  };

  return (
    <Box className={styles["container"]}>
      <form onSubmit={handleSubmit}>
        {inputFields.map(
          ({ placeholder, errorText, error, value, password }, key) => (
            <TestFieldComponent
              key={key}
              className={styles["input"]}
              placeholder={placeholder}
              errorText={errorText}
              error={error}
              value={value}
              password={password}
              onValueChange={(v) => handleValueChange(key, v)}
            />
          )
        )}
        <Button type="submit" className={styles["btn"]}>
          Claim your free trial
        </Button>
      </form>
      <Typography variant="body1" className={styles["text"]}>
        By clicking the button, you are agreeing to our{" "}
        <span className={styles["text-highlight"]}>Terms and Services</span>
      </Typography>
    </Box>
  );
};

export default FormComponent;
