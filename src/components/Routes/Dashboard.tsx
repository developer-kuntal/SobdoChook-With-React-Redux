import React, { useState } from 'react';
// import LoginButton from './components/LoginButton';
// import LogoutButton from './components/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import BottomNavBar from '../NavBar/BottomNavBar';
import SvgLogo from '../SvgLogo';
import SobdoChhok from '../SobdoChhok/SobdoChhok';
import { useDispatch } from 'react-redux';
import { setcurrentURIPath } from '../../actions/index';

const Dashboard = () => {
  const dispatch = useDispatch();
  // const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading } = useAuth0();
  if(isLoading) return <div>Loading...</div>
  
  dispatch(setcurrentURIPath('/dashboard' as any));
  // return (
  //   <div>
  //     <div className="App">
  //       <SvgLogo width={50} height={50}/>
  //       {/* <h1>Counter {counter}</h1>
  //       <button onClick={() => dispatch(increment())}>+</button> */}
  //       {/* <button onClick={() => dispatch(decrement())}>-</button> */}
  //       <>
  //         {!isAuthenticated && <LoginButton/>}
  //         {isAuthenticated && <LogoutButton/>}
  //         {/* {JSON.stringify(user,null,2)} */}
  //       </>
  //     </div>
  //     {isAuthenticated && (
  //                 <div>
  //                     <img src={user?.picture} alt={user?.name}/>
  //                     <h2>{user?.name}</h2>
  //                     <p>{user?.email}</p>
  //                     <p>{user?.email_verified? "Verified User" : "Verify Your Email"}</p>
  //                 </div>
  //               )}
  //     {isAuthenticated && <SobdoChhok/>}
  //   </div>
  
  return (
    <div>
      {/* <Messages/> */}
      <div className="App">
        <SvgLogo width={50} height={50}/>
      </div>
      <SobdoChhok/>
      <br />
      <br />
      {/* <BottomNavBar/> */}
    </div>

  );
}

export default Dashboard