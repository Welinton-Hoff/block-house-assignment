/**
 * This module defines a set of styled text components using styled-components for a React Native application.
 * Each component is a styled version of the native Text component, with predefined styles for font size,
 * line height, font weight, and color. The styles are composed using the `css` helper from styled-components,
 * allowing for reusable and consistent styling across the application.
 *
 * The available text components include:
 *
 * - `SemiBoldMediumWhite`: A medium-sized, semi-bold text with white color.
 * - `RegularSmallRed`: A small-sized, regular-weight text with red color.
 * - `SemiBoldLargeWhite`: A large-sized, semi-bold text with white color.
 * - `SemiBoldExtraLargeWhite`: An extra-large-sized, semi-bold text with white color.
 * - `SemiBoldLargeLightGray`: A large-sized, semi-bold text with light gray color.
 * - `RegularSmallLightGray`: A small-sized, regular-weight text with light gray color.
 *
 * The color styles are derived from a theme object imported from "src/theme", ensuring consistency with
 * the application's color palette. The font weights and sizes are defined using CSS-in-JS syntax, providing
 * a flexible and maintainable approach to styling.
 */

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
