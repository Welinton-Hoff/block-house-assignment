import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 24px 16px 16px 16px;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: { gap: 24 },
  showsVerticalScrollIndicator: false,
})``;
