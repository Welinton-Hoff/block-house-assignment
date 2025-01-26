import { useCallback, useState } from "react";

import { isEmailValid, isPasswordValid } from "src/utils/Strings";

interface IFormValidatorData {
  email: string;
  password: string;
}

export function useFormValidator(props: Readonly<IFormValidatorData>) {
  const { email, password } = props;

  const [emailInputError, setEmailInputError] = useState<string | undefined>();
  const [passwordInputError, setPasswordInputError] = useState<
    string | undefined
  >();

  const onValidateEmail = useCallback(() => {
    const errorMessage = !isEmailValid(email) ? "Invalid email" : undefined;

    setEmailInputError(errorMessage);
  }, [email]);

  const onValidatePassword = useCallback(() => {
    const errorMessage = !isPasswordValid(password)
      ? "Invalid password"
      : undefined;

    setPasswordInputError(errorMessage);
  }, [password]);

  return {
    emailInputError,
    onValidateEmail,
    passwordInputError,
    onValidatePassword,
  };
}
