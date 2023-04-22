import React, {Component} from 'react';
import './HomePage.css'
import {Link, Route, Routes} from "react-router-dom";
import {deleteUser, onAuthStateChanged} from "firebase/auth";
import SignUp from "../../components/SignUp/SignUp";
import LogIn from "../../components/LogIn/LogIn";
import {removeUser, setUser} from "../../store/slices/userSlice";
import {useDispatch} from "react-redux";
import {useAuth} from "../../hooks/use-auth";
import logo from '../../Assests/logo.png'
import screen from '../../Assests/Screen.png'
import bullet from '../../Assests/Bullet.png'
import bullet2 from '../../Assests/Bullet2.png'
import mobile from '../../Assests/Mobile.png'
import screen2 from '../../Assests/Screen2.png'
import screen3 from '../../Assests/SC3.png'
import back from '../../Assests/back.png'
import logo2 from '../../Assests/Logo2.png'
import logo3 from '../../Assests/logothird.png'
import settings from '../../Assests/settings.png'
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

function HomePage() {
    const dispatch = useDispatch()
    const {isAuth, token, photo, name, nickname, username} = useAuth();

    const logOut = () => {
        signOut(auth).then(() => {
            dispatch(removeUser())
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
            <div className='wrapper'>
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
                                <button id="LogOut" style={{
                                    width: 119,
                                    height: 55,
                                    fontFamily: 'Poppins',
                                    fontWeight: 500,
                                    fontSize: 20,
                                    color: '#FFFFFF',
                                    background: '#306EF7',
                                    borderRadius: 5,
                                }} onClick={logOut} >Log Out</button>
                            </div>
                            <Link to="/BurgerMenu" className="icon-menu"><span></span></Link>
                        </div>
                    </div>
                </header>
                <section>
                    <div className="Main__heading _container">
                        <div className="MH__title">
                            Own your audience.
                        </div>
                        <div className="MH__subtitle">
                            So you don't lose them.
                        </div>
                    </div>
                </section>
                <section>
                    <div className="GetStart _container">
                        <div className="GetStart__info">
                            <div className="GetStart__title">
                                Turn your audience into email and text message subscribers.
                            </div>
                            <div className="GetStart__button">
                                <input className="GetStart__submit" type="submit" value="Get Started Now"/>
                                <input className="GetStart__Demo" type="submit" value="View A Demo"/>
                            </div>
                            <div className="GetStart__text__block">
                                <div style={{
                                    width: 27,
                                    height:27,
                                    border: '5px solid #043016',
                                    borderRadius: '50%',
                                    mixBlendMode: 'normal',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginRight: 10

                                }}>
                                    <p className="GetStart__dot" style={{
                                        width: 17,
                                        height:17,
                                        background: '#0FC65C',
                                        borderRadius: '50%',
                                    }}></p>
                                </div>
                                <p className="GetStart__thousand" style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    fontSize: 25,
                                    color: '#FFFFFF',
                                    marginRight: 9,
                                }}>1000+</p>
                                <p className="GetStart__text" style={{
                                    maxWidth: 373,
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    fontSize: 25,
                                    textAlign:"center",
                                    color: "#707070",
                                }}>creators have already started</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="Creators _container">
                        <div className="Creators__info">
                            <div className="Creators__title">
                                Why Creators Love Marico
                            </div>
                            <div className="Creators__bars">
                                <div className="Creators__reduced__block">
                                    <div className="Creators__reduced__block__title">
                                        😀Reduced Anxiety
                                    </div>
                                    <div className="Creators__reduced__block__subtitle">
                                        Never worry about losing your audience.
                                    </div>
                                </div>
                                <div className="Creators__lower__block">
                                    <div className="Creators__lower__block__title">
                                        😄Lower Workload
                                    </div>
                                    <div className="Creators__lower__block__subtitle">
                                        Just share one link. We'll handle the rest.
                                    </div>
                                </div>
                                <div className="Creators__MT__block">
                                    <div className="Creators__MT__block__title">
                                        🥳More Time
                                    </div>
                                    <div className="Creators__MT__block__subtitle">
                                        Spend less time on marketing tools
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="Step-one _container">
                        <div className="Step-one__info">
                            <div className="Step-number">
                                STEP 1
                            </div>
                            <div className="Step-one__title">
                                Connect Your Content
                            </div>
                            <div className="Step-one__subtitle">
                                Bring all of your content together and got a Homepage that automatically updates
                                whenever you create anywhere online.
                            </div>
                            <div className="Step-one__button">
                                <input className="Step-one__submit" type="submit" value="View Avaliable Sources"/>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="Homepage _container">
                        <div className="Homepage__left-bar">
                            <div className="Homepage__title">
                                Your Homepage
                            </div>
                            <div className="Homepage__subtitle">
                                <p className="Homepage__subtitle-child-1">Your Content.</p>
                                <p className="Homepage__subtitle-child-2">All in</p>
                                <p className="Homepage__subtitle-child-3">One Spot</p>
                            </div>
                            <div className="Homepage__paragraph-one">
                                <img src={bullet} alt="" style={{
                                    marginRight: 12,
                                    marginBottom: 12,
                                }}/>
                                Bring all of your content together into one homepage.
                            </div>
                            <div className="Homepage__paragraph-two">
                                <img src={bullet2} alt="" style={{
                                    marginRight: 12,
                                }}/>
                                Your page automatically updates whenever you create.
                            </div>
                            <div className="Homepage__button">
                                <input className="Homepage__button__Get" type="submit" value="Get Started Now"/>
                                <input className="Homepage__button__Demo" type="submit" value="View a Demo"/>
                            </div>
                        </div>
                        <div className="Homepage__right-bar">
                            <img className="Homepage__right-bar-img" src={screen} alt=""/>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="Step-two _container">
                        <div className="Step-two__info">
                            <div className="Step-number-2">
                                STEP 2
                            </div>
                            <div className="Step-two__title">
                                Share Your Homepage
                            </div>
                            <div className="Step-two__subtitle">
                                Share your Wavium homepage link with your followers, and we'll handle the rest.
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="One__Link__Collects _container2">
                        <div className="OLC__left-bar">
                            <div className="OLC__left-bar__info">
                                <div className="OLC__left-bar__title">
                                    One Link
                                </div>
                                <div className="OLC__left-bar__subtitle">
                                    <p className="OLC__left-bar__subtitle-child-1">ALL You Create.</p>
                                    <p className="OLC__left-bar__subtitle-child-2">One Link</p>
                                </div>
                                <div className="OLC__left-bar__img">
                                    <img className="OLC__left-bar__img-mobile" src={mobile} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="OLC__right-bar">
                            <div className="OLC__right-bar__info">
                                <div className="OLC__right-bar__title">
                                    Collect Subscribers
                                </div>
                                <div className="OLC__right-bar__subtitle">
                                    <p className="OLC__right-bar__subtitle-child-1">Emails.</p>
                                    <p className="OLC__right-bar__subtitle-child-2">Phone #s.</p>
                                    <p className="OLC__right-bar__subtitle-child-3">All Yours.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="OLC__center-bar _container2">
                        <input type="submit" value="Get started"/>
                    </div>
                </section>
                <section>
                    <div className="Step-three _container">
                        <div className="Step-three__info">
                            <div className="Step-number-3">
                                STEP 3
                            </div>
                            <div className="Step-three__title">
                                Send Emails & Text Messages
                            </div>
                            <div className="Step-three__subtitle">
                                No more going through a social platform. Reach and engage
                                your audience directly over email and text massage.
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="CreateShare _container">
                        <div className="CreateShare__left-bar">
                            <div className="CreateShare__title">
                                Create & Share
                            </div>
                            <div className="CreateShare__subtitle">
                                <p className="CreateShare__subtitle-child-1">Reach Your</p>
                                <p className="CreateShare__subtitle-child-2">Audience</p>
                                <p className="CreateShare__subtitle-child-3">Directly.</p>
                            </div>
                            <div className="CreateShare__paragraph-one">
                                <img src={bullet} alt="" style={{
                                    marginRight: 12,
                                    marginBottom: 12,
                                }}/>
                                Embed content or create something new to share.
                            </div>
                            <div className="CreateShare__paragraph-two">
                                <img src={bullet2} alt="" style={{
                                    marginRight: 12,
                                }}/>
                                Share content over email, text message or your homepage.
                            </div>
                            <div className="CreateShare__button">
                                <input className="CreateShare__button__Get" type="submit" value="Get Started Now"/>
                                <input className="CreateShare__button__Demo" type="submit" value="View a Demo"/>
                            </div>
                        </div>
                        <div className="CreateShare__right-bar">
                            <img className="CreateShare__right-bar-img" src={screen2} alt=""/>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="Agree _container3">
                        <div className="Agree__title">
                            Experts Agree
                        </div>
                        <div className="Agree__sub__img">
                            <img className="Agree__img" src={screen3} alt=""/>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="Audience">
                        <div className="Audience__title">
                            We've helped over 1,000 creatorsre
                            claim control of their audience.
                        </div>
                        <div className="Audience__img__block">
                            <img className="Audience__img" src={back} alt=""/>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="GS _container">
                        <div className="GS__logo">
                            <img src={logo2} alt=""/>
                        </div>
                        <div className="GS__title">
                            Get Started Now
                        </div>
                        <div className="GS__subtitle">
                            Setup is easy and takes under 5 minutes.
                        </div>
                        <div className="GS__button__block">
                            <input className="GS__button" type="submit" value="Get Started Now"/>
                        </div>
                        <div className="GS__paragraph">
                            <div className="GetStart__text__block">
                                <div style={{
                                    width: 37,
                                    height:37,
                                    border: '5px solid #043016',
                                    borderRadius: '50%',
                                    mixBlendMode: 'normal',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginRight: 10

                                }}>
                                    <p className="GetStart__dot" style={{
                                        width: 22,
                                        height:22,
                                        background: '#0FC65C',
                                        borderRadius: '50%',
                                    }}></p>
                                </div>
                                <p className="GetStart__thousand" style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    fontSize: 38,
                                    color: '#FFFFFF',
                                    marginRight: 9,
                                }}>1000+</p>
                                <p className="GetStart__text" style={{
                                    maxWidth: 567,
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    fontSize: 38,
                                    textAlign:"center",
                                    color: "#707070",
                                }}>creators have already started</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="footer _container">
                        <div className="footer__logo">
                            <div className="footer__logo__name">
                                <img className="footer__logo__img" src={logo3} alt=""/>
                                Marico
                            </div>
                            <div className="footer__logo__info">
                                info@marico.co
                            </div>
                        </div>
                        <div className="footer__nav">
                            <nav id="menu" className="footer__body">
                                <ul className="footer__list">
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
                        <Link to="/BurgerMenu" className="icon-menu"><span></span></Link>
                    </div>
                </section>
            </div>
        );
}

export default HomePage;