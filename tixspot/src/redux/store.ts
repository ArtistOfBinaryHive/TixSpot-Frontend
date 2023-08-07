import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useSelector } from "react-redux"

import authSlice from "./features/authSlice"

export const store = configureStore({
  reducer: {
    userAuthStatus: authSlice,
  },
})

// types (boilerplate)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
