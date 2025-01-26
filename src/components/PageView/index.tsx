import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import theme from "src/theme";
import { Header, IHeaderProps } from "./components/Header";

export interface IPageViewProps extends IHeaderProps {
  isLoading?: boolean;
  backgroundColor?: string;
  children: React.ReactNode;
}

export function PageView(props: Readonly<IPageViewProps>) {
  const {
    children,
    isLoading = false,
    backgroundColor = theme["gray-900"],
    ...headerProps
  } = props;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor }}>
      <Header {...headerProps} />
      {children}
    </SafeAreaView>
  );
}
