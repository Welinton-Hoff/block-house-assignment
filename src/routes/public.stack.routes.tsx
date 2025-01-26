import { createStackNavigator } from "@react-navigation/stack";

import { Login } from "src/scenes/Login";
import { SignUp } from "src/scenes/SignUp";

import { EStackRoutes } from "src/@types/routes";

const Stack = createStackNavigator();

export function PublicStackRoutes() {
  const screenOptions = { headerShown: false };

  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={EStackRoutes.Login}
    >
      <Stack.Screen name={EStackRoutes.Login} component={Login} />
      <Stack.Screen name={EStackRoutes.SignUp} component={SignUp} />
    </Stack.Navigator>
  );
}
