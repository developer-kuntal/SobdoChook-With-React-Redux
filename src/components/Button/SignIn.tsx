import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

   
const SignIn = () => {
    
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ loginStatus, setloginStatus ] = useState(false);
    
    const reqBody = {
        email,
        password
    }
    
    // REACT Fetch POST Example
    // POST request using fetch with async/await
    // const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ title: 'React POST Request Example' })
    // };
    // const response = await fetch('https://reqres.in/api/posts', requestOptions);
    // const data = await response.json();
    // this.setState({ postId: data.id });

    const handleSignIn =  async() => {
        const data = await fetch('http://localhost:4000/login',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reqBody)
        }).then((t) => {
            return t.json()
        }).then((data) => {
            // console.log(data)
            localStorage.setItem("token", data.token);
            return data;
        })
        // console.log("T: ",data.token);
        if(!data) {
            setloginStatus(false)
        } else {
            data.auth ? setloginStatus(true) : setloginStatus(false)
        }
    }

    return (
        <div>
            <label>Email: </label>
            <input type='input' onChange={(e) => setEmail(e.target.value)}></input>
            <label>Password: </label>
            <input type='password' onChange={(e) => setPassword(e.target.value)}></input>
            <button onClick={handleSignIn}>Sign In</button>
            {loginStatus ? (window.location.pathname = '/') && <span></span> : <span>Login Required/Failed</span>}
        </div>
    )
}

export default SignIn