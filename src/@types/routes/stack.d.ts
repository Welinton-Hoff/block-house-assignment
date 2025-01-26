declare namespace ReactNavigation {
  export interface RootParamList extends RootStackParamList {
    Home: NavigationStackProp<string>;
    Login: NavigationStackProp<string>;
    SignUp: NavigationStackProp<string>;
  }
}
