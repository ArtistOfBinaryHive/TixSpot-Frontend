import { getUserData as getAuthData, setUser } from "@/redux/features/authSlice"
import { AppDispatch } from "@/redux/store"
import { authType } from "@/redux/types/authTypes"
import { useDispatch, useSelector } from "react-redux"

export default function updateUserAuthenticationStatus(
  dispatch: any,
  userDetails: authType
) {
  // 3. Updates the global state of the user in redux

  try {
    dispatch(setUser(userDetails))
    console.log(userDetails)
  } catch (error) {
    console.log(error)
  }
}
