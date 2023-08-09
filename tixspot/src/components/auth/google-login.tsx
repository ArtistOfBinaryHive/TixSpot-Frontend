import React from 'react';

import { useGoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Button } from '../ui/button';

function GoogleLoginButton() {
    const login = useGoogleLogin({
        onSuccess: codeResponse => console.log(codeResponse),
        flow: 'auth-code',
      });
      return(
      <>
      <Button onClick={() => login()}>
  Sign in with Google 🚀{' '}
</Button>
</>)
}



export default GoogleLoginButton;