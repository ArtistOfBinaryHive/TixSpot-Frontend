import { stat } from "fs"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { authType } from "../types/authTypes"

// initial state
const initialState: authType = {
  userEmail: null,
  userName: null,
  isAuthenticated: false,
}

// creating a slice with a name and the required reducer
export const authSlice = createSlice({
  name: "userAuthStatus",
  initialState,
  reducers: {
    setUser: (state: authType, action: PayloadAction<authType>) => {
      state.isAuthenticated = action.payload.isAuthenticated
      state.userEmail = action.payload.userEmail
      state.userName = action.payload.userName
    },
  },
})

// setter
export const { setUser } = authSlice.actions

// get the user data
export const getUserData = (state: { userAuthStatus: authType }) =>
  state.userAuthStatus

export default authSlice.reducer
