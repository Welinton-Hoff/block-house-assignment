import React, { ReactNode } from "react";

import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from "react-native-keyboard-aware-scroll-view";

export interface IKeyboardAvoidingViewProps
  extends KeyboardAwareScrollViewProps {
  children: ReactNode;
}

export function KeyboardAvoidView(props: Readonly<IKeyboardAvoidingViewProps>) {
  const { children, ...rest } = props;

  return (
    <KeyboardAwareScrollView
      {...rest}
      style={{ flex: 1 }}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </KeyboardAwareScrollView>
  );
}
