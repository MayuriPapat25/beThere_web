import React from 'react';
import './App.css';
import Login from './components/login/login';
import Cookie from './services/cookie';
import Home from './components/home';
function App() {
  // const checkCookie = () => {
  //   console.log(' in getcookie');
  //   let loginStatus = Cookie.getLoginStatus();
  //   console.log(' xxxxxxx ---- loginStatus :', loginStatus);
  //   return loginStatus ? loginStatus : null;
  // }
  return (
    <div className="wrapper" >
      {
        // checkCookie() ? <Home/> : <Login/>
        Cookie.getLoginStatus() !== undefined ? <Home/> : <Login/>
      }
    </div>
  );
}

export default App;
