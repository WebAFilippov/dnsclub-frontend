import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  auth: boolean
  level: number
}

const initialState: IState = {
  auth: false,
  level: 1
}

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLevel: (state, actions: PayloadAction<number>): void => {
      state.level = actions.payload
    }
  }
})

export const { setLevel } = AuthSlice.actions;

export default AuthSlice.reducer;