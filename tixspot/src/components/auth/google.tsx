import React from "react"
import {
  GoogleLogin,
  GoogleOAuthProvider,
  useGoogleLogin,
} from "@react-oauth/google"

import { Icons } from "@/components/icons"

import { Button } from "../ui/button"

function LoginWithGoogle({ isLoading, setIsLoading }: any) {
  console.log(isLoading)
  return (
    <GoogleOAuthProvider clientId="249910114863-58vtiqb90mcm87h5vopi0b3c9v9nhfgl.apps.googleusercontent.com">
      <div className="w-96 flex items-center justify-center">
        <GoogleLogin
          onSuccess={(credentialResponse: any) => {
            console.log(credentialResponse)
          }}
          onError={() => {
            console.log("Login Failed")
          }}
          theme="outline"
          type="standard"
          shape="rectangular"
          width={1}
          logo_alignment="center"
        />
        {/* <p>a </p> */}
      </div>
    </GoogleOAuthProvider>
  )
}
function Login({ setIsLoading }: any) {
  // const login = useGoogleLogin({
  //   onSuccess: (tokenResponse) => {
  //     console.log(tokenResponse)
  //     setIsLoading(setIsLoading(false))
  //     //send token to backend to verify it
  //   },
  //   flow: "auth-code",
  // })
  return <div></div>
}

export default LoginWithGoogle
