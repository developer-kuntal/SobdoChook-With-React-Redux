import React from 'react'
import { useNavigate } from 'react-router-dom';

const SignOut = () => {
    
    const navigate = useNavigate();

    const signOut = () => {
        localStorage.removeItem("token");
        window.location.pathname = '/';
    }

    return (
        <button type='button' onClick={signOut}>SignOut</button>
    )
}

export default SignOut