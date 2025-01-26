import React, { useMemo } from "react";

import { Button } from "src/components/Button";
import { PageView } from "src/components/PageView";
import { LoginForm } from "./components/LoginForm";

import { useLogin } from "src/zustand/login";
import { isEmailValid, isPasswordValid } from "src/utils/Strings";

import * as S from "./styles";

export function Login() {
  const { form, setIsAuthenticated } = useLogin();

  const { email, password } = form;

  const isLoginFormValid = useMemo(
    () => isEmailValid(email) && isPasswordValid(password),
    [email, password]
  );

  function handleLogin() {
    setIsAuthenticated(true);
  }

  return (
    <PageView hideLeftIcon title="Block House">
      <S.Container>
        <LoginForm />

        <Button
          label="Login"
          onPress={handleLogin}
          disabled={!isLoginFormValid}
        />
      </S.Container>
    </PageView>
  );
}
