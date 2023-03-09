import './App.css';
import React, { useEffect, useState } from 'react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import BottomNavBar from './components/NavBar/BottomNavBar';

import { 
  HomeScreen,
  Dashboard,
  Profile, 
  BuyMembership, 
  KYC, 
  Notify, 
  Settings,
  Test,
  Error404,
  AdminDashboard
} from './components/Routes';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { setcurrentURIPath } from './actions/index';


function App() {
  // const dispatch = useDispatch();
  // dispatch(setcurrentURIPath('/'));
  // const path = useResolvedPath('/');
  // console.log("P:",path);
  
  const { user, isAuthenticated, isLoading } = useAuth0();
  // const currentURILocationPath = useSelector((state: RootStateOrAny) => state.currentURIPath);
  const currentURILocationPath = useSelector((state: any) => state.currentURIPath);
  console.log("L: ",currentURILocationPath);
  
  // const [location, setLocation] = useState(useLocation());
  // let loc = useLocation();
  // useEffect(() => {
  //   setLocation(loc);
  //   console.log("L: ", location);
  // },[location])
  // let location = window.location;
  // console.log("L: ", location.pathname);
  if(isLoading) return <div>Loading...</div>

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/buymembership" element={<BuyMembership/>}></Route>
          <Route path="/kyc" element={<KYC/>}></Route>
          <Route path="/notify" element={<Notify/>}></Route>
          <Route path="/settings" element={<Settings/>}></Route>
          <Route path="/settings" element={<Settings/>}></Route>
          <Route path="/test" element={<Test/>}></Route>
          <Route path='/admin' element={<AdminDashboard/>}></Route>
          <Route path="*" element={<Error404/>}></Route>
        </Routes>
        {!((window.location.pathname === '/') || (window.location.pathname === '/admin')) && <BottomNavBar/>}
      </Router>
      {/* <LoginButton/>
      <LogoutButton/> */}
    </>
  );
}

export default App;
