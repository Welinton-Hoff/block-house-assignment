import React, { useMemo } from "react";

import { Button } from "src/components/Button";
import { PageView } from "src/components/PageView";
import { SignUpForm } from "./components/SignUpForm";
import { KeyboardAvoidView } from "src/components/KeyboardAvoidView";

import { useSignUp } from "src/zustand/signUp";
import { isEmailValid, isPasswordValid } from "src/utils/Strings";

import * as S from "./styles";

export function SignUp() {
  const { form } = useSignUp();
  const { email, password, confirmPassword } = form;

  const isSignUpFormValid = useMemo(() => {
    return (
      isEmailValid(email) &&
      isPasswordValid(password) &&
      isEmailValid(confirmPassword)
    );
  }, [email, password, confirmPassword, isEmailValid, isPasswordValid]);

  return (
    <PageView title="Sign Up">
      <S.Container>
        <KeyboardAvoidView>
          <SignUpForm />
        </KeyboardAvoidView>

        <Button label="Sign Up" disabled={!isSignUpFormValid} />
      </S.Container>
    </PageView>
  );
}
