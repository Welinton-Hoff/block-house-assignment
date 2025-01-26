import styled from "styled-components/native";

import theme from "src/theme";

interface IStyledProps {
  color?: string;
  enableBorderBottom?: boolean;
}

export const Container = styled.View<IStyledProps>`
  width: 100%;
  padding: 12px 16px;
  flex-direction: row;
  justify-content: center;
  border-bottom-width: 1px;
  border-color: ${theme["gray-600"]};
`;

export const LeftSide = styled.View`
  width: auto;
  min-width: 64px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const MainContent = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const RightSide = styled.View`
  width: auto;
  min-width: 64px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const TouchableButton = styled.TouchableOpacity`
  padding: 0 2px;
`;
