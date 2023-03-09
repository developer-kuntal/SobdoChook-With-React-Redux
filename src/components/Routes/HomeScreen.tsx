import React, { useState } from 'react'
import SignIn from '../Button/SignIn'
import SignUp from '../Button/SignUp'
import DrawSobdoChhokSomadhan from '../SobdoChhok/DrawSobdoChhokSomadhan'
import SignOut from '../Button/SignOut';
import { createUserProfile } from '../../actions/index';
import { useDispatch } from 'react-redux';

const HomeScreen = () => {

  const [ isVerified, setisVerified ] = useState(false);
  const dispatch = useDispatch();
  
  const istokenVerified =  async() => {
    const data = await fetch('http://localhost:4000/istokenverified',{
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': localStorage.getItem("token")
        } as any
    }).then((t) => {
        return t.json()
    }).then((data) => {
        console.log(data.data)
        // localStorage.setItem("token", "Bearer "+data.token);
        dispatch(createUserProfile(data.data));
        return data;
    })
    // console.log("T: ",data.token);
    if(!data) {
        setisVerified(false)
    } else {
        data.varified ? setisVerified(true) : setisVerified(false)
    }
  }

  istokenVerified();

  return (
    <div>
      <br />
      <br />
      {isVerified ? <div><DrawSobdoChhokSomadhan/><SignOut/></div> : <div><SignIn/>
      <SignUp/></div> }
      <br />
      <br />
      <br />
    </div>
  )
}

export default HomeScreen