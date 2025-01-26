import { useLogin } from "src/zustand/login";

import { PublicStackRoutes } from "./public.stack.routes";
import { PrivateStackRoutes } from "./private.stack.routes";

export function Routes() {
  const { isAuthenticated } = useLogin();
  return isAuthenticated ? <PrivateStackRoutes /> : <PublicStackRoutes />;
}
