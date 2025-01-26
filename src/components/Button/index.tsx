import React from "react";
import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";
import { SemiBoldMediumWhite } from "../texts";

interface IButtonProps extends TouchableOpacityProps {
  label: string;
}

export function Button({ label, ...rest }: Readonly<IButtonProps>) {
  return (
    <S.Container {...rest}>
      <SemiBoldMediumWhite>{label}</SemiBoldMediumWhite>
    </S.Container>
  );
}
