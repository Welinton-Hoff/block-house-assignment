export interface ISignUpForm {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ISignUpState {
  form: ISignUpForm;
}

export type TSignUpFormValue = string | boolean;

interface ISignUpActions {
  onReset: () => void;
  onFormChange: (name: keyof ISignUpForm, value: TSignUpFormValue) => void;
}

export type TSignUpSlice = ISignUpState & ISignUpActions;
