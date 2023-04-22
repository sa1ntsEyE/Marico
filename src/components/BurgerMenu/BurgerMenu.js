import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {removeUser} from "../../store/slices/userSlice";
import {useDispatch} from "react-redux";
import {useAuth} from "../../hooks/use-auth";
import logo from "../../Assests/logo.png";
import './BurgerMenu.css'
import {signOut} from "firebase/auth";
import {auth} from "../../firebase";

const BurgerMenu = () => {
    const dispatch = useDispatch();
    const push = useNavigate();
    const {isAuth , token ,photo, name, nickname, username} = useAuth();

    const logOut = () => {
        signOut(auth).then(() => {
            dispatch(removeUser())
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <div className="wrapper">
            <div className="Burger _container">
                <div className="Burger__header__logo">
                    <Link to="/" style={{color: "white",
                        display: "flex",
                        alignItems: "center",
                    }}>
                        <img src={logo} alt=""/>
                        Marico
                    </Link>
                    <div className="Burger-icon" style={{color:"white"}}>
                        <Link to="/" className="close-icon-menu"><span></span></Link>
                    </div>
                </div>
                <div className="Burger__header__userInfo__block">
                    <div className="Burger__headers__text">
                        <p>Welcome </p>
                        <p> {name} {nickname} {username}</p>
                    </div>
                    <img style={{
                        width: 60,
                        height: 60,
                        borderRadius: "50%",
                    }} src={photo} alt=""/>
                </div>
                <div className="Burger__nav__menu Burgermenu">
                    <nav id="Burgermenu" className="Burger__menu__body">
                        <ul className="Burger__menu__list">
                            <li><Link to="/About" style={{
                                color: '#707070',
                            }}>
                                About
                            </Link></li>
                            <li><Link to="/Pricing" style={{
                                color: '#3C82F4',
                            }}>
                                Pricing
                            </Link></li>
                            <li>
                                <Link to="/Blog" style={{
                                    color: '#707070',
                                }}>
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link to="/SettingsUser" style={{
                                    color: '#707070',
                                }}>
                                    Settings
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="Burger__LogOut">
                    <Link to="/SignUp"><button id="LogOut" style={{
                        width: 119,
                        height: 55,
                        fontFamily: 'Poppins',
                        fontWeight: 500,
                        fontSize: 20,
                        color: '#FFFFFF',
                        background: '#306EF7',
                        borderRadius: 5,
                    }} onClick={logOut} >Log Out</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BurgerMenu