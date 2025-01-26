import React, { ReactNode } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

import theme from "src/theme";
import * as S from "./styles";
import { SemiBoldLargeWhite } from "src/components/texts";

export interface IHeaderProps {
  title?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  hideLeftIcon?: boolean;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
}

export function Header(props: Readonly<IHeaderProps>) {
  const {
    title,
    rightIcon,
    onLeftIconPress,
    onRightIconPress,
    hideLeftIcon = false,
    leftIcon = <AntDesign name="arrowleft" size={24} color={theme.white} />,
  } = props;

  const { goBack } = useNavigation();

  function onBackNavigate() {
    if (onLeftIconPress) onLeftIconPress();
    else goBack();
  }

  return (
    <S.Container>
      <S.LeftSide>
        <S.TouchableButton onPress={onBackNavigate}>
          {hideLeftIcon ? null : leftIcon}
        </S.TouchableButton>
      </S.LeftSide>

      <S.MainContent>
        <SemiBoldLargeWhite numberOfLines={1}>{title}</SemiBoldLargeWhite>
      </S.MainContent>

      <S.RightSide>
        <S.TouchableButton onPress={onRightIconPress}>
          {rightIcon}
        </S.TouchableButton>
      </S.RightSide>
    </S.Container>
  );
}
