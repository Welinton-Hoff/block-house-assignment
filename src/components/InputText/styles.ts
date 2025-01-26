import styled from "styled-components/native";
import { DefaultTheme } from "styled-components";

import theme from "src/theme";

interface IInputContainerStyleProps {
  hasError: boolean;
  theme: DefaultTheme;
}

export const Container = styled.View`
  gap: 8px;
`;

export const InputContainer = styled.View<IInputContainerStyleProps>`
  gap: 8px;
  padding: 12px;
  border-radius: 8px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid
    ${({ hasError }: IInputContainerStyleProps) =>
      theme[hasError ? "red-500" : "gray-400"]};
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: theme["gray-400"],
})`
  flex: 1;
  color: ${theme.white};
`;
