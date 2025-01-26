import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { ILoginForm, TLoginFormValue, TLoginSlice, ILoginState } from "./types";

const initialState: ILoginState = {
  isAuthenticated: false,
  form: {} as ILoginForm,
};

export const useLogin = create<TLoginSlice>()(
  immer((set) => ({
    ...initialState,
    onReset: () => set(initialState),
    setIsAuthenticated: (isAuthenticated: boolean) =>
      set((state) => ({ ...state, form: {} as ILoginForm, isAuthenticated })),
    onFormChange: (name: keyof ILoginForm, value: TLoginFormValue) => {
      set((state) => ({ ...state, form: { ...state.form, [name]: value } }));
    },
  }))
);
