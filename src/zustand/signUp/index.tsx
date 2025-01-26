import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import {
  ISignUpForm,
  ISignUpState,
  TSignUpSlice,
  TSignUpFormValue,
} from "./types";

const initialState: ISignUpState = {
  form: {} as ISignUpForm,
};

export const useSignUp = create<TSignUpSlice>()(
  immer((set) => ({
    ...initialState,
    onReset: () => set(initialState),
    onFormChange: (name: keyof ISignUpForm, value: TSignUpFormValue) => {
      set((state) => ({ ...state, form: { ...state.form, [name]: value } }));
    },
  }))
);
