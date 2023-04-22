import React, {Component, useState, useEffect} from "react";
import {getAuth, updatePhoneNumber, updateProfile} from "firebase/auth";
import {ref, uploadBytes, getDownloadURL, listAll, list,} from "firebase/storage";
import logo from "../../Assests/logo.png";
import {Link} from "react-router-dom";
import settings from "../../Assests/settings.png";
import {removeUser, setUser} from "../../store/slices/userSlice";
import {useDispatch} from "react-redux";
import {useAuth} from "../../hooks/use-auth";
import Sign from "../../Assests/Sign.png";
import Eye from "../../Assests/Eye.png";
import User from "../../Assests/User.png";
import './SettingsUser.css'
import {auth , storage} from "../../firebase";

function SettingsUser () {
    const dispatch = useDispatch()
    const {isAuth, token, photo, name, nickname, username} = useAuth();
    const [user, setUsername] = useState('');
    const [photourl, setPhotourl] = useState('');
    const auth = getAuth();
    const userInfo = auth.currentUser;

    function handleClickSaveSettings ( ) {
        updateProfile(userInfo, {
            displayName: user,
            photoURL : photourl,
        }).then((data) => {
            console.log(userInfo)
        }).catch((error) => {
        });
    }



    return (
        <div className="wrapper">
            <header>
                <div className="headers _container">
                    <div className="header__logo">
                        <Link to="/" style={{color: "white",
                            display: "flex",
                            alignItems: "center",
                        }}>
                            <img src={logo} alt=""/>
                            Marico
                        </Link>
                    </div>
                    <div className="header__nav__menu menu">
                        <nav id="menu" className="menu__body">
                            <ul className="menu__list">
                                <li><Link to="/About" style={{
                                    fontFamily: 'Poppins',
                                    fontWeight: 500,
                                    fontSize: 20,
                                    color: '#707070',
                                }}>
                                    About
                                </Link></li>
                                <li><Link to="/Pricing" style={{
                                    fontFamily: 'Poppins',
                                    fontWeight: 500,
                                    fontSize: 20,
                                    color: '#3C82F4',
                                }}>
                                    Pricing
                                </Link></li>
                                <li>
                                    <Link to="/Blog" style={{
                                        fontFamily: 'Poppins',
                                        fontWeight: 500,
                                        fontSize: 20,
                                        color: '#707070',
                                    }}>
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/SettingsUser" style={{
                                        fontFamily: 'Poppins',
                                        fontWeight: 500,
                                        fontSize: 20,
                                        color: '#707070',
                                    }}>
                                        Settings
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header__button">
                        <div className="header__userInfo__block" >
                            <div className="headers__text">
                                <p>Welcome </p>
                                <p> {name} {nickname} {username}</p>
                            </div>
                            <img style={{
                                width: 60,
                                height: 60,
                                borderRadius: "50%",
                            }} src={photo} alt=""/>
                        </div>
                        <div className="header__LogOut">
                            <Link to="/SignUp"><button style={{
                                width: 119,
                                height: 55,
                                fontFamily: 'Poppins',
                                fontWeight: 500,
                                fontSize: 20,
                                color: '#FFFFFF',
                                background: '#306EF7',
                                borderRadius: 5,
                            }} onClick={() => dispatch(removeUser())}>Log Out</button>
                            </Link>
                        </div>
                        <Link to="/BurgerMenu" className="icon-menu"><span></span></Link>
                    </div>
                </div>
            </header>
            <section>
                <div className="Settings _container">
                    <div className="Settings__title">
                        Settings
                    </div>
                    <div className="Settings__input__block">
                        <div className="Input__username__block">
                            <input
                                className="Input__username"
                                type="text"
                                placeholder="Username"
                                value={user}
                                onChange={(e) => setUsername(e.target.value)}
                                style={{
                                    background: "black",
                                    color: "white",
                                    marginRight: 7,
                                }}/>
                            <img src={User} alt="" style={{
                                width: 25.31,
                                height: 30.31,
                            }}/>
                        </div>
                        <div className="Input__username__block">
                            <input
                                className="Input__username"
                                type="text"
                                placeholder="Photo URL"
                                value={photourl}
                                onChange={(e) => setPhotourl(e.target.value)}
                                style={{
                                    background: "black",
                                    color: "white",
                                    marginRight: 7,
                                }}/>
                            <img src={User} alt="" style={{
                                width: 25.31,
                                height: 30.31,
                            }}/>
                        </div>
                        <div className="Input__signUp__block">
                            <button className="Button__signUp" onClick={handleClickSaveSettings}>Save Settings</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SettingsUser
