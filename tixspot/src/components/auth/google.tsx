import React from "react"
import { getUserData as getAuthData, setUser } from "@/redux/features/authSlice"
import { AppDispatch } from "@/redux/store"
import {
  GoogleLogin,
  GoogleOAuthProvider,
  useGoogleLogin,
} from "@react-oauth/google"
import { useDispatch } from "react-redux"

import { googleAuth } from "../api-calls/google-auth"
import updateUserAuthenticationStatus from "./update-user-auth-status"

async function sendToBackend(token: string, dispatch: any) {
  try {
    const response = await googleAuth(token)
    console.log(response)
    updateUserAuthenticationStatus(dispatch, {
      email: response.user.email,
      isAuthenticated: true,
      accessToken: response.access_token,
      userName: "",
    })
  } catch (error) {
    console.log(error)
  }
}

function ContinueWithGoogle({ isLoading, setIsLoading }: any) {
  console.log(isLoading)
  const dispatch = useDispatch<AppDispatch>()
  return (
    <GoogleOAuthProvider clientId="249910114863-58vtiqb90mcm87h5vopi0b3c9v9nhfgl.apps.googleusercontent.com">
      <div className="w-96 flex items-center justify-center">
        <GoogleLogin
          onSuccess={(credentialResponse: any) => {
            console.log(credentialResponse)
            sendToBackend(credentialResponse.credential, dispatch)
          }}
          onError={() => {
            console.log("Login Failed")
          }}
          theme="outline"
          type="standard"
          shape="rectangular"
          width={1}
          logo_alignment="center"
          text="continue_with"
        />
      </div>
    </GoogleOAuthProvider>
  )
}
export default ContinueWithGoogle
