import theme from "src/theme";

import styled, { css } from "styled-components/native";

const semiBoldTextStyles = css`
  font-weight: 600;
`;

const regularTextStyles = css`
  font-weight: 400;
`;

const xLargeTextStyles = css`
  font-size: 25px;
  line-height: 37px;
`;

const largeTextStyles = css`
  font-size: 18px;
  line-height: 27px;
`;

const mediumTextStyles = css`
  font-size: 16px;
  line-height: 24px;
`;

const smallTextStyles = css`
  font-size: 14px;
  line-height: 21px;
`;

const whiteColorStyle = css`
  color: ${theme.white};
`;

const redColorStyle = css`
  color: ${theme["red-500"]};
`;

const lightGrayColorStyle = css`
  color: ${theme["gray-100"]};
`;

export const SemiBoldMediumWhite = styled.Text`
  ${whiteColorStyle}
  ${mediumTextStyles}
  ${semiBoldTextStyles}
`;

export const RegularSmallRed = styled.Text`
  ${redColorStyle}
  ${smallTextStyles}
  ${regularTextStyles}
`;

export const SemiBoldLargeWhite = styled.Text`
  ${largeTextStyles}
  ${whiteColorStyle}
  ${semiBoldTextStyles}
`;

export const SemiBoldExtraLargeWhite = styled.Text`
  ${whiteColorStyle}
  ${xLargeTextStyles}
  ${semiBoldTextStyles}
`;

export const SemiBoldLargeLightGray = styled.Text`
  ${largeTextStyles}
  ${semiBoldTextStyles}
  ${lightGrayColorStyle}
`;

export const RegularSmallLightGray = styled.Text`
  ${smallTextStyles}
  ${regularTextStyles}
  ${lightGrayColorStyle}
`;
