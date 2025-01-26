import styled from "styled-components/native";

import theme from "src/theme";
import { RegularSmallLightGray } from "src/components/texts";

export const Container = styled.View`
  gap: 8px;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid ${theme["gray-400"]};
`;

export const CriteriaContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-start;
`;

export const BulletPoint = styled.View`
  width: 6px;
  height: 6px;
  margin-top: 7px;
  margin-right: 8px;
  border-radius: 3px;
  background-color: ${theme["green-500"]};
`;

export const CriteriaDescription = styled(RegularSmallLightGray)`
  flex: 1;
`;
