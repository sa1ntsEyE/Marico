import React from "react";
import logo from "../../Assests/logo.png";
import {Link} from "react-router-dom";
import './pricing.css';
import logo2 from "../../Assests/Logo2.png";
import logo3 from "../../Assests/logothird.png";
import {useAuth} from "../../hooks/use-auth";
import {removeUser} from "../../store/slices/userSlice";
import {useDispatch} from "react-redux";
import settings from "../../Assests/settings.png";
import mark from "../../Assests/mark.png"
import {signOut} from "firebase/auth";
import {auth} from "../../firebase";

function Pricing() {
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
                        <Link to="/BurgerMenu" className="icon-menu"><span></span></Link>
                    </div>
                </div>
            </header>
            <section>
                <div className="Plans _container">
                    <div className="Plans__title">
                        Choose the plan that's right for you.
                    </div>
                    <div className="Plans__price">
                        <div className="Starter__bar">
                           <div className="Starter__bar__text">
                               <div className="Starter">
                                   Starter
                               </div>
                               <div className="Perfect">
                                   Perfect for tying out Wavium
                               </div>
                               <div className="Free">
                                   Free
                               </div>
                               <div className="CUS">
                                   Collect Unlimited subscribers
                               </div>
                               <div className="ME">
                                   500 monthly emails
                               </div>
                           </div>
                            <div className="Upgrade">
                                Upgrade to send more emails
                            </div>
                            <div className="Plan__feature">
                                <div className="Plan__feature__title">
                                    Key features
                                </div>
                                <ul className="Plan__feature__base">
                                    <li className="Plan__feature-li">
                                        <img className="Plan__feature-li-img" src={mark} alt=""/>
                                        Automatic updating home page
                                    </li>
                                    <li className="Plan__feature-li">
                                        <img className="Plan__feature-li-img" src={mark} alt=""/>
                                        Unlimited sources + posts
                                    </li>
                                </ul>
                            </div>
                            <div className="Plan__input__block">
                                <input className="Plan__input" type="submit" value="Start For Free"/>
                            </div>
                        </div>
                        <div className="Basic__bar">
                            <div className="Basic__bar__text">
                                <div className="Basic">
                                    Basic
                                </div>
                                <div className="Build">
                                    Build your online home
                                </div>
                                <div className="Price__info__block">
                                    <div className="Price__block">
                                        <div className="Price">
                                            $14
                                        </div>
                                        <div className="Price__month">
                                            Per month
                                        </div>
                                    </div>
                                    <div className="Other__price">
                                        or $19/mo, billed monthly
                                    </div>
                                </div>
                                <div className="CUS">
                                    Collect Unlimited subscribers
                                </div>
                                <div className="ME">
                                    2,000 free monthly emails
                                </div>
                            </div>
                            <div className="Purchase">
                                Purchase more for $0.002 per email
                            </div>
                            <div className="Basic__Plan__feature">
                                <div className="Plan__feature__title">
                                    Everything in starter, plus
                                </div>
                                <ul className="Basic__Plan__feature__base">
                                    <li className="Plan__feature-li">
                                        <img className="Plan__feature-li-img" src={mark} alt=""/>
                                        Remove Wavium branding
                                    </li>
                                    <li className="Plan__feature-li">
                                        <img className="Plan__feature-li-img" src={mark} alt=""/>
                                        Embed Wavium on your own
                                        domain
                                    </li>
                                </ul>
                            </div>
                            <div className="Plan__input__block">
                                <input className="Plan__input" type="submit" value="Start Free 14-day Trial"/>
                            </div>
                        </div>
                        <div className="Complete__bar">
                            <div className="Basic__bar__text">
                                <div className="Complete">
                                    Complete
                                </div>
                                <div className="Enhanced">
                                    Enhanced engagement
                                </div>
                                <div className="Price__info__block">
                                    <div className="Price__block">
                                        <div className="Complete__Price">
                                            $29
                                        </div>
                                        <div className="Complete__Price__month">
                                            Per month
                                        </div>
                                    </div>
                                    <div className="Complete__Other__price">
                                        or $34/mo, billed monthly
                                    </div>
                                </div>
                                <div className="CUS">
                                    Collect Unlimited subscribers
                                </div>
                                <div className="ME">
                                    10,000 free monthly emails
                                </div>
                            </div>
                            <div className="Complete__Purchase">
                                Purchase more for $0.002 per email
                            </div>
                            <div className="Plan__feature">
                                <div className="Plan__feature__title">
                                    Everything in basic, plus
                                </div>
                                <ul className="Plan__feature__base">
                                    <li className="Plan__feature-li">
                                        <img className="Plan__feature-li-img" src={mark} alt=""/>
                                        Collect text massage subscribers
                                    </li>
                                    <li className="Plan__feature-li">
                                        <img className="Plan__feature-li-img" src={mark} alt=""/>
                                        Share posts over text massage
                                    </li>
                                </ul>
                            </div>
                            <div className="Plan__input__block">
                                <input className="Complete__Plan__input" type="submit" value="Start Free 14-day Trial"/>
                            </div>
                        </div>
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

export default Pricing;



// <div className='Blog'>
//     <div className="Pricing__list__main__block">
//         <div className="Pricing__list__second__block _container">
//             <div className="Pricing__list__second__block">
//                 <div className="Pricing__title__block">
//                     <p>Choose the plan that's right for you.</p>
//                 </div>
//                 <div className="Pricing__table__block">
//                     <div className="Pricing__Starter__block">
//                         <div className="Pricing__Starter__info__block">
//                             <h2>Starter</h2>
//                             <h6>Perfect for tying out Wavium</h6>
//                             <h1>Free</h1>
//                             <h5>Collect Unlimited subscribers</h5>
//                             <h4>500 monthly emails</h4>
//                             <p>Upgrade to send more emails</p>
//                         </div>
//                         <div className="Pricing__Starter__Key__block">
//                             <h4>Key features</h4>
//                             <p>Automatic updating home page</p>
//                             <p>Unlimited sources + posts</p>
//                         </div>
//                         <div className="Pricing__Starter__submit__Buy">
//                             <input className="Pricing__Starter__input__Buy" type="submit" value="Start For Free"/>
//                         </div>
//                     </div>
//                     <div className="Pricing__Basic__block">
//                         <div className="Pricing__Basic__info__block">
//                             <h2>Basic</h2>
//                             <h6>Build your online home</h6>
//                             <h1 style={{
//                                 height: 104,
//                                 fontSize: 69,
//                                 display: "flex",
//                                 alignItems:"flex-end",
//                                 width: 257,
//                                 justifyContent: "space-between",
//                             }}>$14 <p style={{
//                                 margin: 0,
//                                 width: 134,
//                                 height: 50,
//                                 fontFamily: 'Poppins',
//                                 fontStyle: 'normal',
//                                 fontWeight: 400,
//                                 fontSize: 26,
//                                 color: '#B4B1B1',
//                             }}>Per month</p></h1>
//                             <h3>or $19/mo, billed monthly</h3>
//                             <h5>Collect Unlimited subscribers</h5>
//                             <h4>2,000 free monthl emails</h4>
//                             <p>Purchase more for $0.002 per email</p>
//                         </div>
//                         <div className="Pricing__Basic__Key__block">
//                             <h4>Everything in starter, plus</h4>
//                             <p>Remove Wavium branding</p>
//                             <p>Embed Wavium on your own domain</p>
//                         </div>
//                         <div className="Pricing__Basic__submit__Buy">
//                             <input className="Pricing__Basic__input__Buy" type="submit" value="Start Free 14-day Trial"/>
//                         </div>
//                     </div>
//                     <div className="Pricing__Complete__block">
//                         <div className="Pricing__Complete__info__block">
//                             <h2>Complete</h2>
//                             <h6>Enhanced engagement</h6>
//                             <h1 style={{
//                                 height: 104,
//                                 fontSize: 69,
//                                 display: "flex",
//                                 alignItems:"flex-end",
//                                 width: 262,
//                                 justifyContent: "space-between",
//                             }}>$29 <p style={{
//                                 margin: 0,
//                                 width: 134,
//                                 height: 50,
//                                 fontFamily: 'Poppins',
//                                 fontStyle: 'normal',
//                                 fontWeight: 400,
//                                 fontSize: 26,
//                                 color: "white",
//                             }}>Per month</p></h1>
//                             <h3>or $34/mo, billed monthly</h3>
//                             <h5>Collect Unlimited subscribers</h5>
//                             <h4>10,000 free monthly emails</h4>
//                             <p>Purchase more for $0.002 per email</p>
//                         </div>
//                         <div className="Pricing__Complete__Key__block">
//                             <h4>Everything in basic, plus </h4>
//                             <p>Collect text massage subscribers</p>
//                             <p>Share posts over text massage</p>
//                         </div>
//                         <div className="Pricing__Complete__submit__Buy">
//                             <input className="Pricing__Complete__input__Buy" type="submit" value="Start Free 14-day Trial"/>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <div className="gets__start__main__block">
//         <div className="gets__start__second__block _container">
//             <div className="gets__start__third__block">
//                 <div className="gets__start__logo__block">
//                     <img src={logo2} alt=""/>
//                 </div>
//                 <div className="gets__start__main__text__block">
//                     <div className="gets__start__second__text__block">
//                         <p className="gets_start_second__text__GSN">Get Started Now</p>
//                         <p className="gets_start_second__text__SIE">Setup is easy and takes under 5 minutes.</p>
//                     </div>
//                 </div>
//                 <div className="gets__start__btn__block">
//                     <input className="gets__start__submit"  type="submit" value="Get Started Now"/>
//                 </div>
//                 <div className="gets__start__counter__block">
//                     <div className="gets__start__text__block">
//                         <div className="gets__start__dot__block">
//                             <p className="gets__start__dot"></p>
//                         </div>
//                         <p className="gets__start__thousand">1000+</p>
//                         <p className="gets__start__text">creators have already started</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <div className="footer__main__block">
//         <div className="footer__second__block _container">
//             <div className="footer__logo__block">
//                 <div className="footer__logo__info">
//                     <div className="footer__logo">
//                         <img src={logo3} alt=""/>
//                     </div>
//                     <div className="footer__logo__name">
//                         <Link to="/" style={{
//                             fontSize: 42,
//                             fontWeight: 800,
//                             color: "white"
//                         }}>
//                             Marico
//                         </Link>
//                     </div>
//                 </div>
//                 <div className="footer__logo__link__block">
//                     info@marico.co
//                 </div>
//             </div>
//             <div className="footer__menu__block">
//                 <ul className='footer__controls__ul'>
//                     <li><Link to="/About" style={{
//                         fontFamily: 'Poppins',
//                         fontWeight: 500,
//                         fontSize: 28,
//                         color: '#707070',
//                     }}>
//                         About
//                     </Link></li>
//                     <li>
//                         <Link to="/Pricing" style={{
//                             fontFamily: 'Poppins',
//                             fontWeight: 500,
//                             fontSize: 28,
//                             color: '#3C82F4',
//                         }}>
//                             Pricing
//                         </Link></li>
//                     <li><Link to="/Blog" style={{
//                         fontFamily: 'Poppins',
//                         fontWeight: 500,
//                         fontSize: 28,
//                         color: '#707070',
//                     }}>
//                         Blog
//                     </Link></li>
//                     <li><Link to="/SignUp" style={{
//                         fontFamily: 'Poppins',
//                         fontWeight: 500,
//                         fontSize: 28,
//                         color: '#707070',
//                     }}>
//                         Sign in
//                     </Link></li>
//                 </ul>
//             </div>
//         </div>
//     </div>
// </div>