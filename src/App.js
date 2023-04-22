import './App.css'
import {Route, Routes, Link, Navigate} from "react-router-dom";
import HomePage from "./Layout/HomePage/HomePage";
import About from "./Layout/About/About";
import Blog from "./Layout/Blog/Blog";
import Pricing from "./Layout/Pricing/Pricing";
import SignUp from "./components/SignUp/SignUp"
import LogIn from "./components/LogIn/LogIn";
import SettingsUser from "./components/SettingsUser/SettingsUser";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useAuth} from "./hooks/use-auth";
import {onAuthStateChanged, deleteUser, signInWithEmailAndPassword} from "firebase/auth";
import {auth, provider} from "./firebase";
import {removeUser, setUser} from "./store/slices/userSlice";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";

function App() {
    const dispatch = useDispatch()
    const {isAuth, email} = useAuth();

    onAuthStateChanged(auth, (user) => {
        if (user) {
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.accessToken,
                username: user.displayName,
                photo: user.photoURL,
            }));
        } else {

        }
    });

    return  isAuth ? (
      <div className='App'>
          <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/About" element={<About/>}/>
              <Route path="/Pricing" element={<Pricing/>}/>
              <Route path="/Blog" element={<Blog/>}/>
              <Route path="/SignUp" element={<SignUp/>}/>
              <Route path="/LogIn" element={<LogIn/>}/>
              <Route path="/SettingsUser" element={<SettingsUser/>}/>
              <Route path="/BurgerMenu" element={<BurgerMenu/>}/>
              <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
          </Routes>
      </div>
  ) : ( <div className='App'>
          <Routes>
              <Route path="/" element={<SignUp/>}/>
              <Route path="/SignUp" element={<SignUp/>}/>
              <Route path="/LogIn" element={<LogIn/>}/>
              <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
          </Routes>
      </div>
  )
}

export default App;
