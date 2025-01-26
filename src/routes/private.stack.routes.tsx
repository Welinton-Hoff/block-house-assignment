import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "src/scenes/Home";
import { EStackRoutes } from "src/@types/routes";

const Stack = createStackNavigator();

export function PrivateStackRoutes() {
  const screenOptions = { headerShown: false };

  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={EStackRoutes.Home}
    >
      <Stack.Screen name={EStackRoutes.Home} component={Home} />
    </Stack.Navigator>
  );
}
