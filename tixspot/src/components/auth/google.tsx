import React from 'react';

import { useGoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Button } from '../ui/button';
import { Icons } from "@/components/icons";
function GoogleLogin({isLoading, setIsLoading}:any) {
    console.log(isLoading)
      return(<GoogleOAuthProvider clientId="249910114863-58vtiqb90mcm87h5vopi0b3c9v9nhfgl.apps.googleusercontent.com">
              <div>
          <Button
            variant="secondary"
            type="button"
            disabled={isLoading}
            className="w-full "
            onClick={() => setIsLoading(!isLoading)}
          >
            {isLoading ? (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
             <Login setIsLoading={setIsLoading} />
             
            )}
            Sign in with Google
            
          </Button>
          
        </div>
      <Login/>

      </GoogleOAuthProvider>)
}
function Login({setIsLoading}:any) {
    const login = useGoogleLogin({
        onSuccess: tokenResponse => {
            console.log(tokenResponse)
            setIsLoading(setIsLoading(false))
            //send token to backend to verify it
        },
      });
      return(<div className="absolute h-full w-full " onClick={() => login()}>
    </div>)
}

export default GoogleLogin;