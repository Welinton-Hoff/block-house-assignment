import React from "react";
import Entypo from "@expo/vector-icons/Entypo";

import theme from "src/theme";

interface IEyeIconProps {
  color?: string;
  isVisible: boolean;
}

export function EyeIcon(props: Readonly<IEyeIconProps>) {
  const { isVisible = true, color = theme["gray-400"] } = props;

  const iconName = isVisible ? "eye" : "eye-with-line";
  return <Entypo name={iconName} size={24} color={color} />;
}
