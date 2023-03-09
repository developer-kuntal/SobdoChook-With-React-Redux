import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {

    const { loginWithRedirect, user } = useAuth0()
    console.log("Auth0 Data: ",user);
    return (
        <button
            onClick={() => loginWithRedirect()}
        >Log In</button>
    )
}

export default LoginButton