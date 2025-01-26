import styled from "styled-components/native";

import theme from "src/theme";

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: { gap: 24 },
  showsVerticalScrollIndicator: false,
})``;

export const SignUpContainer = styled.View`
  gap: 4px;
  align-items: center;
  flex-direction: row;
`;

export const SignUpText = styled.Text`
  font-size: 14px;
  line-height: 21px;
  color: ${theme["gray-300"]};
`;

export const SignUpButtonText = styled.Text`
  font-size: 14px;
  line-height: 21px;
  color: ${theme["green-300"]};
`;
