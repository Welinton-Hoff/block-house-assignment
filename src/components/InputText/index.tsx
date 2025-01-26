import React, { ReactNode } from "react";
import { TextInputProps, TouchableOpacity } from "react-native";

import * as S from "./styles";
import { RegularSmallRed, SemiBoldMediumWhite } from "../texts";

interface IInputTextProps extends TextInputProps {
  label: string;
  icon?: ReactNode;
  errorMessage?: string;
  onIconPress?: () => void;
}

export function InputText(props: Readonly<IInputTextProps>) {
  const { label, icon, errorMessage, onIconPress, ...rest } = props;

  return (
    <S.Container>
      <SemiBoldMediumWhite>{label}</SemiBoldMediumWhite>

      <S.InputContainer hasError={errorMessage?.length}>
        <S.Input {...rest} />

        {icon && (
          <TouchableOpacity onPress={onIconPress}>{icon}</TouchableOpacity>
        )}
      </S.InputContainer>

      {errorMessage && <RegularSmallRed>{errorMessage}</RegularSmallRed>}
    </S.Container>
  );
}
