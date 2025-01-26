import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { InputText } from "src/components/InputText";
import { EyeIcon } from "src/components/icons/EyeIcon";

import { useLogin } from "src/zustand/login";
import { EStackRoutes } from "src/@types/routes";

import * as S from "./styles";
import { useFormValidator } from "src/hooks/useFormValidator";

export function LoginForm() {
  const { navigate } = useNavigation();
  const { form, onFormChange } = useLogin();

  const { email, password } = form;

  const {
    emailInputError,
    onValidateEmail,
    onValidatePassword,
    passwordInputError,
  } = useFormValidator(form);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prev) => !prev);
  }

  function handleSignUp() {
    navigate(EStackRoutes.SignUp);
  }

  return (
    <S.Container>
      <InputText
        label="Email"
        value={email}
        autoCapitalize="none"
        onBlur={onValidateEmail}
        errorMessage={emailInputError}
        placeholder="Enter your email"
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

      <S.SignUpContainer>
        <S.SignUpText>Don’t have an account?</S.SignUpText>

        <TouchableOpacity onPress={handleSignUp}>
          <S.SignUpButtonText>Sign up</S.SignUpButtonText>
        </TouchableOpacity>
      </S.SignUpContainer>
    </S.Container>
  );
}
