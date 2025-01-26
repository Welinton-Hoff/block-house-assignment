export interface ILoginForm {
  email: string;
  password: string;
}

export interface ILoginState {
  form: ILoginForm;
  isAuthenticated: boolean;
}

export type TLoginFormValue = string | boolean;

interface ILoginActions {
  onReset: () => void;
  setIsAuthenticated: (value: boolean) => void;
  onFormChange: (name: keyof ILoginForm, value: TLoginFormValue) => void;
}

export type TLoginSlice = ILoginState & ILoginActions;
