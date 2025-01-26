import React, { useEffect, useState } from "react";

import { InputText } from "src/components/InputText";
import { EyeIcon } from "src/components/icons/EyeIcon";
import { PasswordCriteria } from "../PasswordCriteria";

import { useSignUp } from "src/zustand/signUp";
import { useFormValidator } from "src/hooks/useFormValidator";

import * as S from "./styles";

export function SignUpForm() {
  const { form, onReset, onFormChange } = useSignUp();

  const { email, password, confirmPassword } = form;

  const {
    emailInputError,
    onValidateEmail,
    onValidatePassword,
    passwordInputError,
  } = useFormValidator({ email, password });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] =
    useState<string | undefined>();

  function togglePasswordVisibility() {
    setIsPasswordVisible((prev) => !prev);
  }

  function toggleConfirmPasswordVisibility() {
    setIsConfirmPasswordVisible((prev) => !prev);
  }

  function onValidateConfirmPassword() {
    const doesConfirmPasswordMatches = password == confirmPassword;

    setConfirmPasswordErrorMessage(
      !doesConfirmPasswordMatches ? "Passwords does not match" : undefined
    );
  }

  useEffect(() => {
    return () => onReset();
  }, []);

  return (
    <S.Container>
      <InputText
        label="Email"
        value={email}
        autoCapitalize="none"
        onBlur={onValidateEmail}
        placeholder="Enter your email"
        errorMessage={emailInputError}
        onChangeText={(email) => onFormChange("email", email)}
      />

      <InputText
        label="Password"
        value={password}
        autoCapitalize="none"
        onBlur={onValidatePassword}
        placeholder="Enter your password"
        errorMessage={passwordInputError}
        secureTextEntry={!isPasswordVisible}
        onIconPress={togglePasswordVisibility}
        icon={<EyeIcon isVisible={isPasswordVisible} />}
        onChangeText={(password) => onFormChange("password", password)}
      />

      <PasswordCriteria />

      <InputText
        autoCapitalize="none"
        value={confirmPassword}
        label="Confirm Password"
        onBlur={onValidateConfirmPassword}
        placeholder="Confirm your password"
        errorMessage={confirmPasswordErrorMessage}
        secureTextEntry={!isConfirmPasswordVisible}
        onIconPress={toggleConfirmPasswordVisibility}
        icon={<EyeIcon isVisible={isConfirmPasswordVisible} />}
        onChangeText={(confirmPassword) =>
          onFormChange("confirmPassword", confirmPassword)
        }
      />
    </S.Container>
  );
}
