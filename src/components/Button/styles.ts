import styled from "styled-components/native";
import { TouchableOpacityProps } from "react-native";

import theme from "src/theme";

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 12px 0;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  background-color: ${(props: TouchableOpacityProps) =>
    theme[props.disabled ? "green-700" : "green-500"]};
`;
