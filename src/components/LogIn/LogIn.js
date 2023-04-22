import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {
    FacebookAuthProvider,
    getAuth, GithubAuthProvider,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup, updateProfile,
    sendPasswordResetEmail, onAuthStateChanged
} from "firebase/auth";
import {setUser} from "../../store/slices/userSlice";
import logo from "../../Assests/logo.png";
import './LogIn.css'
import Twitter from '../../Assests/Twitter_logo.png'
import GitHub from '../../Assests/GitHub.png'
import User from "../../Assests/User.png"
import Sign from "../../Assests/Sign.png"
import Eye from "../../Assests/Eye.png"
import EyeY from "../../Assests/Eye-yellow.png"
import Facebook from "../../Assests/Facebook.png"
import Apple from "../../Assests/Apple.png"
import Google from "../../Assests/G_logo.png"
import {Link} from "react-router-dom";
import {removeUser} from "../../store/slices/userSlice";
import {useAuth} from "../../hooks/use-auth";
import {auth} from "../../firebase";


const LogIn = () => {
    const dispatch = useDispatch();
    const push = useNavigate();
    const {isAuth , token ,photo, name, nickname, username} = useAuth();

    const provider = new FacebookAuthProvider();
    const handleClickFacebook = () => {
        signInWithPopup(auth, provider)
            .then((data) => {
                console.log(data);
                dispatch(setUser({
                    id: data.user.uid,
                    token: data.user.accessToken,
                    photo: data.user.photoURL,
                    name: data.user.displayName,
                }));
                push('/');
            })
    }

    const provider2 = new GoogleAuthProvider();
    const handleClickGoogle = () => {
        signInWithPopup(auth, provider2)
            .then((data) => {
                console.log(data);
                dispatch(setUser({
                    id: data.user.uid,
                    token: data.user.accessToken,
                    photo: data.user.photoURL,
                    name: data.user.displayName,
                }));
                push('/');
            })
    }

    const provider3 = new GithubAuthProvider();
    const handleClickGitHub = () => {
        signInWithPopup(auth, provider3)
            .then((data) => {
                console.log(data);
                dispatch(setUser({
                    id: data.user.uid,
                    token: data.user.accessToken,
                    photo: data.user.photoURL,
                    name: data.user.displayName,
                    nickname: data._tokenResponse.screenName,
                }));
                push('/');
            })
    }

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [user, setUsername] = useState('');
    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password, username)
            .then(({user}) => {
                console.log(user)
                updateProfile(user, {
                    displayName: username,
                })
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                    username: user.displayName,
                }));
                push('/');
            })
            .catch(console.error)
    }

    const [toggleIcon, setToggleIcon] = useState(Eye);
    const [type, setType] = useState('password');
    const togglePassInput = (e) => {
        if (type === 'password') {
            setType('text');
            setToggleIcon(EyeY);
        } else {
            setType('password');
            setToggleIcon(Eye);
        }
    };

        return  (
            <div className="wrapper">
                <header>
                    <div className="headers__login _container">
                        <div className="header__logo__login">
                            <Link to="/" style={{color: "white",
                                display: "flex",
                                alignItems: "center",
                            }}>
                                <img src={logo} alt=""/>
                                Marico
                            </Link>
                        </div>
                        <div className='header__button__block'>
                            <div>
                                <Link to="/LogIn">
                                    <button style={{
                                        fontFamily: 'Poppins',
                                        fontWeight: 500,
                                        fontSize: 20,
                                        color: '#707070',
                                        background: '#000',
                                        marginRight: 24,
                                    }}>Login</button>
                                </Link>
                            </div>
                            <div>
                                <Link to="/SignUp">
                                    <button style={{
                                        width: 119,
                                        height: 55,
                                        fontFamily: 'Poppins',
                                        fontWeight: 500,
                                        fontSize: 20,
                                        color: '#FFFFFF',
                                        background: '#306EF7',
                                        borderRadius: 5,
                                    }}>Sign up</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </header>
                <section>
                    <div className="LogIn _container">
                        <div className="LogIn__text">
                            <div className="LogIn__title">
                                Log in
                            </div>
                            <div className="LogIn__subtitle">
                                Login into existing account.
                            </div>
                        </div>
                        <div className="LogIn__input">
                            <div className="Input__emailAdress__block">
                                <input type="email"
                                       className="Input__emailAdressINP"
                                       value={email}
                                       onChange={(e) => setEmail(e.target.value)}
                                       placeholder="Email Address" style={{
                                    background: "black",
                                    color: "white",
                                    marginRight: 7,
                                }}/>
                                <img src={Sign} alt="" style={{
                                    width: 30.31,
                                    height: 30.31,
                                }}/>
                            </div>
                            <div className="Input__password__block">
                                <input type={type}
                                       className="Input__passwordINP"
                                       value={pass}
                                       onChange={(e) => setPass(e.target.value)}
                                       placeholder="Password" style={{
                                    fontSize: 23,
                                    background: "black",
                                    color: "white",
                                    marginRight: 7,
                                }}/>
                                <span onClick={togglePassInput}><img src={toggleIcon} alt=""/></span>
                            </div>
                        </div>
                        <div className="LogIn__Button">
                            <div className="Input__LogIn__block">
                                <button className="Input__LogIn" onClick={() => handleLogin(email, pass)} style={{
                                    background: "#326CF9",
                                    borderRadius: 15,
                                    height: 85,
                                    fontFamily: 'Poppins',
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: 26,
                                    color: "#FFFFFF",
                                    cursor: "pointer",
                                }}>Log In</button>
                            </div>
                            <div className="forgot">
                                <Link to="/ForgotPassword">
                                    Forgot password ?
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="Or _container">
                        <div className="Or__text">
                            <div className="Or__title">
                                Or
                            </div>
                            <div className="Or__subtitle">
                                Log in with...
                            </div>
                        </div>
                        <div className="Or__input">
                            <div className="Input__Facebook__block">
                                <button className="Input__Facebook__button" onClick={handleClickFacebook} style={{
                                    height: 75,
                                    fontFamily: 'Poppins',
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: 21,
                                    lineWeight: 32,
                                    color: "#FFFFFF",
                                    border: "2px solid #fff",
                                    borderRadius: 10,
                                    background: "black",
                                    cursor: "pointer",
                                }}><img src={Facebook} alt="" style={{
                                }}/>Log in with Facebook</button>
                            </div>
                            <div className="Input__Google__block">
                                <button className="Input__Google__button" onClick={handleClickGoogle} style={{
                                    height: 75,
                                    border: "2px solid #fff",
                                    borderRadius: 10,
                                    background: "black",
                                    fontFamily: 'Poppins',
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: 21,
                                    lineWeight: 32,
                                    color: "#FFFFFF",
                                    cursor: "pointer",
                                }}><img src={Google} alt="" style={{
                                }}/>Log in with Google</button>
                            </div>
                            <div className="Input__GitHub__block">
                                <button className="Input__GitHub__button" onClick={handleClickGitHub} style={{
                                    height: 75,
                                    border: "2px solid #fff",
                                    borderRadius: 10,
                                    background: "black",
                                    fontFamily: 'Poppins',
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: 21,
                                    lineWeight: 32,
                                    color: "#FFFFFF",
                                    cursor: "pointer",
                                }}><img src={GitHub} alt="" style={{
                                }}/>Log in with GitHub</button>
                            </div>
                        </div>
                        <div className="Or__text">
                            Don’t have an account? Create One.
                        </div>
                    </div>
                </section>
            </div>
        );
}

export default LogIn;