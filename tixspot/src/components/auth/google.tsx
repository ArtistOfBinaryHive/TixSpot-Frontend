import React from "react"
import {
  GoogleLogin,
  GoogleOAuthProvider,
  useGoogleLogin,
} from "@react-oauth/google"

import { googleAuth } from "../api-calls/google-auth"

async function sendToBackend(token: string) {
  const response = await googleAuth(token)
  console.log(response)
}

function ContinueWithGoogle({ isLoading, setIsLoading }: any) {
  console.log(isLoading)
  return (
    <GoogleOAuthProvider clientId="249910114863-58vtiqb90mcm87h5vopi0b3c9v9nhfgl.apps.googleusercontent.com">
      <div className="w-96 flex items-center justify-center">
        <GoogleLogin
          onSuccess={(credentialResponse: any) => {
            console.log(credentialResponse)
            sendToBackend(credentialResponse.credential)
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
